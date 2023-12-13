import React, { useEffect, useState } from 'react';

import { Box, Modal, Typography } from '@mui/material';
import { useFormik } from 'formik';

import InputAddress from './InputAddress';
import InputGroup from '../InputGroup';

import * as Yup from 'yup';
import styles from '../form.module.css'
import axiosClient from 'utils/axiosClient';
import { useNavigate } from 'react-router-dom';


const CustomerEditForm = ({ userData, roleData }) => {

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
            fullName: '',
            gender: '',
            birthday: '',
            phoneNumber: '',
            email: '',
            city: '',
            district: '',
            ward: '',
            street: '',
            password: '',
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
        }),

        onSubmit: async (values, roleData) => {
            try {
                const res = await axiosClient.put(`/customers/${userData.id}` , values)

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
            fullName: userData.fullName || '',
            birthday: userData.birthday || '',
            phoneNumber: userData.phoneNumber || '',
            email: userData.email || '',
            city: userData.city || '',
            district: userData.district || '',
            ward: userData.ward  || '',
            street: userData.street || '',
            password: userData.password || ''
        });


    }, [userData, validation.setValues]);


    return (
        <div className='px-5 mx-auto my-5'>
            <div className="d-flex flex-column" >
                <div className='col mb-4'>
                    <InputGroup
                        label="Full name"
                        name="fullName"
                        validation={validation}
                        onChange={validation.handleChange}
                    />
                </div>

                <div className='mb-4 col'>
                    <InputGroup
                        label="Email"
                        name="email"
                        type='email'
                        validation={validation}
                    />
                </div>

                <div className='col mb-4'>
                    <InputGroup
                        label="Phone"
                        name="phoneNumber"
                        validation={validation}
                    />
                </div>


                <div className='mb-4'>
                    <InputAddress
                        validation={validation}
                        userData={userData}
                    />
                </div>

                <div className='mb-4'>
                    <InputGroup
                        label="Street"
                        name="street"
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
                            Register status
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
                            Register status
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

export default CustomerEditForm;