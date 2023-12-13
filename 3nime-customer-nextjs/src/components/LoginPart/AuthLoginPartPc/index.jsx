import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/loginPart.module.css'
import { useRouter } from 'next/router'

export default function AuthLoginPartPc() {
    const router = useRouter()
    const [data, setData] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem("cart");

        const parsedData = storedData ? JSON.parse(storedData) : [];
        
        
        setData(parsedData);
    }, []);

    const handleLogout = () => {
        if (typeof window !== "undefined") {
            localStorage.clear("TOKEN","REFRESH-TOKEN")
            router.reload()
        }
    }
    return (
        <>
            <div className={styles.media_pc}>
                <div className='d-flex'>
                    <div>
                        <Link href={'/cart'} className={`position-relative btn ${styles.loginPart__item}`}>
                            <i className='fa-solid fa-cart-shopping my-auto me-2 ' style={{ fontSize: '30px' }}></i>
                        </Link>
                    </div>

                    <div className='d-flex flex-column ms-1 my-auto'>
                        <div className={styles.loginPart}>
                            <Link href='/user_profile'>
                                <p className={styles.loginPart__item}>Tài khoản</p>
                            </Link>
                        </div>
                    </div>

                    <div className='my-auto ms-2'>
                        <button className={`btn ${styles.loginPart__btn}`} onClick={handleLogout}>Đăng xuất</button>
                    </div>
                </div>
            </div>
        </>
    )
}
