import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import styles from '@/styles/loginPart.module.css'
import Link from 'next/link';

export default function LoginPartTablet() {
  const [openMenu, setOpenMenu] = React.useState(null);
  const open = Boolean(openMenu);
  const handleClick = (event) => {
    setOpenMenu(event.currentTarget);
  };
  const handleClose = () => {
    setOpenMenu(null);
  };

  return (
    <div className={`d-flex justify-content-end`}>
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
          <Link className={styles.loginPart__title} href={'/register'}>Đăng kí</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className={styles.loginPart__title} href={'/login'}>Đăng nhập</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}