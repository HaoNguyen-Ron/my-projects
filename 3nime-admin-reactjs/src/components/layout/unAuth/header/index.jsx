import React from 'react'

import styles from '../layout.module.css'

import logo from 'assets/logo/android-chrome-192x192.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='text-center'>
            <header>
                <Link to={'/'}>
                    <img src={logo} alt="" />
                </Link>
            </header>
            <h1 className={styles.layout__title}>Administration page</h1>
        </div>
    )
}