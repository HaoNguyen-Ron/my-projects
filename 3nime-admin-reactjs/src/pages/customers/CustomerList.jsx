import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import EditForm from 'components/Form/EditFormCustomer';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import axiosClient from 'utils/axiosClient'

import styles from './customer.module.css'

export default function CustomerList({ searchCustomers, index }) {
    const [selectedCustomer, setselectedCustomer] = useState({});

    const [deleteShow, setDeleteShow] = useState(false);
    const [show, setShow] = useState(false);

    const navigate = useNavigate()

    //----------------------------------------------- Handle Popup ---------------------------------------------------------------------//
    const handleClose = () => {
        setShow(false);
        setDeleteShow(false)
    }

    //----------------------------------------------- Handle Soft Delete ---------------------------------------------------------------//
    const handleCustomerSoftDelete = useCallback(async (id) => {
        try {
            setDeleteShow(true)
            await axiosClient.delete(`/customers/${id}`)
            navigate(0)

        } catch (error) {
            console.log(error);
        }
    },
        [navigate],
    )

    //----------------------------------------------- Handle Edit Update ---------------------------------------------------------------//
    const getCustomerDetail = useCallback(async (id) => {
        try {
            setShow(true);

            const res = await axiosClient.get(`/customers/${id}`)

            setselectedCustomer(res.data.payload)

        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <tr key={searchCustomers._id}>
        <th className={styles.tbl} scope="row">{index + 1}</th>
        {/*--------------------- Id reponsive -------------------*/}
        <td className={`d-none d-xl-table-cell ${styles.tbl}`}>{searchCustomers._id}</td>

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
                            {searchCustomers._id}
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

        <td className={styles.tbl}>{searchCustomers.fullName}</td>

        {/*--------------------- Email reponsive -------------------*/}
        <td className={`d-none d-xl-table-cell ${styles.tbl}`}>{searchCustomers.email}</td>

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
                            {searchCustomers.email}
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
                                        {searchCustomers.city}
                                    </span>
                                </div>

                                <hr />

                                <div className='d-flex'>
                                    <p className={`${styles.title} fs-5 my-auto me-3`} style={{ minWidth: '85px' }} >
                                        District:
                                    </p>
                                    <span className='my-auto'>
                                        {searchCustomers.district}
                                    </span>
                                </div>

                                <hr />

                                <div className='d-flex'>
                                    <p className={`${styles.title} fs-5 my-auto me-3`} style={{ minWidth: '85px' }} >
                                        Ward:
                                    </p>
                                    <span className='my-auto'>
                                        {searchCustomers.ward}
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
                                onClick={() => getCustomerDetail(searchCustomers.id)}
                            >
                                <i className="fa-solid fa-pen-to-square" style={{ minWidth: '20px' }}></i>

                                <span className='ms-2 fw-bold'>Edit</span>
                            </button>

                            <Modal show={show} onHide={handleClose} size="lg">
                                <Modal.Header closeButton>
                                    <Modal.Title>Editing form</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>

                                    <EditForm userData={selectedCustomer} />

                                </Modal.Body>

                            </Modal>
                        </li>

                        <li>
                            <button className='btn' onClick={handleCustomerSoftDelete}>
                                <i className="fa-solid fa-eraser" style={{ minWidth: '20px' }}></i>
                                <span className='ms-2 fw-bold'>Delete</span>
                            </button>


                            <Modal show={deleteShow} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Deletion Confirmation</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>Are you sure to <span className={styles.title}>soft</span> delete this customer ? </Modal.Body>
                                <Modal.Footer>
                                    <button className='btn' onClick={handleClose}>
                                        Close
                                    </button>
                                    <button className={` btn ${styles.btn}`} onClick={() => handleCustomerSoftDelete(searchCustomers.id)}>
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