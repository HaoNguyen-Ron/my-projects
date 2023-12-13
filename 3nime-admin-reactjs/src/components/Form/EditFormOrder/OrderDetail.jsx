import React, { useEffect, useState } from 'react';

import styles from '../form.module.css'

import { getProductAll } from 'utils/Api';
import { getCustomersId } from 'utils/Api/customer';
import { getEmployeesId } from 'utils/Api/employee';

const OrderDetail = ({ orderList, calculateTotalPrice }) => {
    const [productList, setProductList] = useState([]);
    const [customer, setCustomer]= useState({})
    const [employee, setEmployee] = useState({})

    const getSelectedProductsData = () => {
        if (!orderList || !orderList.orderDetails || !productList) {
            return [];
        }
        const selectedProductsData = productList.filter((product) =>
            orderList.orderDetails.some((orderDetail) => orderDetail.productId === product._id)
        );

        return selectedProductsData;
    };

    useEffect(() => {
        getProductAll().then(data => {
            setProductList(data || []);
        });

        getCustomersId(orderList.customerId).then(data => {
            if(data){
                setCustomer(data)
            }
            return null
        });

        getEmployeesId(orderList.employeeId).then(data => {
            if(data){
                setEmployee(data)
            }
            return null
        })
    }, [orderList.customerId]);

    return (
        <div className="d-flex flex-column mt-5" >
            <div className=' mb-5'>
                Create at:
                <div className='border rounded p-1 p-lg-4'>
                    <b>{customer.createdAt}</b>
                </div>
            </div>

            <div className=' mb-5'>
                Update at:
                <div className='border rounded p-1 p-lg-4'>
                    <b>{customer.updatedAt}</b>
                </div>
            </div>

            <div className=' mb-5'>
                Customer Id:
                <div className='border rounded p-1 p-lg-4'>
                    <b>{orderList.customerId} - {customer.fullName}</b>
                </div>
            </div>

            <div className=' mb-5'>
                Employee Id:
                <div className='border rounded p-1 p-lg-4'>
                    <b>{orderList.employeeId} - {employee.fullName}</b>
                </div>
            </div>

            <div className=' mb-5'>
                Payment method:
                <div className='border rounded p-1 p-lg-4'>
                    <b>{orderList.paymentType}</b>
                </div>
            </div>

            <div className=' mb-5'>
                Cart:
                <div className='border rounded p-1 p-lg-4' style={{ maxHeight: '350px', overflowY: 'auto' }}>
                    {getSelectedProductsData().map((product) => {

                        const orderDetail = orderList.orderDetails.find(
                            (orderDetail) => orderDetail.productId === product._id
                        );

                        if (orderDetail) {
                            return (
                                <div key={product._id} className={` my-3 ${styles.border__bottom}`}>
                                    <div className={` text-center ${styles['searchbar__input-p']}`}>
                                        <h6>{product.name}</h6>
                                    </div>

                                    <div className='d-flex justify-content-between px-1 px-lg-5 mt-5'>
                                        <div className='row'>
                                            <div className='col-6 col-3'>
                                                Price: <b>{product.price}</b>
                                            </div>

                                            <div className='col-6 col-3'>
                                                Discount: <b>{product.discount}</b>
                                            </div>

                                            <div className='col-6 col-3'>
                                                Quantity: <b>{orderDetail.quantity}</b>
                                            </div>

                                            <div className='col-6 col-3'>
                                                Total: <b>{orderDetail.total}</b>
                                            </div>
                                        </div>

                                        <div className='py-2'>
                                            <img
                                                src={product.description}
                                                alt=""
                                                className={`${styles["searchbar__input-img"]} me-3`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return null;
                    })}
                </div>
            </div>

            <div>
                Total:
                <div className='border rounded p-1 p-lg-4 text-center'>
                    <b className={styles.title}>{calculateTotalPrice()}</b>
                </div>
            </div>

            <div className='my-3 d-flex justify-content-center'>

            </div>
        </div>

    );
};

export default OrderDetail;