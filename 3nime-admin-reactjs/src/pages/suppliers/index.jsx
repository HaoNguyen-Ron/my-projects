import React, { useEffect, useState } from 'react'

import Modal from 'react-bootstrap/Modal';

import { getSupplierAll } from 'utils/Api';

import SupplierDisplay from './SupplierDisplay';
import SupplierRegisterForm from 'components/Form/RegisterFormSupplier';
import SupplierSort from './SupplierSort';
import SupplierSearch from 'components/Form/SearchId/supplier';

import styles from './supplier.module.css'

export default function SupplierPage() {
    const [supplierList, setSupplierList] = useState([]);
    const [queryResult, setQueryResult] = useState([])

    const [show, setShow] = useState(false);

    const handleAddSupplier = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false);
    }

    useEffect(() => {
        getSupplierAll().then(data => {
            setSupplierList(data)
            setQueryResult(data)
        })
    }, []);

    return (
        <div className='px-0 px-sm-4'>
            <div className='data_header d-flex justify-content-between align-items-center mb-3'>
                <h1> Suppliers </h1>

                <div className='col-6 col-lg-6  text-center'>
                    <SupplierSort setQueryResult={setQueryResult} />
                </div>


                <div>
                    <button
                        className={`btn ${styles.btn}`}
                        onClick={handleAddSupplier}
                    >
                        Add
                        <i className="fa-solid fa-plus text-white ms-2"></i>
                    </button>
                </div>
                
            </div>

            <div>
                <SupplierSearch supplierList={supplierList} setQueryResult={setQueryResult} />
            </div>

            <div className='data_body'>
                <div className='data_list'>
                </div>

                <table className=" table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Name</th>
                            <th scope="col" className='text-center'>Description</th>
                            <th scope="col" className='text-center'>Time</th>
                   
                            <th className='ps-3' scope="col">Edit</th>

                        </tr>
                    </thead>

                    <SupplierDisplay queryResult={queryResult} />
                </table>
            </div>

            {/* Add supplier */}
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add new supplier </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <SupplierRegisterForm/>

                </Modal.Body>

            </Modal>
        </div>
    )
}
