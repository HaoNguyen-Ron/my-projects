import React, { useEffect, useState } from 'react';

import InputGroup from '../InputGroup';

import { Box, Modal, Typography } from '@mui/material';
import { useFormik } from 'formik';

import * as Yup from 'yup';
import axiosClient from 'utils/axiosClient';
import { useNavigate } from 'react-router-dom';

import styles from '../form.module.css'
import SelectCategory from './SelectCategory';
import SelectSupplier from './SelectSupplier';

const ProductEditForm = ({ selectedProduct }) => {

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
        enableReinitialize: true,

        initialValues: {
            name: '',
            price: '',
            discount: '0',
            stock: '',
            description: '',
            supplierId: '',
            categoryId: '',
            isDelete: false
        },

        validationSchema: Yup.object({
            name: Yup
                .string()
                .max(50, "Maximum 50 characters")
                .required("Name is Required!"),

            price: Yup
                .number()
                .min(0, "Price must be positive number")
                .integer("Number")
                .required(`Price is required`),

            discount: Yup
                .number()
                .min(0, "Discount must be positive number")
                .max(75, "Maximum discount is 75%")
                .integer("Number")
                .required(`Discount is required`),

            stock: Yup
                .number()
                .min(0, "Invalid quantity")
                .integer("Number")
                .required(`Stock is required`),

            description: Yup
                .string()
                .max(3000, "Maxium 3000 characters")
                .required(`Description is required`),

            categoryId: Yup
                .string()
                .required("Category is required"),

            supplierId: Yup
                .string()
                .required("Supplier is required")
        }),

        onSubmit: async (values) => {
            try {
                const res = await axiosClient.put(`/products/${selectedProduct._id}`, values)

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
            name: selectedProduct.name || '',
            price: selectedProduct.price || '0',
            discount: selectedProduct.discount || '0',
            stock: selectedProduct.stock || '0',
            description: selectedProduct.description || '',
            supplierId: selectedProduct.supplierId || '',
            categoryId: selectedProduct.categoryId || '',
            isDelete: selectedProduct.isDelete || false
        });


    }, [selectedProduct, validation.setValues]);


    return (
        <div className='px-5 mx-auto my-5'>
            <div>
                <img src={selectedProduct.description} alt="" />

                <div className="input-group my-4">
                    <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
                    <input type="file" className="form-control" id="inputGroupFile01" />
                </div>
            </div>

            <div className="d-flex flex-column" >
                <div className='col mb-4'>
                    <InputGroup
                        label="Product name"
                        name="name"
                        validation={validation}
                        onChange={validation.handleChange}
                    />
                </div>

                <div className='mb-4 col'>
                    <InputGroup
                        label="Price"
                        name="price"
                        validation={validation}
                        onChange={validation.handleChange}
                    />
                </div>

                <div className='col mb-4'>
                    <InputGroup
                        label="Discount"
                        name="discount"
                        validation={validation}
                        onChange={validation.handleChange}
                        type='number'
                    />
                </div>

                <div className='mb-4'>
                    <InputGroup
                        label="Stock"
                        name="stock"
                        validation={validation}
                        onChange={validation.handleChange}
                        type='number'
                    />
                </div>

                <div className='mb-4'>
                    <SelectCategory
                        label="Category"
                        name="categoryId"
                        validation={validation}
                        onChange={validation.handleChange}
                        selectedCategory={selectedProduct.category}
                    />
                </div>

                <div className='mb-4'>
                    <SelectSupplier
                        label="Supplier"
                        name="supplierId"
                        validation={validation}
                        onChange={validation.handleChange}
                        selectedSupplier={selectedProduct.supplier}
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

            {/* -----------------------------Modal area ---------------------------------*/}
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

export default ProductEditForm;