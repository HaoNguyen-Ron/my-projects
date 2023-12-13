import React from 'react'
import SideNav from './header/adminNav/sideNav'
import TopNav from './header/adminNav/topNav'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className="container py-3 px-0 px-sm-3 d-flex justify-content-center">
            <div className='d-none d-sm-block col-3 col-sm-2 col-lg-3 col-xl-2'>
                <SideNav />
            </div>

            <div className="col-12 col-sm-10 col-lg-9 col-xl-10 px-2 px-sm-3">
                <div className='d-flex flex-column'>
                    <div>
                        <TopNav />
                    </div>

                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
