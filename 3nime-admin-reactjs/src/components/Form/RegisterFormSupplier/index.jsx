import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Modal, Typography } from '@mui/material';
import { useFormik } from 'formik';

import * as yup from 'yup';

import InputGroup from '../InputGroup';
import axiosClient from 'utils/axiosClient';

import styles from '../form.module.css'

const SupplierRegisterForm = () => {
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);
    const handleClose = () => {
        setOpenError(false)
        setOpenSuccess(false)
    }

    const navigate = useNavigate()

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
        initialValues: {
            name: "",
            address: "",
            phoneNumber: "",
            email: "",
            isDeleted: false,
            createdAt: Date.now(),
        },

        validationSchema: yup.object({
            name: yup.string().max(50).required('Supplier name is required'),
            isDeleted: yup.bool().required(),
            email: yup.string().email('Supplier email is required'),
            address: yup.string().max(500),
            phoneNumber: yup
                .string()
                .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Invalid phone number')
                .required('Phone number is required'),
        }),

        onSubmit: async (values) => {
            try {
                const res = await axiosClient.post('/suppliers/', values)

                if (res.status === 200) {
                    setOpenSuccess(true)
                    setInterval(() => {
                        navigate(0)
                    }, 1000);
                }
            } catch (error) {
                setOpenError(true)
                console.log('««««« error »»»»»', error);
            }

        },

    });

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
                            Registing status
                        </Typography>
                        <hr />
                        <Typography id="modal-modal-description">
                            Successfully !
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
                            Registing status
                        </Typography>
                        <hr />
                        <Typography id="modal-modal-description">
                            Failed !
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

export default SupplierRegisterForm;