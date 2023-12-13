import React, { useCallback, useState } from "react";
import { Modal } from "react-bootstrap";
import CustomerEditForm from "../Form/EditFormCustomer";
import { axiosClient } from "@/libraries/axiosClient";
import styles from "@/styles/userPage.module.css"

export default function UserPassword({ user, isShow = true }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  };

  const getCustomerDetail = useCallback(async () => {
    try {
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className={isShow ? "d-block" : "d-none"}>
      <h2 className="mb-4 mt-3 text-center text-lg-start">Bảo mật tài khoản :</h2>
      <div className="userDetail_container ms-3">
        <div className="userDetail_item text-center text-lg-start">
          <button
            onClick={getCustomerDetail}
            className={`btn ${styles.user__btn}`}
          >
            Thay đổi thông tin người dùng
          </button>
        </div>

        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Editing form</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <CustomerEditForm userData={user} />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
