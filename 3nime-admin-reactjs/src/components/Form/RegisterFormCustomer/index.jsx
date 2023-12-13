import React, { useState } from 'react';

import { Box, Modal, Typography } from '@mui/material';
import { useFormik } from 'formik';

import InputAddress from './InputAddress';
import InputGroup from '../InputGroup';
import SelectGroup from './SelectGroup';

import * as Yup from 'yup';
import styles from '../form.module.css'
import axiosClient from 'utils/axiosClient';
import DateGroup from './DateGroup';
import { useNavigate } from 'react-router-dom';


const CustomerRegisterForm = () => {
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
            fullName: '',
            birthday: '',
            phoneNumber: '',
            email: '',
            city: '',
            district: '',
            ward: '',
            street: '',
            password: '',
            confirmPassword: '',
        },

        validationSchema: Yup.object({
            email: Yup
                .string()
                .email('Invalid email')
                .required('Email is required'),

            phoneNumber: Yup
                .string()
                .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Invalid phone number')
                .required('Phone number is required'),

            fullName: Yup
                .string()
                .min(2, 'Tên phải ít nhất 2 kí tự')
                .max(50, 'Tên chỉ tối đa 100 kí tự')
                .required('Full name is required'),

            gender: Yup
                .string()
                .required('Please choose your gender'),

            birthday: Yup
                .date()
                .required('Birthday is required'),

            city: Yup
                .string()
                .required('City is required'),

            district: Yup
                .string()
                .required('District is required'),

            ward: Yup
                .string()
                .required('Ward is required'),

            street: Yup
                .string()
                .required('Street is required'),

            password: Yup
                .string()
                .min(6, 'Minimum 6 characters')
                .max(12, 'Maximum 12 characters')
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/gm, 'Password must content at least 1 uppercase letter, and 1 number')
                .required('Password is required'),

            confirmPassword: Yup
                .string()
                .oneOf([Yup.ref('password')], "Password does not match")
                .required('Re-confirm password is required'),
        }),

        onSubmit: async (values) => {
            try {
                const res = await axiosClient.post('/customers/', values)

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
            <h1 className='mb-4' style={{ color: '#EE2D7A' }}>Register </h1>

            <div className="d-flex flex-column" >
                <div className="d-flex justify-content-around row">
                    <div className='col-7 col-lg-8 mb-4'>
                        <InputGroup
                            label="Full name"
                            name="fullName"
                            validation={validation}
                            onChange={validation.handleChange}
                        />
                    </div>

                    <div className='col-5 col-lg-4'>
                        <SelectGroup
                            label="Gender"
                            name="gender"
                            validation={validation}
                            onChange={validation.handleChange}
                        />
                    </div>
                </div>

                <div className="d-flex justify-content-around row mb-4">
                    <div className='col col-lg-7'>
                        <InputGroup
                            label="Phone"
                            name="phoneNumber"
                            validation={validation}
                        />
                    </div>

                    <div className='col col-lg-5'>
                        <DateGroup
                            label="Birthday"
                            name="birthday"
                            validation={validation}
                        />
                    </div>
                </div>

                <div className='mb-4'>
                    <InputGroup
                        label="Email"
                        name="email"
                        type='email'
                        validation={validation}
                    />
                </div>

                <div className='mb-4'>
                    <InputAddress
                        validation={validation}
                    />
                </div>

                <div className='mb-4'>
                    <InputGroup
                        label="Street"
                        name="street"
                        validation={validation}
                    />
                </div>

                <div className='mb-4'>
                    <InputGroup
                        label="Password"
                        type="password"
                        name="password"
                        validation={validation}
                    />
                </div>

                <div >
                    <InputGroup
                        label="Reconfirm password"
                        type="password"
                        name="confirmPassword"
                        validation={validation}
                    />
                </div>

                <div className='mx-auto my-3'>
                    <button
                        type='submit'
                        onClick={validation.handleSubmit}
                        className={`btn btn-lg border border-0 text-white px-5 ${styles.modal__btn}`}
                    >
                        Add
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
                            Register status
                        </Typography>
                        <hr />
                        <Typography id="modal-modal-description">
                            Successfully !
                        </Typography>

                        <div className='mt-4'>
                            <div className='mt-3'>
                                <button className={`btn ${styles.modal__btn}`} onClick={handleClose}>Back</button>
                            </div>
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
                            Register status
                        </Typography>
                        <hr />
                        <Typography id="modal-modal-description">
                            The current phone number or email have been used by another account.
                        </Typography>

                        <div className='mt-3'>
                            <button className={`btn ${styles.modal__btn}`} onClick={handleClose}>Back</button>
                        </div>
                    </div>

                </Box>
            </Modal>
        </div>
    );
};

export default CustomerRegisterForm;