import React, { useEffect, useState } from 'react'

import Modal from 'react-bootstrap/Modal';


import EmployeeDisplay from './EmployeeDisplay';
import EmployeeRegisterForm from 'components/Form/RegisterFormEmployee';

import { getEmployeesAll } from 'utils/Api';

import styles from './employee.module.css'
import EmployeeSearch from 'components/Form/SearchId/employee';

export default function EmployeePage() {
    const [employeesList, setEmployeesList] = useState([]);
    const [queryResult, setQueryResult] = useState([])
    const [show, setShow] = useState(false);

    const handleAddCustomer = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false);
    }

    useEffect(() => {
        getEmployeesAll().then(data => {
            setEmployeesList(data)
            setQueryResult(data)
        })
    }, []);

    return (
        <div className='px-0 px-sm-4'>
            <div className='data_header d-flex justify-content-between align-items-center'>
                <h1> Employees </h1>

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
                        <EmployeeSearch employeesList={employeesList} setQueryResult={setQueryResult} />
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

                    <EmployeeDisplay queryResult={queryResult} />
                </table>
            </div>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Register new employee </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <EmployeeRegisterForm />

                </Modal.Body>

            </Modal>
        </div>
    )
}
