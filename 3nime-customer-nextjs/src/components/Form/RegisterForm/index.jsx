import React, { useState } from 'react';
import Link from 'next/link';

import { Box, Modal, Typography } from '@mui/material';
import { axiosClient } from '@/libraries/axiosClient';
import { useFormik } from 'formik';

import InputAddress from './InputAddress';
import InputGroup from './InputGroup';
import SelectGroup from './SelectGroup';

import * as Yup from 'yup';
import styles from '@/styles/form.module.css'
import { useRouter } from 'next/router';


const RegisterForm = () => {
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);
    const handleClose = () => {
        setOpenError(false)
        setOpenSuccess(false)
    }

    const redirect = useRouter()

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
            phoneNumber: '',
            email: '',
            city: '',
            district: '',
            ward: '',
            street: '',
            password: '',
            confirmPassword: '',
            gender: '',
        },

        validationSchema: Yup.object({
            email: Yup
                .string()
                .email('Email không hợp lệ')
                .required('Vui lòng điền email nhé!'),

            phoneNumber: Yup
                .string()
                .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Số điện thoại sai rồi')
                .required('Số điện thoại cần để liên hệ nhé!'),

            fullName: Yup
                .string()
                .min(2, 'Tên phải ít nhất 2 kí tự')
                .max(50, 'Tên chỉ tối đa 100 kí tự')
                .required('Tên người dùng sẽ bắt buộc nhé!'),

            gender: Yup
                .string(),
            // .required('Vui lòng chọn giới tính nha!'),

            birtday: Yup
                .date('Ngày sinh theo định dạng YYYY/MM/DD nha!'),
            // .required('Ngày tháng năm sinh bắt buộc nhập nha!'),

            city: Yup
                .string()
                .required('Thành phố / Tỉnh bắt buộc nhập nha!'),

            district: Yup
                .string()
                .required('Quận / Huyện bắt buộc nhập nha!'),

            ward: Yup
                .string()
                .required('Phường / Xã bắt buộc nhập nha!'),

            street: Yup
                .string()
                .required('Địa chỉ bắt buộc nhập nha!'),

            password: Yup
                .string()
                .min(6, 'Mật khẩu ít nhất 6 kí tự')
                .max(12, 'Mật khẩu chỉ tối đa 12 kí tự')
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/gm, 'Mật khẩu bắt buộc phải có ít nhất 1 chữ cái in hoa và 1 chữ số')
                .required('Mật khẩu băt buộc phải có nhé!'),

            confirmPassword: Yup
                .string()
                .oneOf([Yup.ref('password')], "Mật khẩu không trùng")
                .required('Phải nhập lại mật khẩu nhé!'),
        }),

        onSubmit: async (values) => {
            try {
                const res = await axiosClient.post('/customers/', values)

                if (res.status === 200) {
                    setOpenSuccess(true)
                    setTimeout(() => {
                        redirect.push('/login')
                    }, 5000);
                }
            } catch (error) {
                setOpenError(true)
                console.log('««««« error »»»»»', error);
            }

        },

    });

    return (
        <div className={`px-5 mx-auto my-5 ${styles.formContainer}`}>
            <h1 className='mb-4' style={{ color: '#EE2D7A' }}>Đăng ký</h1>

            <div className="d-flex flex-column" >
                <div className="d-flex justify-content-around row">
                    <div className='col-7 col-lg-8 mb-4'>
                        <InputGroup
                            label="Tên"
                            name="fullName"
                            validation={validation}
                            onChange={validation.handleChange}
                        />
                    </div>

                    <div className='col-5 col-lg-4'>
                        <SelectGroup
                            label="Giới tính"
                            name="gender"
                            validation={validation}
                            onChange={validation.handleChange}
                        />
                    </div>
                </div>

                <div className="d-flex justify-content-around row mb-4">
                    <div className='col col-lg-7'>
                        <InputGroup
                            label="Số điện thoại"
                            name="phoneNumber"
                            validation={validation}
                            classNamees="valid"
                        />
                    </div>

                    <div className='col col-lg-5'>
                        <InputGroup
                            label="Ngày sinh"
                            name="birtday"
                            placeholder='YYYY/MM/DD'
                            validation={validation}
                            classNamees="valid"
                        />
                        {/* <DateGroup /> */}
                    </div>
                </div>

                <div className='mb-4'>
                    <InputGroup
                        label="Email"
                        name="email"
                        type='email'
                        validation={validation}
                        classNamees="valid"
                    />
                </div>

                <div className='mb-4'>
                    <InputAddress
                        validation={validation}
                        classNamees="valid"
                    />
                </div>

                <div className='mb-4'>
                    <InputGroup
                        label="Địa chỉ "
                        type="text"
                        name="street"
                        validation={validation}
                    />
                </div>

                <div className='mb-4'>
                    <InputGroup
                        label="Mật khẩu"
                        type="password"
                        name="password"
                        validation={validation}
                    />
                </div>

                <div >
                    <InputGroup
                        label="Xác nhận lại mật khẩu"
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
                        Đăng ký
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
                            Tình trạng đăng ký
                        </Typography>
                        <hr />
                        <Typography id="modal-modal-description">
                            Bạn đã đăng ký thành công !
                        </Typography>

                        <div className='mt-4'>
                            <button className={`btn ${styles.modal__btn}`} onClick={handleClose}>
                                <Link className={styles.modal__link} href={'/'}>Đến trang đăng nhập</Link>
                            </button>
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
                            Tình trạng đăng ký
                        </Typography>
                        <hr />
                        <Typography id="modal-modal-description">
                            Đã có tài khoản khác trùng với thông tin số điện thoại hay email đang sử dụng để đăng ký, bạn vui lòng chọn thông tin khác nha !
                        </Typography>

                        <div className='mt-3'>
                            <button className={`btn ${styles.modal__btn}`} onClick={handleClose}>Quay lại</button>
                        </div>
                    </div>

                </Box>
            </Modal>

            <div className='mt-3'>
                <p>Bạn đã có mật khẩu ?</p>
                <Link href='/login'>
                    <em className={styles.form__item} >Bấm vào đây để đăng nhập nào !</em>
                </Link>
            </div>
        </div>
    );
};

export default RegisterForm;