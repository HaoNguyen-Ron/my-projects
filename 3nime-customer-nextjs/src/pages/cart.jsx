import React, { useEffect, useState } from "react";

import Styles from "@/styles/cart.module.css";
import Link from "next/link";
import VerifyLoggin from "@/components/HOC/verifyLoggin";

function Cart() {
  const [data, setData] = useState([]);

  

  const formattedPrice = (price) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };

  const totalItemCount = data.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = data.reduce(
    (total, item) => total + (item.price-(item.price*item.discount/100)) * item.quantity,
    0
  );

  const decrementCount = (productId) => {
    const updatedData = data.map((item) => {
      if (item._id === productId) {
        const newQuantity = item.quantity - 1;
        return newQuantity >= 1 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    });

    // Update state and local storage with the new data
    setData(updatedData);
    localStorage.setItem("cart", JSON.stringify(updatedData));
  };

  const incrementCount = (productId) => {
    const updatedData = data.map((item) => {
      if (item._id === productId) {
        const newQuantity = item.quantity + 1;
        const maxQuantity = Math.min(newQuantity, item.stock);
        return { ...item, quantity: maxQuantity };
      }
      return item;
    });
    setData(updatedData);
    localStorage.setItem("cart", JSON.stringify(updatedData));
  };

  const deleteProduct = (productId) => {
    const updatedData = data.filter((item) => item._id !== productId);

    // Update state and local storage with the new data
    setData(updatedData);
    localStorage.setItem("cart", JSON.stringify(updatedData));
  };

  const updateCount = (productId, newCount) => {
    const countToUpdate = isNaN(newCount) || newCount < 1 ? 1 : newCount;
  
    const updatedData = data.map((item) => {
      if (item._id === productId) {
        const updatedQuantity = Math.min(Math.max(countToUpdate, 1), item.stock);
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });
  
    setData(updatedData);
    localStorage.setItem("cart", JSON.stringify(updatedData));
  };

  useEffect(() => {
    const storedData = localStorage.getItem("cart");

    const parsedData = storedData ? JSON.parse(storedData) : [];

    setData(parsedData);
  }, []);
  return (
    <div className="mb-5">
      <div className="container">
        <h1 className={`text-center ${Styles.description_cart}`}>
          Giỏ hàng của bạn
        </h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-8">
            {data.length > 0 ? (
              <>
                <p className={`${Styles.title_number_cart}`}>
                  Bạn đang có <b> {totalItemCount} sản phẩm </b> trong giỏ hàng
                </p>
                {data.map((item) => (
                  <>
                    <div
                      key={item.id}
                      className={` ${Styles.title_number_border}`}
                    >
                      <div className={`d-flex row ${Styles.media_line_item}`}>
                        <div className={`col-2 ${Styles.media_left}`}>
                          <a
                            href={`/productDetail/${item._id}`}
                            className={`${Styles.media_left_a}`}>
                            <img
                              className={`${Styles.image_number_cart}`}
                              src={item.description}
                              alt={item.name}
                            />
                          </a>
                        </div>
                        <div className={`col-8 ${Styles.media_right}`}>
                          <a className={`${Styles.name_Product}`} href={`/productDetail/${item._id}`} >{item.name}</a>
                          <div className="d-flex">
                            <input
                              type="button"
                              value="-"
                              onClick={() => decrementCount(item._id)}
                              className={` btn btn-light ${Styles.input_color}`}
                            />
                            <input
                              type="text"
                              id="quantity"
                              name="quantity"
                              value={item.quantity}
                              onChange={(e) =>
                                updateCount(
                                  item._id,
                                  parseInt(e.target.value, 10)
                                )
                              }
                              min="1"
                              className={`form-control ${Styles.input_quantity}`}
                            />
                            <input
                              type="button"
                              value="+"
                              onClick={() => incrementCount(item._id)}
                              className={`btn btn-light ${Styles.input_color}`}
                            />
                          </div>
                          <p>
                            <b>
                              {formattedPrice((item.price-(item.price*item.discount/100)))}
                            </b>
                          </p>
                        </div>
                        <div className={`col-2`}>
                          <button
                            onClick={() => deleteProduct(item._id)}
                            className={`btn btn-light `}
                          >
                            <img src="//theme.hstatic.net/1000160337/1000885200/14/delete-cart.png?v=316" />
                          </button>
                        </div>
                      </div>
                      <div className={`${Styles.title_ThanhTien}`}>
                        <p><b>Thành Tiền:</b></p>
                        <p className={`${Styles.input_color_1}`}><b>{formattedPrice((item.price-(item.price*item.discount/100)) * item.quantity)}</b></p>
                      </div>
                    </div>
                  </>
                ))}
              </>
            ) : (
              <p className={`${Styles.title_number_cart}`}>
                Giỏ hàng của bạn đang trống
              </p>
            )}
          </div>

          <div className="col-12 col-md-4 col-lg-4">
            <div className={`${Styles.box_cart}`}>
              <h2
                className={`${Styles.border_bottom} ${Styles.description_cart}`}
              >
                Thông tin đơn hàng
              </h2>

              <div
                className={`d-flex d-md-block d-lg-flex justify-content-between ${Styles.title_ThanhTien} ${Styles.border_bottom}`}
              >
                  <p className={`${Styles.input_color_2}`}><b>Tổng tiền:</b></p>
                  <p className={`${Styles.input_color_2} ${Styles.input_color_1}`}><b>{formattedPrice(totalPrice)}</b></p>
              </div>

              <div className={`  ${Styles.box_title_cart}`}>
                <p className={`  ${Styles.title_cart}`}>
                  Phí vận chuyển sẽ được tính ở trang thanh toán.
                </p>

                <p className={`  ${Styles.title_cart}`}>
                  Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
                </p>
                {data.length === 0 ? (

                <Link className={`  ${Styles.checkout_btn}`} href=''>
                  Thanh Toán
                </Link>
                )
                : (
                  <Link className={`  ${Styles.checkout_btn}`} href='./order'>
                  Thanh Toán
                </Link>
                )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyLoggin(Cart);
