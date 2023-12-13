import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import axiosClient from 'utils/axiosClient'

import Modal from 'react-bootstrap/Modal';

import styles from './category.module.css'
import { OverlayTrigger, Popover } from 'react-bootstrap';
import CategoryEditForm from 'components/Form/EditFormCategory';

export default function CategoryList({ categoryList, index }) {
    const [deleteShow, setDeleteShow] = useState(false);
    const [show, setShow] = useState(false);

    const navigate = useNavigate()

    //-------------------------------------- Handle Popup ----------------------------------------------------//
    const handleClose = () => {
        setShow(false);
        setDeleteShow(false)
    }

    //---------------------------------- Handle Soft Delete -----------------------------------------------//
    const handleCategorySoftDelete = useCallback(async (id) => {
        try {
            setDeleteShow(true)
            await axiosClient.delete(`/categories/${id}`)
            navigate(0)

        } catch (error) {
            console.log(error);
        }
    },
        [navigate],
    )

    //------------------------------------- Handle Edit Update -------------------------------------------------//
    const getCategoryOpen = useCallback(async () => {
        try {
            setShow(true);

        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <tr key={categoryList._id}>
            <th className={styles.tbl} scope="row">{index + 1}</th>

            <td className={`${styles.tbl}`}>{categoryList.name}</td>

            <td className={`${styles.tbl} text-center`}>
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    key='bottom'
                    placement='bottom'
                    overlay={
                        <Popover id={`popover-positioned-left`}>
                            <Popover.Header className={styles.title} as="h3">{`Category Description`}</Popover.Header>
                            <Popover.Body>
                                {categoryList.description}
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <button
                        className={`btn ${styles.btn}`}
                    >
                        <i className="fa-solid fa-clipboard text-white"></i>
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
                                            {categoryList.createdAt}
                                        </span>
                                    </div>

                                    <hr />

                                    <div className='d-flex'>
                                        <p className={`${styles.title} fs-5 my-auto me-3`} style={{ minWidth: '85px' }} >
                                            Update time:
                                        </p>
                                        <span className='my-auto'>
                                            {categoryList.updatedAt}
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
                </OverlayTrigger></td>

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
                                onClick={() => getCategoryOpen()}
                            >
                                <i className="fa-solid fa-circle-info" style={{ minWidth: '20px' }}></i>

                                <span className='ms-2 fw-bold'>Detail</span>
                            </button>

                            <Modal show={show} onHide={handleClose} size="lg">
                                <Modal.Header closeButton>
                                    <Modal.Title>Category detail & editing form</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>

                                    <h2>Id: {categoryList._id}</h2>

                                    <CategoryEditForm selectedCategory={categoryList} />

                                </Modal.Body>

                            </Modal>
                        </li>

                        {/* -----------------------------delete ---------------------------------------*/}
                        <li>
                            <button className='btn' onClick={handleCategorySoftDelete}>
                                <i className="fa-solid fa-eraser" style={{ minWidth: '20px' }}></i>
                                <span className='ms-2 fw-bold'>Delete</span>
                            </button>


                            <Modal show={deleteShow} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Deletion Confirmation</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>Are you sure to <span className={styles.title}>soft</span> delete this category? </Modal.Body>
                                <Modal.Footer>
                                    <button className='btn' onClick={handleClose}>
                                        Close
                                    </button>
                                    <button className={` btn ${styles.btn}`} onClick={() => handleCategorySoftDelete(categoryList.id)}>
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