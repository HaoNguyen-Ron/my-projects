import React from 'react'
import styles from '../sidebar.module.css'
import SideNavMobile from '../sideNavMobile'
import { Link } from 'react-router-dom'

export default function TopNav() {
    const handleLogout = () => {
        if (typeof window !== "undefined") {
            localStorage.clear()
        }
    }
    return (
        <div className='border rounded shadow p-1 mb-4 bg-body-tertiary'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary mx-3">
                <div className="container-fluid">
                    <div className="navbar-brand" href="#">
                        <div className={`d-none d-sm-block ${styles.sidebar__title}`}>
                            3nime administration
                        </div>

                        <div className='d-block d-sm-none'>
                            <SideNavMobile />
                        </div>
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className='me-auto'>
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item d-flex">
                                    <Link to={'/'} className="nav-link active" aria-current="page">
                                        Messages
                                    </Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle"
                                        to={'/'}
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        tasks
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link className="dropdown-item" to={'/'}>
                                                Incoming
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to={'/'}>
                                                Pending
                                            </Link>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to={'/'}>
                                                Completed
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className="dropdown">
                                <button
                                    className="btn d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                                    id="dropdownUser1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="https://github.com/mdo.png"
                                        alt="hugenerd"
                                        width={30}
                                        height={30}
                                        className="rounded-circle"
                                    />
                                    <span className={`d-none d-lg-inline mx-1 ${styles.sidebar__title}`}>User</span>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                    <li>
                                        <Link className="dropdown-item" to="/register">
                                            New register
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={'/'}>
                                            Settings
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/user">
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={'/login'} onClick={handleLogout}>
                                            Sign out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}
