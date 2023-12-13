import React, { useEffect, useState } from 'react'
import './userProfile.css'
import axiosClient from 'utils/axiosClient'

export default function UserProfile() {
    const [user, setUser] = useState({
        fullName: '',
        gender: '',
        email: '',
        phoneNumber: '',
        birthday: '',
        city: '',
        district: '',
        ward: '',
        street:''
    })

    const token = localStorage.getItem("TOKEN")

    const getUserDetail = async () => {
        try {
            const res = await axiosClient.get('/auth/profile')

            if (res.status === 200) {
                const data = res.data.payload;
                setUser({
                    fullName: data.fullName,
                    gender: data.gender,
                    email: data.email,
                    phoneNumber: data.phoneNumber,
                    birthday: data.birthday,
                    city: data.city,
                    district: data.district,
                    ward: data.ward,
                    street: data.street
                })
            }

        } catch (error) {
        }
    }

    useEffect(() => {
        if (token) {
            getUserDetail()
        }

        
    }, [token])


    return (
        <div>
            <section className="section about-section gray-bg" id="about">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse mb-3">
                        <div className="col-lg-6">
                            <div className="about-text go-to">
                                <h3 className="dark-color">User Detail</h3>
                                <h6 className="theme-color lead">
                                    Employee
                                </h6>
                                <p>
                                    {user.fullName}
                                </p>
                                <div className="row about-list">
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>Birthday</label>
                                            <p>{user.birthday}</p>
                                        </div>
                                        <div className="media">
                                            <label>Email</label>
                                            <p>{user.email}</p>
                                        </div>
                                        <div className="media">
                                            <label>Phone</label>
                                            <p>{user.phoneNumber}</p>
                                        </div>
                                        <div className="media">
                                            <label>Gender</label>
                                            <p>{user.gender}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>City</label>
                                            <p>{user.city}</p>
                                        </div>
                                        <div className="media">
                                            <label>District</label>
                                            <p>{user.district}</p>
                                        </div>
                                        <div className="media">
                                            <label>Ward</label>
                                            <p>{user.ward}</p>
                                        </div>
                                        <div className="media">
                                            <label>Address</label>
                                            <p>{user.street}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-avatar d-flex justify-content-center">
                                <img
                                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                    title=""
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="counter">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to={500} data-speed={500}>
                                        500
                                    </h6>
                                    <p className="m-0px font-w-600">Happy Clients</p>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to={150} data-speed={150}>
                                        150
                                    </h6>
                                    <p className="m-0px font-w-600">Project Completed</p>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to={850} data-speed={850}>
                                        850
                                    </h6>
                                    <p className="m-0px font-w-600">Photo Capture</p>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to={190} data-speed={190}>
                                        190
                                    </h6>
                                    <p className="m-0px font-w-600">Telephonic Talk</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
