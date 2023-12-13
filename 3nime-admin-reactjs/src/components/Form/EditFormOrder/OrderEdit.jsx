import React, { useEffect, useState } from 'react'

import { Box, Modal, Typography } from '@mui/material';

import styles from '../form.module.css'
import axiosClient from 'utils/axiosClient';
import { useNavigate } from 'react-router-dom';
import { getEmployeesAll } from 'utils/Api';
import EmployeeSearch from '../SearchId/employee';


export default function OrderEdit({ orderList }) {
    const [openSuccess, setOpenSuccess] = useState(false);

    const [openError, setOpenError] = useState(false);

    const [employeeList, setEmployeeList] = useState([])

    const [selectedStatus, setSelectedStatus] = useState(orderList.status);

    const [selectedEmployee, setSelectedEmployee] = useState(orderList.employeeId);

    const [queryResult, setQueryResult] = useState([])

    const navigate = useNavigate()

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid var(--main-color)',
        boxShadow: 24,
        p: 4,
        borderRadius: '16px'
    };

    const handleClose = () => {
        setOpenError(false)
        setOpenSuccess(false)
    }


    const handleStatusChange = async (e, newStatus) => {
        try {
            e.preventDefault()

            await axiosClient.patch(`/orders/status/${orderList._id}`, { status: newStatus })

            setOpenSuccess(true)

            setTimeout(() => {
                navigate(0)
            }, 1000);
            
        } catch (error) {
            console.log('««««« error »»»»»', error);
            setOpenError(true)
        }
    };

    const handleEmployeeChange = async (e, id) => {
        try {
            e.preventDefault()

            await axiosClient.patch(`/orders/employee/${orderList._id}`, { employeeId: id })

            setOpenSuccess(true);

            setTimeout(() => {
                navigate(0)
            }, 1000);

        } catch (error) {
            console.log('««««« error »»»»»', error);
            setOpenError(true)
        }
    }

    useEffect(() => {
        getEmployeesAll().then(data => {
            setEmployeeList(data || []);
            setQueryResult(data || [])
        })
    }, [])

    return (
        <div>
            <div className=' mb-5'>
                Update order status:
                <div className='border rounded p-1 p-lg-4'>
                    <select
                        name="paymentType"
                        className='form-select'
                        onChange={(e) => setSelectedStatus(e.target.value)}
                    >

                        <option defaultValue>{orderList.status}</option>
                        <option value={'COMPLETED'}>Completed</option>
                        <option value={"REJECTED"}>Rejected</option>
                        <option value={"CANCELED"}>Cancelled</option>
                    </select>
                </div>
                <div className=' mt-4 text-center'>
                    <button type='submit' className={`btn ${styles.btn}`} onClick={(e) => handleStatusChange(e, selectedStatus)}>Save change status</button>
                </div>

            </div>

            {/* ---------------------------------------------------Update EmplyeeId---------------------------------------------------------- */}

            <div className=' mb-5'>
                Update employee

                <EmployeeSearch employeesList={employeeList} setQueryResult={setQueryResult} />

                <div className='border rounded p-1 p-lg-4'>
                    <select
                        name="selectNewEmployee"
                        className='form-select'
                        onChange={(e) => setSelectedEmployee(e.target.value)}
                    >
                        <option defaultValue>Default employee: {selectedEmployee}</option>

                        {
                            queryResult.map(employee => {
                                return (
                                    <option key={employee._id} value={employee._id}>{employee.fullName}</option>
                                )
                            })
                        }
                    </select>

                    <div className=' mt-4 text-center'>
                        <button type='submit' className={`btn ${styles.btn}`} onClick={(e) => handleEmployeeChange(e, selectedEmployee)}>Save change employee</button>
                    </div>
                </div>

            </div>

            {/* -----------------------------Modal area ---------------------------------*/}
            <Modal
                open={openSuccess}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='d-flex flex-column'>
                        <Typography className={styles.form__item} id="modal-modal-title" variant="h6" component="h2">
                            Register status
                        </Typography>
                        <hr />
                        <Typography id="modal-modal-description">
                            Successfully !
                        </Typography>

                        <div className='mt-3 d-flex justify-content-center'>
                            <button className={`btn ${styles.modal__btn} fs-5 `} onClick={handleClose}>Back</button>
                        </div>
                    </div>

                </Box>
            </Modal>

            <Modal
                open={openError}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='d-flex flex-column'>
                        <Typography className={styles.form__item} id="modal-modal-title" variant="h6" component="h2">
                            Register status
                        </Typography>
                        <hr />
                        <Typography id="modal-modal-description">
                            Editing failed !
                        </Typography>

                        <div className='mt-3 d-flex justify-content-center'>
                            <button className={`btn ${styles.modal__btn} fs-5 `} onClick={handleClose}>Back</button>
                        </div>
                    </div>

                </Box>
            </Modal>
        </div >
    )
}
