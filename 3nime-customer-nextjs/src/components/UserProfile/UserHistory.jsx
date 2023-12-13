import React, { useCallback, useEffect, useState } from 'react'


import styles from '@/styles/userPage.module.css'

import { useRouter } from 'next/router';
import { axiosClient } from '@/libraries/axiosClient';
import { Box, Modal, Typography } from '@mui/material';


export default function UserHistory({ isShow = true, user }) {
    const [userOrder, setUserOrder] = useState([])

    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const router = useRouter()

    const handleClose = () => {
        setOpenError(false)
        setOpenSuccess(false)
        setOpenEdit(false)
    }

    const handleOpenEdit = () => {
        setOpenEdit(true)
    }

    const handleChangeStatus = async (id) => {

        try {
            const res = await axiosClient.patch(`/orders/status/${id}`, { status: 'CANCELED' });

            if (res.status === 200) {
                setOpenSuccess(true)
                setTimeout(() => {
                    router.reload()
                }, 2000);
            }

        } catch (error) {
            setOpenError(true)
            console.log('««««« error »»»»»', error);
        }
    }

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

    const checkStatusType = (type) => {
        switch (type) {
            case 'WAITING':
                return ({
                    class: 'text-primary',
                    button: (
                        <button className={`btn ${styles.user__btn} my-3`} onClick={handleOpenEdit}>
                            <span>Hủy đơn hàng (  •̀ - •́  )</span>
                        </button>

                    ),
                    statusToVn: "Đang xử lý đơn."
                });
            case 'COMPLETED':
                return ({
                    class: 'text-success',
                    button: (
                        <button className={`btn ${styles.user__btn} my-3`}>
                            <span>Cảm ơn~ ⸜(｡˃ ᵕ ˂ )⸝♡</span>
                        </button>

                    ),
                    statusToVn: "Đã hoàn thành."
                });
            case 'CANCELED':
                return ({
                    class: 'text-danger',
                    button: (
                        <button className={`btn ${styles.user__btn} my-3`}>
                            <span>Hẹn gặp lại lần sau! (╥﹏╥)</span>
                        </button>

                    ),
                    statusToVn: "Đơn đã bị hủy."
                });
            default:
                break;
        }
    }

    const getUserTotalOrder = useCallback(async () => {
        try {
            const res = await axiosClient.get(`/query/filterOrderByCustomerId?id=${user.id}`)

            setUserOrder(res.data.payload)
        } catch (error) {
            console.log('««««« apiError »»»»»', error);
        }
    }, [user.id]);

    useEffect(() => {
        if (user && router.isReady === true) {
            getUserTotalOrder()
        }
    }, [router.isReady, user, getUserTotalOrder]);

    return (
        <div className={isShow ? 'd-block' : 'd-none'}>
            <h2 className='mb-4 mt-3 text-center text-lg-start'>Lịch sử mua hàng :</h2>

            <div className='row '>
                {
                userOrder.length !== 0 ? (
                    userOrder && userOrder.map(order => {
                        return (
                            <div key={order._id} className='mb-3 col-12 col-sm-6'>
                                <div>
                                    <div className='userDetail_item mb-1'>
                                        <em className={`${styles.user__title} me-2`}>Mã đơn hàng: </em>
                                        <span>{order.id}</span>
                                    </div>

                                    <div className='userDetail_item mb-1' >
                                        <em className={`${styles.user__title} me-2`}>Ngày mua: </em>
                                        <span>{order.createdAt}</span>
                                    </div>

                                    <div className='userDetail_item mb-1'>
                                        <em className={`${styles.user__title} me-2`}>Loại thanh toán: </em>
                                        <span>{order.paymentType}</span>
                                    </div>

                                    <div className='userDetail_item mb-1'>
                                        <em className={`${styles.user__title} me-2`}>Tình trạng đơn hàng: </em>
                                        <span
                                            className={checkStatusType(order.status).class}
                                        >
                                            <b>{checkStatusType(order.status).statusToVn}</b>
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    {
                                        checkStatusType(order.status).button
                                    }
                                </div>

                                {/* --------------------------Modal Area--------------------- */}
                                <Modal
                                    open={openEdit}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <div className='d-flex flex-column'>
                                            <Typography className={styles.form__item} id="modal-modal-title" variant="h6" component="h2">
                                                Bạn có muốn hủy đơn hàng này??
                                            </Typography>
                                            <hr />
                                            <div className='text-center'>
                                                <button className={`btn ${styles.user__btn}`} onClick={() => handleChangeStatus(order._id)}>
                                                    Hủy đơn hàng ( • ᴖ • ｡)
                                                </button>
                                            </div>

                                            <div className='mt-3 text-center'>
                                                <button className={`btn ${styles.user__btn}`} onClick={handleClose}>Quay lại ৻(  •̀ ᗜ •́  ৻)</button>
                                            </div>
                                        </div>

                                    </Box>
                                </Modal>

                                <Modal
                                    open={openSuccess}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <div className='d-flex flex-column'>
                                            <Typography className={styles.user__item} id="modal-modal-title" variant="h6" component="h2">
                                                Tình trạng đơn hàng
                                            </Typography>
                                            <hr />
                                            <Typography id="modal-modal-description">
                                                Bạn đã hủy thành công! xin vui lòng đợi trong giây lát.
                                            </Typography>
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
                                                Tình trạng đơn hàng
                                            </Typography>
                                            <hr />
                                            <Typography id="modal-modal-description">
                                                Có lỗi xảy ra, xin vui lòng thử lại sau ít phút
                                            </Typography>

                                            <div className='mt-3'>
                                                <button className={`btn ${styles.user__btn}`} onClick={handleClose}>Quay lại</button>
                                            </div>
                                        </div>

                                    </Box>
                                </Modal>
                            </div>
                        )
                    })
                ) : (
                     <h4 className={styles.user__title}>Bạn chưa mua gì cả!! (˶ᵔ ᵕ ᵔ˶)</h4>
                )
                }
            </div>
        </div>
    )
}
