import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import ProductEditForm from 'components/Form/EditFormProduct';
import axiosClient from 'utils/axiosClient'

import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import styles from './product.module.css'

export default function ProductList({ productList, index }) {

    const [deleteShow, setDeleteShow] = useState(false);
    const [show, setShow] = useState(false);

    const navigate = useNavigate()

    //-------------------------------------- Handle Popup ----------------------------------------------------//
    const handleClose = () => {
        setShow(false);
        setDeleteShow(false)
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

    //------------------------------------- Handle Edit Update -------------------------------------------------//
    const getProductDetail = useCallback(async () => {
        try {
            setShow(true);

        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <tr key={productList._id}>
            <th className={styles.tbl} scope="row">{index + 1}</th>
            <td className={`${styles.tbl}`}>{productList.name}</td>
            <td className={`d-table-cell d-xl-none ${styles.tbl} text-center`}>{productList.stock}</td>

            <td className={`d-none d-xl-table-cell ${styles.tbl} text-center`}>{productList.price}</td>
            <td className={`d-none d-xl-table-cell ${styles.tbl} text-center`}>{productList.discount}</td>
            <td className={`d-none d-xl-table-cell ${styles.tbl} text-center`}>{productList.stock}</td>
            <td className={`d-none d-xl-table-cell ${styles.tbl} text-center`}>{productList.category.name}</td>
            <td className={`d-none d-xl-table-cell ${styles.tbl} text-center`}>{productList.supplier.name}</td>

            {/* --------------------drop dowm table cell reponsive show in tablet-----------------------------*/}
            <td className='d-table-cell d-xl-none text-center'>
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    key='bottom'
                    placement='bottom'
                    overlay={
                        <Popover id={`popover-positioned-left`}>
                            <Popover.Header className={styles.title} as="h3">{`Product Price and Discount`}</Popover.Header>
                            <Popover.Body>
                                <>
                                    <div className='d-flex'>
                                        <p className={`${styles.title} fs-5 my-auto me-3`} style={{ minWidth: '85px' }} >
                                            Price:
                                        </p>
                                        <span className='my-auto'>
                                            {productList.price}
                                        </span>
                                    </div>

                                    <hr />

                                    <div className='d-flex'>
                                        <p className={`${styles.title} fs-5 my-auto me-3`} style={{ minWidth: '85px' }} >
                                            Discount:
                                        </p>
                                        <span className='my-auto'>
                                            {productList.discount}
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

            {/* --------------------drop dowm table cell reponsive-----------------------------*/}
            <td className='d-table-cell d-xl-none text-center'>
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    key='bottom'
                    placement='bottom'
                    overlay={
                        <Popover id={`popover-positioned-left`}>
                            <Popover.Header className={styles.title} as="h3">{`Product Category and Supplier`}</Popover.Header>
                            <Popover.Body>
                            <>
                                    <div className='d-flex'>
                                        <p className={`${styles.title} fs-5 my-auto me-3`} style={{ minWidth: '85px' }} >
                                            Category:
                                        </p>
                                        <span className='my-auto'>
                                            {productList.category.name}
                                        </span>
                                    </div>

                                    <hr />

                                    <div className='d-flex'>
                                        <p className={`${styles.title} fs-5 my-auto me-3`} style={{ minWidth: '85px' }} >
                                            Supplier:
                                        </p>
                                        <span className='my-auto'>
                                            {productList.supplier.name}
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
                        <i className="fa-solid fa-truck-field text-white"></i>
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
                        {/* -------------------------------------edit ---------------------------------*/}
                        <li>
                            <button
                                className='btn'
                                onClick={() => getProductDetail()}
                            >
                                <i className="fa-solid fa-circle-info" style={{ minWidth: '20px' }}></i>

                                <span className='ms-2 fw-bold'>Detail</span>
                            </button>

                            <Modal show={show} onHide={handleClose} size="lg">
                                <Modal.Header closeButton>
                                    <Modal.Title>Product detail & editing form</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>

                                    <h2>Id: {productList._id}</h2>

                                    <ProductEditForm selectedProduct={productList} />

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

                                <Modal.Body>Are you sure to <span className={styles.title}>soft</span> delete this product? </Modal.Body>
                                <Modal.Footer>
                                    <button className='btn' onClick={handleClose}>
                                        Close
                                    </button>
                                    <button className={` btn ${styles.btn}`} onClick={() => handleProductSoftDelete(productList.id)}>
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