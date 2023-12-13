import React, { useEffect, useState } from 'react'

import Modal from 'react-bootstrap/Modal';

import { getOrderAll } from 'utils/Api';

import styles from './order.module.css'

import OrderDisplay from './OrderDisplay';
import OrderRegisterForm from 'components/Form/RegisterFormOrder';
import OrderSort from './OrderSort';
import OrderSearch from 'components/Form/SearchId/order';

export default function OrderPage() {
    const [orderList, setProductList] = useState([]);
    const [queryResult, setQueryResult] = useState([])

    const [show, setShow] = useState(false);

    const handleOpenAddOrder = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false);
    }

    useEffect(() => {
        getOrderAll().then(data => {
            setProductList(data)
            setQueryResult(data)
        })
    }, []);

    return (
        <div className='px-0 px-sm-4'>
            <div className='data_header d-flex justify-content-between align-items-center mb-3'>
                <h1> Orders </h1>

                <div className='  text-center'>
                    <OrderSort setQueryResult={setQueryResult} />
                </div>

                <div>
                    <button
                        className={`btn ${styles.btn}`}
                        onClick={handleOpenAddOrder}
                    >
                        Add
                        <i className="fa-solid fa-plus text-white ms-2"></i>
                    </button>
                </div>
            </div>

            <div>
                <OrderSearch orderList={orderList} setQueryResult={setQueryResult} />
            </div>
            <div className='data_body'>
                <div className='data_list'>
                </div>

                <table className=" table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Id</th>
                            <th scope="col" className='text-center'>Time</th>
                            <th scope="col" className='text-center'>Status</th>

                            <th scope="col" className='d-none d-xl-table-cell text-center'>Payment</th>
                            <th scope="col" className='text-center'>Total</th>
                            
                            <th className='ps-3' scope="col">Edit</th>

                        </tr>
                    </thead>

                    <OrderDisplay queryResult={queryResult} />
                </table>
            </div>

            {/* Add product */}
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add new product </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <OrderRegisterForm />

                </Modal.Body>

            </Modal>
        </div>
    )
}
