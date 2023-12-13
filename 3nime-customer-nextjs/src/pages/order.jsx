import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useFormik } from "formik";

import CustomerEditForm from "@/components/Form/EditFormCustomer";
import OrderProductList from "@/components/orderProductList";
import verifyLoggin from "@/components/HOC/verifyLoggin";

import * as yup from "yup";
import { Box, Modal, Typography } from "@mui/material";
import { axiosClient } from "@/libraries/axiosClient";
import { useRouter } from "next/router";

import Style from "@/styles/Order.module.css";
import styles from "@/styles/userPage.module.css";


function Order() {
  const [listProduct, setListProduct] = useState([]);
  const [userData, setUserData] = useState([]);

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openError, setOpenError] = useState(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid var(--main-color)',
    boxShadow: 24,
    p: 4,
    borderRadius: '16px'
  };

  const handleClose = () => {
    setOpenError(false)
    setOpenSuccess(false)
    setOpenEdit(false)

  }

  const router = useRouter();

  const currentDate = new Date(Date.now());

  const year = currentDate.getFullYear().toString();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");

  const formattedDate = year + "-" + month + "-" + day;

  const orderDetails = listProduct.map(product => ({
    productId: product._id,
    quantity: product.quantity,
    price: product.price,
    discount: product.discount,
  }));

  const validation = useFormik({
    initialValues: {
      customerId: "",
      employeeId: "",
      paymentType: "",
      status: "WAITING",
      createdDate: formattedDate,
      orderDetails: [],
      isDeleted: false,
    },

    validationSchema: yup.object({
      customerId: yup.string(),
      paymentType: yup
        .string()
        .required("Vui lòng chọn phương thức thanh toán")
        .oneOf(["CASH", "CREDIT_CARD"], "Phương thức thanh toán không hợp lệ"),
    }),

    onSubmit: async (values) => {
      console.log('««««« values »»»»»', values);
      try {
        const res = await axiosClient.post("/orders/", values);

        if (res.status === 200) {
          localStorage.removeItem("cart");

          setOpenSuccess(true)

          setTimeout(() => {
            router.push('/')
          }, 2000);
        }

      } catch (error) {
        setOpenError(true)
        console.error("Submission error:", error);
      }
    },
  });

  const isValid = useMemo(() => {
    if (validation.errors.paymentType && validation.touched.paymentType) {
      return false;
    }

    return true;
  }, [validation.errors, validation.touched]);

  const getUserDetail = async () => {
    try {
      return await axiosClient.get("/auth/profile");

    } catch (error) {
      console.log("««««« error »»»»»", error);
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem("TOKEN");
    if (token && router.isReady === true) {
      axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
      getUserDetail().then(res => {
        setUserData(res.data.payload)
      });
    }

    const storedData = localStorage.getItem("cart");

    const parsedData = storedData ? JSON.parse(storedData) : [];

    setListProduct(parsedData);
  }, []);

  return (
    <div className="container p-5">
      <div className={`d-flex row ${Style.order_container}`}>
        <div className="col-12 col-md-12 col-lg-6">
          <Link className={`${Style.title_home}`} href="/">
            <h1>3nime Figure</h1>
          </Link>
          
          <div className={`${Style.row_cart}`}>
            <a className={`${Style.span_cart_a}`} href="./cart">
              <span>Giỏ hàng </span>
            </a>
            <span className={`${Style.span_cart}`}> &gt; </span>

            <span className={`${Style.span_cart}`}>Thông tin giao hàng</span>
          </div>

          <p className={`${Style.row_cart} ${Style.span_cart}`}>
            <b>Thông tin giao hàng</b>
          </p>

          <div className={`${Style.row_cart}`}>
            <span className={`${Style.span_cart_chil}`}>
              Tên khách hàng: {userData.fullName}
            </span>
          </div>

          <div className={`${Style.row_cart}`}>
            <span className={`${Style.span_cart_chil}`}>
              Số điện thoại khách hàng: {userData.phoneNumber}
            </span>
          </div>

          <div className={`${Style.row_cart}`}>
            <span className={`${Style.span_cart_chil}`}>
              Địa chỉ: {userData.address}
            </span>
          </div>

          <div className="userDetail_container ms-3 d-flex flex-column g-2">
            <div className="userDetail_item text-center">
              <button
                onClick={() => setOpenEdit(true)}
                className={`btn ${styles.user__btn}`}
              >
                Thay đổi thông tin giao hàng
              </button>
            </div>

            <Modal
              open={openEdit}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className='d-flex flex-column'>
                  <Typography className={`${styles.form__item} d-flex justify-content-between align-items-center`} id="modal-modal-title" variant="h6" component="h2">
                    Biểu mẫu thay đổi thông tin người dùng

                    <span>
                      <button className={`btn ${styles.modal__btn}`} onClick={handleClose}>
                        <i className="fa-solid fa-x"></i>
                      </button>
                    </span>
                  </Typography>

                  <hr />

                  <CustomerEditForm userData={userData} />
                </div>

              </Box>
            </Modal>
          </div>

          {/*------------------------------------------------------------- Payment ---------------------------------------------------*/}
          <div className="mb-4">
            <p className={`${Style.row_cart} ${Style.span_cart}`}>
              <b>Phương thức thanh toán</b>
            </p>

            <div>
              <select
                name="paymentType"
                onChange={validation.handleChange}
                className={` ${isValid ? "" : "is-invalid"} form-select w-50`}
                value={validation.values.paymentType}
              >
                <option defaultValue></option>
                <option value="CASH">Bằng tiền mặt tại cửa hàng</option>
                <option value="CREDIT_CARD">Bằng thẻ tín dụng</option>
              </select>

              {!isValid && (
                <div style={{ color: "#ee2d7a" }}>
                  {validation.errors.paymentType}
                </div>
              )}
            </div>
          </div>

          <div className="d-flex justify-content-around align-items-center my-5">
            <button className={` btn`} >
              <Link href={'/cart'} className={styles.user__title}>Quay về giỏ hàng</Link>
            </button>

            <button
              className={`${styles.user__btn} btn`}
              type="submit"
              onClick={() => {
                validation.handleSubmit();
                validation.setFieldValue("customerId", userData._id);
                validation.setFieldValue("employeeId", "656ca0f0aeb0edbf0fd7dfc6");
                validation.setFieldValue("orderDetails", orderDetails);
              }}
            >
              Hoàn tất đơn hàng
            </button>
          </div>
        </div>

        <div className={`col-12 col-md-12 col-lg-6 ${styles.user__border}`}>
          <OrderProductList  uctList listProduct={listProduct} />
        </div>
      </div>


      {/*------------------------------------------------------------- Modal Area ---------------------------------------------------*/}
      <Modal
        open={openSuccess}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='d-flex flex-column'>
            <Typography className={styles.form__item} id="modal-modal-title" variant="h6" component="h2">
              Tình trạng đăng ký
            </Typography>

            <hr />

            <Typography id="modal-modal-description">
              Bạn đã giao dịch thành công !
            </Typography>

            <div className='mt-3'>
              <button className={`btn ${styles.modal__btn}`} onClick={handleClose}>Quay lại</button>
            </div>
          </div>

        </Box>
      </Modal>

      <Modal
        open={openError}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='d-flex flex-column'>
            <Typography className={styles.form__item} id="modal-modal-title" variant="h6" component="h2">
              Tình trạng đăng ký
            </Typography>
            <hr />
            <Typography id="modal-modal-description">
              Giao dịch thất bại
            </Typography>

            <div className='mt-3'>
              <button className={`btn ${styles.modal__btn}`} onClick={handleClose}>Quay lại</button>
            </div>
          </div>

        </Box>
      </Modal>
    </div>
  );
}

export default verifyLoggin(Order);
