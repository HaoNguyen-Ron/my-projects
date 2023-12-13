import React from 'react'

import logo from 'assets/logo/logo.ico'
import { Link } from 'react-router-dom'

import styles from '../sidebar.module.css'


export default function SideNav() {
    return (
        <div className={`border shadow p-3 mb-3 bg-body-tertiary rounded d-flex flex-column justify-content-between ${styles.navbar__width}`}>
            <div className="d-flex flex-column pb-4 my-2">
                <div className='d-flex justify-content-center align-items-center mb-2'>
                    <a
                        href="/"
                    >
                        <img src={logo} alt="" />
                    </a>
                </div>

                <div className=' d-flex flex-column align-items-lg-start mb-sm-auto mb-md-0 mt-2 px-0 px-lg-2'>
                    <ul
                        className="nav nav-pills flex-column align-items-center align-items-lg-start"
                        id="menu"
                    >
                        <li className="nav-item">
                            <Link to="/" className="nav-link align-middle px-0">
                                <i style={{ minWidth: '20px' }} className="fa-solid fa-house" />{" "}

                                <span className="ms-1 d-none d-lg-inline">Home</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link align-middle px-0">
                                <i style={{ minWidth: '20px' }} className="fa-solid fa-chart-line" />{" "}

                                <span className="ms-1 d-none d-lg-inline">Dashboard</span>{" "}
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/order" className="nav-link px-0 align-middle">
                                <i style={{ minWidth: '20px' }} className="fa-solid fa-cart-shopping" />{" "}
                                <span className="ms-1 d-none d-lg-inline">Orders</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/product" className="nav-link align-middle px-0">
                                <i style={{ minWidth: '20px' }} className="fa-solid fa-bicycle" />{" "}

                                <span className="ms-1 d-none d-lg-inline">Products</span>{" "}
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/customer" className="nav-link px-0 align-middle">
                                <i style={{ minWidth: '20px' }} className="fa-solid fa-users" />{" "}
                                <span className="ms-1 d-none d-lg-inline">Customers</span>{" "}
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/employee" className="nav-link px-0 align-middle">
                                <i style={{ fontSize: '20px' }} className="fa-solid fa-user-tie" />{" "}
                                <span className="ms-1 d-none d-lg-inline">Employees</span>{" "}
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/category" className="nav-link px-0 align-middle">
                                <i style={{ fontSize: '20px' }} className="fa-solid fa-table-list" />{" "}
                                <span className="ms-1 d-none d-lg-inline">Categories</span>{" "}
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/supplier" className="nav-link px-0 align-middle">
                                <i style={{ fontSize: '20px' }} className="fa-solid fa-parachute-box" />{" "}
                                <span className="ms-1 d-none d-lg-inline">Suppliers</span>{" "}
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link px-0 align-middle">
                                <i style={{ fontSize: '20px' }} className="fa-solid fa-trash" />{" "}
                                <span className="ms-1 d-none d-lg-inline">Delete</span>{" "}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
