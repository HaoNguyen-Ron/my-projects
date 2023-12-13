import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { Box, Modal, Typography } from '@mui/material';
import * as Yup from 'yup';

import axiosClient from 'utils/axiosClient';

import styles from '../form.module.css'

import SelectCustomer from './SelectCustomer';
import SelectPaymentType from './SelectPaymentType';
import SelectProduct from './SelectProduct';
import { getProductAll } from 'utils/Api';
import { getMe } from 'utils/Api/auth';

const OrderRegisterForm = () => {
    const [employeeId, setEmployeeId] = useState({
        employeeId: ''
    })
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);

    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);

    const [selectedCustomerId, setSelectedCustomerId] = useState('');
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [productQuantities, setProductQuantities] = useState({});
    const [totalCash, setTotalCash] = useState();

    const [orderDetails, setOrderDetails] = useState([]);


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
            createdDate: new Date(),
            paymentType: '',
            status: 'WAITING',
            customerId: '',
            employeeId: '',
            isDelete: false,
            orderDetails: [],
        },

        validationSchema: Yup.object({
            paymentType: Yup
                .string()
                .required("Vui lòng chọn phương thức thanh toán")
                .oneOf(["CASH", "CREDIT_CARD"], "Phương thức thanh toán không hợp lệ"),

            employeeId: Yup
                .string()
                .required("Supplier Id is required"),

            customerId: Yup
                .string()
                .required("Customer Id is required"),
        }),

        onSubmit: async (values) => {
            try {
                const res = await axiosClient.post('/orders/', values)

                if (res.status === 200) {
                    setOpenSuccess(true)
                    setTimeout(() => {
                        navigate(0);
                    }, 1000)
                }

            } catch (error) {
                setOpenError(true)
                console.log('««««« error »»»»»', error);
            }

        },

    });

    const getSelectedProductsData = () => {
        // Use the selected product IDs to filter the productList
        const selectedProductsData = productList.filter((product) =>
            selectedProduct.includes(product._id)
        );

        return selectedProductsData;
    };

    const handleQuantityChange = (e, productId) => {
        if (e && e.target) {
            const newQuantities = { ...productQuantities, [productId]: Number(e.target.value) };
            setProductQuantities(newQuantities);
            calculateTotalCash(); // Update total cash when quantity changes
        }
    }

    const calculateTotalCash = () => {
        let total = 0;

        selectedProduct.forEach(productId => {
            const product = productList.find(product => product._id === productId);
            const quantity = productQuantities[productId] || 1;

            // Calculate the cash for each product
            const productCash = (product.price - (product.price * product.discount / 100)) * quantity;

            // Add the cash to the total
            total += productCash;
        });

        setTotalCash(total);
    };

    useEffect(() => {
        getMe().then(data => {
            setEmployeeId({
                employeeId: data._id
            })
        })
        getProductAll().then(data => {
            setProductList(data || []);
        });

        calculateTotalCash();

        const selectedProductsData = getSelectedProductsData();

        // Map selected products to orderDetails format
        const updatedOrderDetails = selectedProductsData.map(product => ({
            productId: product._id,
            quantity: productQuantities[product._id] || 1,
            price: product.price,
            discount: product.discount,
        }));

        // Update the state with the new orderDetails
        setOrderDetails(updatedOrderDetails);

    }, [selectedProduct, productQuantities]);
    
    return (
        <form className='px-5 mx-auto my-5' onSubmit={validation.handleSubmit}>
            <div className="d-flex flex-column" >
                <div className='text-center'>
                    <SelectCustomer
                        label="Customer"
                        validation={validation}
                        setSelectedCustomerId={setSelectedCustomerId}
                    />
                </div>

                <div>
                    <div className='mb-5'>
                        Customer Id:
                        <div className='border rounded p-1 p-lg-4'>

                            {
                                selectedCustomerId ? (
                                    <b>{selectedCustomerId}</b>
                                ) : (
                                    <h4> Please choose a customer</h4>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className=' mb-5'>
                    <SelectPaymentType
                        label="Payment Type"
                        name="paymentType"
                        validation={validation}
                        onChange={validation.handleChange}
                    />
                </div>

                <div className='text-center'>
                    <SelectProduct
                        label="Product"
                        name="orderDetails"
                        onChange={validation.handleChange}
                        setSelectedProduct={setSelectedProduct}
                        productList={productList}
                    />
                </div>

                <div>
                    Cart:
                    <div className='border rounded p-1 p-lg-4' style={{ maxHeight: '350px', overflowY: 'auto' }}>
                        {
                            selectedProduct.length !== 0 ? (
                                getSelectedProductsData().map((product, index) => {
                                    const productId = product._id;
                                    const quantity = productQuantities[productId] || 1;

                                    return (
                                        <div key={product._id} className={`pb-3 my-4 ${styles.border__bottom}`}>
                                            <div className={styles['searchbar__input-p']}>
                                                <h6>
                                                    {product.name}
                                                </h6>
                                            </div>

                                            <div>
                                                <div className='row mb-2'>
                                                    <div className='col-12 col-md-4 text-center'>
                                                        Price:
                                                        <b className='ms-2'>{product.price}</b>
                                                    </div>

                                                    <div className='col-12 col-md-4 text-center'>
                                                        Discount:
                                                        <b className='ms-2'>{product.discount}</b>
                                                    </div>

                                                    <div className='col-12 col-md-4 text-center'>
                                                        Stock:
                                                        <b className='ms-2'>{product.stock}</b>
                                                    </div>
                                                </div>
                                                <div className='d-flex justify-content-center mt-3'>
                                                    <div className='text-center'>
                                                        <label htmlFor="quantity" className='me-2'>Quantity: </label>
                                                        <input
                                                            type="number"
                                                            name={`orderDetails[${index}].quantity`}
                                                            value={productQuantities[product._id] || 1}
                                                            min={1}
                                                            onChange={(e) => handleQuantityChange(e, product._id)}
                                                        />
                                                    </div>

                                                    <div className='col-12 col-md-4 text-center'>
                                                        Cash:
                                                        <b className='ms-2'>{((product.price - (product.price * product.discount / 100)) * quantity)}</b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <h4> Please choose at least one product</h4>
                            )
                        }
                    </div>
                </div>

                <div className='text-center'>
                    Total:
                    <div className='border rounded p-1 p-lg-4'>
                        <b>{totalCash}</b>
                    </div>
                </div>

                <div className='my-3 d-flex justify-content-center'>
                    <button
                        type='submit'
                        onClick={async () => {
                            setLoading(true);
                            try {
                                validation.handleSubmit();
                                validation.setFieldValue("employeeId", employeeId.employeeId);
                                validation.setFieldValue("customerId", selectedCustomerId);
                                validation.setFieldValue("orderDetails", orderDetails);
                            } finally {
                                setLoading(false);
                            }
                        }}
                        className={`btn btn-lg border border-0 text-white px-5 ${styles.modal__btn}`}
                        disabled={loading}
                    >
                        {loading ? 'Creating...' : 'Create'}
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
                            Create status
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
                            Create status
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
        </form>
    );
};

export default OrderRegisterForm;