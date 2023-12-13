import React, { useEffect, useState } from 'react';

import { Box, Modal, Typography } from '@mui/material';
import { useFormik } from 'formik';

import InputGroup from '../InputGroup';

import * as Yup from 'yup';
import styles from '../form.module.css'
import axiosClient from 'utils/axiosClient';
import { useNavigate } from 'react-router-dom';


const CategoryEditForm = ({ selectedCategory }) => {

    const [openSuccess, setOpenSuccess] = useState(false);

    const [openError, setOpenError] = useState(false);

    const navigate =useNavigate()

    const handleClose = () => {
        setOpenError(false)
        setOpenSuccess(false)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid var(--main-color)',
        boxShadow: 24,
        p: 4,
        borderRadius: '16px'
    };

    const validation = useFormik({
        debug:true,
        enableReinitialize: true,

        initialValues: {
            name: "",
            description: "",
            isDeleted: false,
            createdAt: "",
            updatedAt: ""
        },

        validationSchema: Yup.object({
            name: Yup.string().max(500).required(),
            isDeleted: Yup.bool().required(),
            description: Yup.string().max(500),
        }),

        onSubmit: async (values) => {
            try {
                const res = await axiosClient.put(`/categories/${selectedCategory._id}` , values)

                if (res.status === 200) {
                    setOpenSuccess(true)
                    navigate(0)
                }

            } catch (error) {
                setOpenError(true)
                console.log('««««« error »»»»»', error);
            }

        },

    });

    useEffect(() => {
        validation.setValues({
            name: selectedCategory.name || '',
            description: selectedCategory.description || '',
            createdAt: selectedCategory.createdAt || '',
            updatedAt: Date.now(),
            isDeleted:selectedCategory.isDeleted || false
        }
        )}, [selectedCategory, validation.setValues]);

    return (
        <div className='px-5 mx-auto my-5'>
            <div className="d-flex flex-column" >
                <div className='col mb-4'>
                    <InputGroup
                        label="Category name"
                        name="name"
                        validation={validation}
                        onChange={validation.handleChange}
                    />
                </div>

                <div className='mb-4 col'>
                    <InputGroup
                        label="Description"
                        name="description"
                        validation={validation}
                    />
                </div>

                <div className='my-3 d-flex justify-content-center'>
                    <button
                        type='submit'
                        onClick={validation.handleSubmit}
                        className={`btn btn-lg border border-0 text-white px-5 ${styles.modal__btn}`}
                    >
                        Save Change
                    </button>
                </div>
            </div>

            <Modal
                open={openSuccess}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='d-flex flex-column'>
                        <Typography className={styles.form__item} id="modal-modal-title" variant="h6" component="h2">
                            Update status
                        </Typography>
                        <hr />
                        <Typography id="modal-modal-description">
                            Editing successfully !
                        </Typography>

                        <div className='mt-3 d-flex justify-content-center'>
                            <button className={`btn ${styles.modal__btn} fs-5 `} onClick={handleClose}>Back</button>
                        </div>
                    </div>

                </Box>
            </Modal>

            <Modal
                open={openError}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='d-flex flex-column'>
                        <Typography className={styles.form__item} id="modal-modal-title" variant="h6" component="h2">
                            Update status
                        </Typography>
                        <hr />
                        <Typography id="modal-modal-description">
                            Editing failed !
                        </Typography>

                        <div className='mt-3 d-flex justify-content-center'>
                            <button className={`btn ${styles.modal__btn} fs-5 `} onClick={handleClose}>Back</button>
                        </div>
                    </div>

                </Box>
            </Modal>
        </div>
    );
};

export default CategoryEditForm;