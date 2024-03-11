import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import styles from '@/styles/loginPart.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AuthLoginPartTablet() {
  const [openMenu, setOpenMenu] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    const storedData = localStorage.getItem("cart");

    const parsedData = storedData ? JSON.parse(storedData) : [];

    setData(parsedData);
  }, []);

  // const totalItemCount = data.reduce((total, item) => total + item.count, 0);

  const router = useRouter()

  const open = Boolean(openMenu);

  const handleClick = (event) => {
    setOpenMenu(event.currentTarget);
  };

  const handleClose = () => {
    setOpenMenu(null);
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear("TOKEN", "REFRESH-TOKEN")
      router.reload()
    }
  }

  return (
    <div className={`d-flex justify-content-end`}>
      <div>
        <Link href={'/cart'} className={`position-relative btn ${styles.loginPart__item}`}>
          <i className='fa-solid fa-cart-shopping my-auto me-2 ' style={{ fontSize: '20px' }}></i>
        </Link>
      </div>

      <div>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <i className="fa-regular fa-user fs-4 my-auto me-2"></i>
        </Button>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={openMenu}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link className={styles.loginPart__title} href='/user_profile'>Tài khoản của bạn</Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <button className={`btn ${styles.loginPart__btn}`} onClick={handleLogout}>Đăng xuất</button>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}