import React, { memo, useEffect, useMemo, useState } from 'react';
import { getCustomersList } from 'utils/Api/customer';

import styles from '../form.module.css'

import Modal from 'react-bootstrap/Modal';
import CustomerSearch from '../SearchId/customer';

function SelectCustomer({
    label,
    name,
    setSelectedCustomerId
}) {
    const [show, setShow] = useState(false);

    const [customerList, setCustomerList] = useState([]);
    const [queryResult, setQueryResult] = useState([]);

    const handleCustomerChange = (e) => {
        setSelectedCustomerId(e.target.value);
    };

    const handleOpenCustomerSelection = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false);
    }

    useEffect(() => {
        getCustomersList().then(data => {
            setCustomerList(data || [])
            setQueryResult(data || [])
        });
    }, [])

    return (
        <div className="mb-3">
            <div>
                <button className={`btn ${styles.modal__btn}`} onClick={handleOpenCustomerSelection} >Add customer</button>
            </div>

            <Modal show={show} onHide={handleClose} size="lg" style={{ backgroundColor: '#ddd' }} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Customer selection</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="mb-5" >
                        <div className='mb-4'>
                            <CustomerSearch setQueryResult={setQueryResult} customersList={customerList} />
                        </div>

                        <div className='border rounded mt-3' style={{ maxHeight: '300px', overflowY: 'auto' }}>
                            <select name="customerId" id="" onChange={handleCustomerChange} className='form-select'>
                                <option value='' defaultValue=''>Select a customer</option>
                                {
                                    queryResult.map(customer => (
                                        <option key={customer._id} value={customer._id}>
                                            {customer.fullName} - {customer._id}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <div className='text-center'>
                        <button className={`btn ${styles.modal__btn} fs-4`} onClick={handleClose}>Back</button>
                    </div>

                </Modal.Body>

            </Modal>
        </div>
    );
}

export default memo(SelectCustomer);