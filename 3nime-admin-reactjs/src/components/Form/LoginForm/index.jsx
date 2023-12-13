import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import InputGroup from '../InputGroup';

import styles from '../form.module.css'
import { Box, Modal, Typography } from '@mui/material';
import axiosClient from 'utils/axiosClient';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

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
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid Email')
        .required('Email is required'),

      password: Yup.string()
        .min(6, 'Minimum 6 characters')
        .max(12, 'Maximum 12 characters')
        .required('Password is required'),
    }),

    onSubmit: async (values) => {
      try {
        setLoading(true);

        const res = await axiosClient.post('/auth/login', values);

        if (res.status === 200) {
          localStorage.setItem("TOKEN", res.data.token)
          localStorage.setItem("REFRESH-TOKEN", res.data.refreshToken)
          if (res && res.data.token) {
            navigate('/');
          }
        }

      } catch (error) {
        setOpen(true)
        console.log('««««« error »»»»»', error);
      } finally {

        setLoading(false);
      }
    },
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      validation.handleSubmit();
    }
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    document.addEventListener("keydown", handleEnterKey);
    return () => {
      document.removeEventListener("keydown", handleEnterKey);
    };
  }, []);

  return (
    <div className='px-5 mx-auto my-5'>
      <h1 className='mb-4' style={{ color: '#EE2D7A' }}>Login</h1>

      <div className="d-flex flex-column" >
        <div className='mb-4'>
          <InputGroup
            label="Email"
            name="email"
            validation={validation}
            placeholder='Type your email here'
          />
        </div>
        <div className='row d-flex align-items-center'>
          <div className='col-11'>
            <InputGroup
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              validation={validation}
              placeholder='Type your password here'
            />
          </div>
          <span
            onClick={handleTogglePassword}
            className='col-1 mt-3'
          >
            {showPassword ? (
              <i className="fa-regular fa-eye" />
            ) : (
              <i className="fa-regular fa-eye-slash" />
            )}
          </span>
        </div>

        <div className='mx-auto my-3'>
          <button
            type='submit'
            onClick={validation.handleSubmit}
            className={`btn btn-lg border border-0 text-white px-5 ${styles.modal__btn}`}
            disabled={loading}
            onKeyDown={handleEnterKey}

          >
            Login
          </button>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='d-flex flex-column'>
            <Typography className={styles.form__item} id="modal-modal-title" variant="h6" component="h2">
              Login status
            </Typography>
            <hr />
            <Typography id="modal-modal-description">
              Wrong email or password
            </Typography>

            <div className='mt-3'>
              <button className={`btn ${styles.modal__btn}`} onClick={handleClose}>Back</button>
            </div>
          </div>

        </Box>
      </Modal>

      <div className='d-flex justify-content-between mt-3 flex-column flex-md-row'>
        <div className="registerLink">
          <p>Create a new account</p>
          <Link to='/register'>
            <em className={styles.form__item}> Click here</em>
          </Link>
        </div>

        <div className="ResetPassLink mt-4 mt-md-0">
          <p>Forget your password ?</p>
          <Link to='/register'>
            <em className={styles.form__item}> Click here</em>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;