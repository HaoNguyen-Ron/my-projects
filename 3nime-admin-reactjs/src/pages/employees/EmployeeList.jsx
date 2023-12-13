import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import axiosClient from 'utils/axiosClient'

import styles from './employee.module.css'
import EmployeeEditForm from 'components/Form/EditFormEmployee';

export default function EmployeeList({ employeesList, index }) {

    const [selectedEmployee, setselectedEmployee] = useState({});

    const [deleteShow, setDeleteShow] = useState(false);
    const [show, setShow] = useState(false);

    const navigate = useNavigate()

    //----------------------------------------------- Handle Popup ---------------------------------------------------------------------//
    const handleClose = () => {
        setShow(false);
        setDeleteShow(false)
    }

    //----------------------------------------------- Handle Soft Delete ---------------------------------------------------------------//
    const handleEmployeeSoftDelete = useCallback(async (id) => {
        try {
            setDeleteShow(true)
            await axiosClient.delete(`/employees/${id}`)
            navigate(0)

        } catch (error) {
            console.log(error);
        }
    },
        [navigate],
    )

    //----------------------------------------------- Handle Edit Update ---------------------------------------------------------------//
    const getEmployeeDetail = useCallback(async (id) => {
        try {
            setShow(true);

            const res = await axiosClient.get(`/employees/${id}`)

            setselectedEmployee(res.data.payload)

        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <tr key={employeesList._id}>
            <th className={styles.tbl} scope="row">{index + 1}</th>
            {/*--------------------- Id reponsive -------------------*/}
            <td className={`d-none d-xl-table-cell ${styles.tbl}`}>{employeesList._id}</td>

            <td className={`d-table-cell d-xl-none ${styles.tbl}`}>
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    key='bottom'
                    placement='bottom'
                    overlay={
                        <Popover id={`popover-positioned-left`}>
                            <Popover.Header className={styles.title} as="h3">{`Customer Id`}</Popover.Header>
                            <Popover.Body>
                                {employeesList._id}
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <button
                        className={`btn ${styles.btn}`}
                    >
                        Id
                    </button>
                </OverlayTrigger>

            </td>

            {/* -------------------------------------------------------- */}

            <td className={styles.tbl}>{employeesList.fullName}</td>

            {/*--------------------- Email reponsive -------------------*/}
            <td className={`d-none d-xl-table-cell ${styles.tbl}`}>{employeesList.email}</td>

            <td className={`d-table-cell d-xl-none ${styles.tbl}`}>
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    key='bottom'
                    placement='bottom'
                    overlay={
                        <Popover id={`popover-positioned-left`}>
                            <Popover.Header className={styles.title} as="h3">{`Customer Email`}</Popover.Header>
                            <Popover.Body>
                                {employeesList.email}
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <button
                        className={`btn ${styles.btn}`}
                    >
                        Email
                    </button>
                </OverlayTrigger>

            </td>
            {/* -------------------------------------------------------- */}

            <td className={`${styles.tbl}`}>
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    key='bottom'
                    placement='bottom'
                    overlay={
                        <Popover id={`popover-positioned-left`}>
                            <Popover.Header className={styles.title} as="h3">{`Employee address`}</Popover.Header>
                            <Popover.Body>
                                <>
                                    <div className='d-flex'>
                                        <p className={`${styles.title} fs-5 my-auto me-3`} style={{ minWidth: '85px' }} >
                                            City:
                                        </p>
                                        <span className='my-auto'>
                                            {employeesList.city}
                                        </span>
                                    </div>

                                    <hr />

                                    <div className='d-flex'>
                                        <p className={`${styles.title} fs-5 my-auto me-3`} style={{ minWidth: '85px' }} >
                                            District:
                                        </p>
                                        <span className='my-auto'>
                                            {employeesList.district}
                                        </span>
                                    </div>

                                    <hr />

                                    <div className='d-flex'>
                                        <p className={`${styles.title} fs-5 my-auto me-3`} style={{ minWidth: '85px' }} >
                                            Ward:
                                        </p>
                                        <span className='my-auto'>
                                            {employeesList.ward}
                                        </span>
                                    </div>
                                </>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <button
                        className={`btn ${styles.btn}`}
                    >
                        <i className="fa-solid fa-location-dot text-white"></i>
                    </button>
                </OverlayTrigger>
            </td>
            
            {/*--------------------- Edit -------------------*/}
            <td className={styles.tbl}>
                <div className="dropdown d-table-cell">
                    <button
                        className="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="fa-solid fa-gear"></i>
                    </button>

                    <ul className="dropdown-menu">
                        <li>
                            <button
                                className='btn'
                                onClick={() => getEmployeeDetail(employeesList.id)}
                            >
                                <i className="fa-solid fa-pen-to-square" style={{ minWidth: '20px' }}></i>

                                <span className='ms-2 fw-bold'>Edit</span>
                            </button>

                            <Modal show={show} onHide={handleClose} size="lg">
                                <Modal.Header closeButton>
                                    <Modal.Title>Editing form</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>

                                    <EmployeeEditForm userData={selectedEmployee} />

                                </Modal.Body>

                            </Modal>
                        </li>

                        <li>
                            <button className='btn' onClick={handleEmployeeSoftDelete}>
                                <i className="fa-solid fa-eraser" style={{ minWidth: '20px' }}></i>
                                <span className='ms-2 fw-bold'>Delete</span>
                            </button>


                            <Modal show={deleteShow} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Deletion Confirmation</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>Are you sure to <span className={styles.title}>soft</span> delete this employee ? </Modal.Body>
                                <Modal.Footer>
                                    <button className='btn' onClick={handleClose}>
                                        Close
                                    </button>
                                    <button className={` btn ${styles.btn}`} onClick={() => handleEmployeeSoftDelete(employeesList.id)}>
                                        Delete
                                    </button>
                                </Modal.Footer>
                            </Modal>
                        </li>
                    </ul>
                </div>
            </td>
        </tr>
    )
};