import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import axiosClient from 'utils/axiosClient'

import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import styles from './order.module.css'
import OrderDetail from 'components/Form/EditFormOrder/OrderDetail';
import OrderEdit from 'components/Form/EditFormOrder/OrderEdit';

export default function OrderList({ orderList, index }) {
    const [deleteShow, setDeleteShow] = useState(false);
    const [detailshow, setDetailShow] = useState(false);
    const[editShow, setEditShow] = useState(false)

    const navigate = useNavigate()

    //-------------------------------------- Handle Popup ----------------------------------------------------//
    const handleClose = () => {
        setDetailShow(false);
        setDeleteShow(false)
        setEditShow(false)
    }

    //---------------------------------- Handle Soft Delete -----------------------------------------------//
    const handleProductSoftDelete = useCallback(async (id) => {
        try {
            setDeleteShow(true)
            await axiosClient.delete(`/products/${id}`)
            navigate(0)

        } catch (error) {
            console.log(error);
        }
    },
        [navigate],
    )


    const checkStatusType = (type) => {
        switch (type) {
            case 'WAITING':
                return 'text-primary'
            case 'COMPLETED':
                return 'text-success'
                    ;
            case 'CANCELED':
                return 'text-danger'
            default:
                break;
        }
    }

    const calculateTotalPrice = useCallback(() => {
        const totalPrice = orderList.orderDetails.reduce(
            (accumulator, orderDetail) => accumulator + ((orderDetail.price - (orderDetail.price * orderDetail.discount / 100) )* orderDetail.quantity),
            0
        );
        return totalPrice;
    }, [orderList.orderDetails]);
    

    return (
        <tr key={orderList._id}>
            <th className={styles.tbl} scope="row">{index + 1}</th>

            <td className={`${styles.tbl} d-none d-xl-table-cell`}>{orderList._id}</td>
            <td className={`d-table-cell d-xl-none ${styles.tbl}`}>
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    key='bottom'
                    placement='bottom'
                    overlay={
                        <Popover id={`popover-positioned-left`}>
                            <Popover.Header className={styles.title} as="h3">{`Order Id`}</Popover.Header>
                            <Popover.Body>
                                {orderList._id}
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

            <td className={`${styles.tbl} text-center`}>
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    key='bottom'
                    placement='bottom'
                    overlay={
                        <Popover id={`popover-positioned-left`}>
                            <Popover.Header className={styles.title} as="h3">{`Supplier Contact Information`}</Popover.Header>
                            <Popover.Body>
                                <div className='d-flex'>
                                    <p className={`${styles.title} fs-5 my-auto me-3`} style={{ minWidth: '85px' }} >
                                        Created time:
                                    </p>
                                    <span className='my-auto'>
                                        {orderList.createdAt}
                                    </span>
                                </div>

                                <hr />

                                <div className='d-flex'>
                                    <p className={`${styles.title} fs-5 my-auto me-3`} style={{ minWidth: '85px' }} >
                                        Update time:
                                    </p>
                                    <span className='my-auto'>
                                        {orderList.updatedAt}
                                    </span>
                                </div>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <button
                        className={`btn ${styles.btn}`}
                    >
                        <i className="fa-solid fa-clock text-white"></i>
                    </button>
                </OverlayTrigger>
            </td>

            <th className={`${styles.tbl} text-center ${checkStatusType(orderList.status)}`}>{orderList.status}</th>

            <td className={`${styles.tbl} text-center d-none d-xl-table-cell`}>{orderList.paymentType}</td>

            <td className={`${styles.tbl} text-center d-none d-xl-table-cell`}>{calculateTotalPrice()}</td>
            
            <td className='d-table-cell d-xl-none text-center'>
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    key='bottom'
                    placement='bottom'
                    overlay={
                        <Popover id={`popover-positioned-left`}>
                            <Popover.Header className={styles.title} as="h3">{`Order's total and payment type`}</Popover.Header>
                            <Popover.Body>
                                <>
                                    <div className='d-flex'>
                                        <p className={`${styles.title} fs-5 my-auto me-3`} style={{ minWidth: '85px' }} >
                                            Price:
                                        </p>
                                        <span className='my-auto'>
                                            {calculateTotalPrice()}
                                        </span>
                                    </div>

                                    <hr />

                                    <div className='d-flex'>
                                        <p className={`${styles.title} fs-5 my-auto me-3`} style={{ minWidth: '85px' }} >
                                            Payment:
                                        </p>
                                        <span className='my-auto'>
                                            {orderList.paymentType}
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
                        <i className="fa-solid fa-dollar-sign text-white"></i>
                    </button>
                </OverlayTrigger>

            </td>

            {/* --------------------------------setting button---------------------------------------*/}
            <td className={`${styles.tbl}`}>
                <div className="dropdown d-table-cell ms-auto">
                    <button
                        className="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="fa-solid fa-gear"></i>
                    </button>

                    <ul className="dropdown-menu">
                        {/* -------------------------------------detail---------------------------------*/}
                        <li>
                            <button
                                className='btn'
                                onClick={() => setDetailShow(true)}
                            >
                                <i className="fa-solid fa-circle-info" style={{ minWidth: '20px' }}></i>

                                <span className='ms-2 fw-bold'>Detail</span>
                            </button>

                            <Modal show={detailshow} onHide={handleClose} size="lg">
                                <Modal.Header closeButton>
                                    <Modal.Title>Order detail</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>

                                    <h2 className={styles.title}> Order Id: {orderList._id}</h2>
                                    
                                    <OrderDetail  calculateTotalPrice={calculateTotalPrice} orderList={orderList} />

                                </Modal.Body>

                            </Modal>
                        </li>

                        {/* -------------------------------------edit---------------------------------*/}
                        <li>
                            <button
                                className='btn'
                                onClick={() => setEditShow(true)}
                            >
                                <i className="fa-solid fa-pen-to-square " style={{ minWidth: '20px' }}></i>

                                <span className='ms-2 fw-bold'>Update</span>
                            </button>

                            <Modal show={editShow} onHide={handleClose} size="lg">
                                <Modal.Header closeButton>
                                    <Modal.Title>Order edit</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    
                                    <OrderEdit  orderList={orderList} />

                                </Modal.Body>

                            </Modal>
                        </li>

                        {/* -----------------------------delete ---------------------------------------*/}
                        <li>
                            <button className='btn' onClick={handleProductSoftDelete}>
                                <i className="fa-solid fa-eraser" style={{ minWidth: '20px' }}></i>
                                <span className='ms-2 fw-bold'>Delete</span>
                            </button>


                            <Modal show={deleteShow} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Deletion Confirmation</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>Are you sure to <span className={styles.title}>soft</span> delete this order? </Modal.Body>
                                <Modal.Footer>
                                    <button className='btn' onClick={handleClose}>
                                        Close
                                    </button>
                                    <button className={` btn ${styles.btn}`} onClick={() => handleProductSoftDelete(orderList.id)}>
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