import React from 'react'
import logo from 'assets/logo/favicon-32x32.png'
import { Link } from 'react-router-dom'

export default function SideNavMobile() {
    return (
        <div>
            <>
                <button
                    className="btn"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                >
                    <img src={logo} alt="" />
                </button>
                <div
                    className={`offcanvas offcanvas-start w-50`}
                    tabIndex={-1}
                    id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel"
                >
                    <div className="offcanvas-header">
                        <div className='d-flex justify-content-center align-items-center mb-2'>
                            <a
                                href="/"
                            >
                                <img src={logo} alt="" />
                            </a>
                        </div>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        />
                    </div>
                    <div className="offcanvas-body">
                        <div className="dropdown mt-3">
                            <div className="pb-4 my-2">
                                <div className=' d-flex justify-content-start flex-column align-items-start mb-sm-auto mb-md-0 mt-2 px-0 px-lg-2'>
                                    <ul
                                        className="nav d-flex flex-column"
                                        id="menu"
                                    >
                                        <li className="nav-item border-bottom border-2 mb-3">
                                            <Link to="/" className="nav-link align-middle px-0">
                                                <i style={{ minWidth: '25px' }} className="fa-solid fa-house" />{" "}

                                                <span className="ms-1">Home</span>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to="/dashboard" className="nav-link align-middle px-0 mb-2">
                                                <i style={{ minWidth: '25px' }} className="fa-solid fa-chart-line" />{" "}

                                                <span className="ms-1 ">Dashboard</span>{" "}
                                            </Link>
                                        </li>

                                        <li className="nav-item mb-2">
                                            <Link to="/order" className="nav-link px-0 align-middle">
                                                <i style={{ minWidth: '25px' }} className="fa-solid fa-cart-shopping" />{" "}
                                                <span className="ms-1 ">Orders</span>
                                            </Link>
                                        </li>

                                        <li className="nav-item mb-2">
                                            <Link to="#" className="nav-link px-0 align-middle">
                                                <i style={{ minWidth: '25px' }} className="fa-solid fa-bicycle" />{" "}

                                                <span className="ms-1 ">Products</span>{" "}
                                            </Link>
                                        </li>

                                        <li className="nav-item mb-2">
                                            <Link to="/customer" className="nav-link px-0 align-middle">
                                                <i style={{ minWidth: '25px' }} className="fa-solid fa-users" />{" "}
                                                <span className="ms-1 ">Customers</span>{" "}
                                            </Link>
                                        </li>

                                        <li className="nav-item mb-2">
                                            <Link to="/employee" className="nav-link px-0 align-middle">
                                                <i style={{ fontSize: '20px', minWidth:'25px' }} className="fa-solid fa-user-tie" />{" "}
                                                <span className="ms-1">Employees</span>{" "}
                                            </Link>
                                        </li>

                                        <li className="nav-item mb-2">
                                            <Link to="/category" className="nav-link px-0 align-middle">
                                                <i style={{ fontSize: '20px', minWidth:'25px' }} className="fa-solid fa-table-list" />{" "}
                                                <span className="ms-1">Categories</span>{" "}
                                            </Link>
                                        </li>

                                        <li className="nav-item ">
                                            <Link to="/supplier" className="nav-link px-0 align-middle">
                                                <i style={{ fontSize: '20px', minWidth:'25px' }} className="fa-solid fa-parachute-box" />{" "}
                                                <span className="ms-1">Suppliers</span>{" "}
                                            </Link>
                                        </li>

                                        <li className="nav-item ">
                                            <Link to="/dashboard" className="nav-link px-0 align-middle">
                                                <i style={{ fontSize: '20px', minWidth:'25px' }} className="fa-solid fa-trash" />{" "}
                                                <span className="ms-1">Delete</span>{" "}
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </div>
    )
}
