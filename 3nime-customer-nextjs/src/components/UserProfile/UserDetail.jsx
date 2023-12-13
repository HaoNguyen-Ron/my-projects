import React, { useEffect } from 'react'
import styles from '@/styles/userPage.module.css'
import { axiosClient } from '@/libraries/axiosClient'

export default function UserDetail({ user, isShow = true }) {

    return (
        <div className={isShow ? 'd-block' : 'd-none'}>
            <h2 className='mb-4 mt-3 text-center text-lg-start'>Thông tin tài khoản:</h2>

            <div className="userDetail_container ms-3">
                <div className='userDetail_item mb-3 d-flex '>
                    <div style={{ minWidth: '100px' }}>
                        <em>Họ và tên: </em>
                    </div>

                    <div>
                        <b>{user.fullName}</b>
                    </div>
                </div>

                <div className='userDetail_item mb-3 d-flex'>
                    <div style={{ minWidth: '100px' }}>
                        <em>Email: </em>
                    </div>

                    <div>
                        <b>{user.email}</b>
                    </div>
                </div>

                <div className='userDetail_item mb-3 d-flex'>
                    <div style={{ minWidth: '100px' }}>
                        <em>Số điện thoại: </em>
                    </div>

                    <div>
                        <b>{user.phoneNumber}</b>
                    </div>
                </div>

                <div className='userDetail_item mb-3 d-flex'>
                    <div style={{ minWidth: '100px' }}>
                        <em>Địa chỉ: </em>
                    </div>

                    <div>
                        <b>{user.address}</b>
                    </div>
                </div>
            </div>
        </div>
    )
}
