import React, { useEffect, useState } from 'react';

import { Box, Modal, Typography } from '@mui/material';
import { useFormik } from 'formik';

import InputGroup from '../InputGroup';

import * as yup from 'yup';
import styles from '../form.module.css'
import axiosClient from 'utils/axiosClient';
import { useNavigate } from 'react-router-dom';


const SupplierEditForm = ({ selectedSupplier }) => {

    const [openSuccess, setOpenSuccess] = useState(false);

    const [openError, setOpenError] = useState(false);

    const navigate = useNavigate()

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
        debug: true,
        enableReinitialize: true,

        initialValues: {
            name: "",
            address: "",
            phoneNumber: "",
            email: "",
            isDeleted: false,
            createdAt: "",
            updatedAt: ""
        },

        validationSchema: yup.object({
            name: yup.string().max(50).required(),
            isDeleted: yup.bool().required(),
            email: yup.string().email(),
            address: yup.string().max(500),
            phoneNumber: yup
                .string()
                .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Invalid phone number')
                .required('Phone number is required'),
        }),

        onSubmit: async (values) => {
            try {
                const res = await axiosClient.put(`/suppliers/${selectedSupplier._id}`, values)

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
            name: selectedSupplier.name || '',
            address: selectedSupplier.address || '',
            phoneNumber: selectedSupplier.phoneNumber || '',
            email: selectedSupplier.email || '',
            createdAt: selectedSupplier.createdAt || '',
            updatedAt: Date.now(),
            isDeleted: selectedSupplier.isDeleted || false
        }
        )
    }, [selectedSupplier, validation.setValues]);

    return (
        <div className='px-5 mx-auto my-5'>
            <div className="d-flex flex-column" >
                <div className='col mb-4'>
                    <InputGroup
                        label="Supplier name"
                        name="name"
                        validation={validation}
                        onChange={validation.handleChange}
                    />
                </div>

                <div className='mb-4 col'>
                    <InputGroup
                        label="Supplier address"
                        name="address"
                        validation={validation}
                    />
                </div>

                <div className='mb-4 col'>
                    <InputGroup
                        label="Supplier email"
                        name="email"
                        type='email'
                        validation={validation}
                    />
                </div>

                <div className='mb-4 col'>
                    <InputGroup
                        label="Supplier phone number"
                        name="phoneNumber"
                        type='number'
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

export default SupplierEditForm;