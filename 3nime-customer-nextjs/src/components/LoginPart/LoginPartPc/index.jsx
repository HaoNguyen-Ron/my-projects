import Link from 'next/link'
import React from 'react'
import styles from '@/styles/loginPart.module.css'

export default function LoginPartPc() {
    return (
        <>
            <div className={styles.media_pc}>
                <div className='d-flex ms-2'>
                    <div className={`${styles.loginPart} me-3`}>
                        <Link href='/login'>
                            <h5 className={styles.loginPart__item}>Đăng nhập</h5>
                        </Link>
                    </div>

                    <div className={styles.loginPart}>
                        <div>
                            <Link href='/register'>
                                <h5 className={styles.loginPart__item}>Đăng Ký</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
