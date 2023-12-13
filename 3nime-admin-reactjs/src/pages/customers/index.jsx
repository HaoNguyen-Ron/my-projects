import React, { useEffect, useState } from 'react'

import { getCustomersList } from 'utils/Api/customer';

import CustomerDisplay from './CustomerDisplay';

import Modal from 'react-bootstrap/Modal';

import styles from './customer.module.css'
import CustomerRegisterForm from 'components/Form/RegisterFormCustomer';
import CustomerSearch from 'components/Form/SearchId/customer';

export default function CustomerPage() {
    const [customersList, setCustomersList] = useState([]);
    const [queryResult, setQueryResult] = useState([])
    const [show, setShow] = useState(false);

    const handleAddCustomer = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false);
    }

    useEffect(() => {
        getCustomersList().then(data => {
            setCustomersList(data)
            setQueryResult(data)
        })
    }, []);

    return (
        <div className='px-0 px-sm-4'>
            <div className='data_header d-flex justify-content-between align-items-center'>
                <h1> Customers </h1>

                <div>
                    <button
                        className={`btn ${styles.btn}`}
                        onClick={handleAddCustomer}
                    >
                        Add
                        <i className="fa-solid fa-plus text-white ms-2"></i>
                    </button>
                </div>
            </div>

            <div className='data_body'>
                <div className='data_list'>
                    <div className='flex-3'>
                        <CustomerSearch customersList={customersList} setQueryResult={setQueryResult} />
                    </div>
                </div>

                <table className=" table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">No.</th>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th className='d-none d-xl-table-cell' scope="col">Address</th>
                            <th className='d-table-cell d-xl-none' scope="col">Address</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>

                    <CustomerDisplay queryResult={queryResult} />
                </table>
            </div>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Register new customer</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <CustomerRegisterForm />

                </Modal.Body>

            </Modal>
        </div>
    )
}
