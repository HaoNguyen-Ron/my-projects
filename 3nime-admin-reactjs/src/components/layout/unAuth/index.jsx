import React from 'react'
import Header from './header'
import { Outlet } from 'react-router-dom'

export default function UnAuthLayout() {
    return (
        <div>
            <Header />
            <div className="container my-4">
                <Outlet />
            </div>
        </div>
    )
}

