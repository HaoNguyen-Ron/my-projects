import React from "react";

import Styles from "@/styles/cart.module.css";
import Style from '@/styles/Order.module.css'

function OrderProductList({ listProduct }) {
  const formattedPrice = (price) => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  const totalPrice = listProduct.reduce(
    (total, item) => total + (item.price - (item.price * item.discount) / 100) * item.quantity,
    0
  );
  return (
    <div className="d-flex flex-column px-3">
      <div>
        {listProduct.map((item) => (
          <div key={item._id} className={`${Style.title_number_border}`}>
            <div
              className={`d-flex row align-items-center justify-content-between ${Styles.media_line_item}`}
            >
              <div className={`col-3 position-relative ${Styles.media_left}`}>
                <img
                  className={`${Styles.image_number_cart}`}
                  src={item.description}
                  alt={item.name}
                />

                <span className="position-absolute translate-middle badge rounded-pill bg-secondary">
                  {item.quantity}

                  <span className="visually-hidden">unread messages</span>
                </span>
              </div>

              <div className={`col-7 ${Styles.media_right}`}>
                <p>{item.name}</p>
              </div>

              <div className={`col-2 ${Styles.title_ThanhTien}`}>
                <p className={`${Styles.input_color_1}`}>
                  <b>{formattedPrice((item.price - (item.price * item.discount) / 100) * item.quantity)}</b>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="d-flex justify-content-between align-items-center">
        <p className={`${Style.input_size}`}>Tổng tiền:</p>
        <p className={` ${Style.input_size} ${Styles.input_color_1}`}><b>{formattedPrice(totalPrice)}</b></p>
      </div>
    </div>
  );
}

export default OrderProductList;
