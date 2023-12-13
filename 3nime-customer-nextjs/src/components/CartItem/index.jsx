import React, { useEffect, useState } from "react";
import Styles from "@/styles/cart.module.css";
import Link from "next/link";

export default function CartItem({id}) {

  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("cart");

    const parsedData = storedData ? JSON.parse(storedData) : [];

    setData(parsedData);
  }, []);

  const totalItemCount = data.reduce((total, item) => total + item.count, 0);
  const totalPrice = data.reduce((total, item) => total + item.price * item.count, 0);

  const decrementCount = (productId) => {
    const updatedData = data.map((item) => {
      if (item._id === productId) {
        const newCount = item.count - 1;
        return newCount >= 1 ? { ...item, count: newCount } : item;
      }
      return item;
    });

    // Update state and local storage with the new data
    setData(updatedData);
    localStorage.setItem("cart", JSON.stringify(updatedData));
  };

  const incrementCount = (productId) => {
    const updatedData = data.map((item) =>
      item._id === productId ? { ...item, count: item.count + 1 } : item
    );

    // Update state and local storage with the new data
    setData(updatedData);
    localStorage.setItem("cart", JSON.stringify(updatedData));
  };

  const deleteProduct = (productId) => {
    const updatedData = data.filter((item) => item._id !== productId);

    // Update state and local storage with the new data
    setData(updatedData);
    localStorage.setItem("cart", JSON.stringify(updatedData));
  };


  const calculateTotal = () => {
    return data.price * count;
  };
  
  return (
        <div className={` ${Styles.title_number_border}`}>
          <p className={`${Styles.title_number_cart}`}>
            Bạn đang có <b> sản phẩm </b> trong giỏ hàng
          </p>
          <div className={`d-flex row ${Styles.media_line_item}`}>
            <div className={`col-2 ${Styles.media_left}`}>
              <Link className={`${Styles.media_left_a}`} href="/">
                <img
                  className={`${Styles.image_number_cart}`}
                  src={data.description}
                  alt={data.name}
                />
              </Link>
            </div>
            <div className={`col-8 ${Styles.media_right}`}>
              <Link href="/">Goddess of Victory: Nikke Emma 1/7</Link>
              <div className="d-flex">
                <input
                  type="button"
                  value="-"
                  onClick={decrement}
                  className={` btn btn-light ${Styles.input_color}`}
                />
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={count}
                  onChange={handleCountChange}
                  className={`form-control ${Styles.input_quantity}`}
                />
                <input
                  type="button"
                  value="+"
                  onClick={increment}
                  className={`btn btn-light ${Styles.input_color}`}
                />
              </div>
              <p>
                <b>
                  {data.price}
                  <u>đ</u>
                </b>
              </p>
            </div>
            <div className={`col-2`}>
              <Link href="/cart/change?line=1&quantity=0" className="cart">
                <img src="//theme.hstatic.net/1000160337/1000885200/14/delete-cart.png?v=316" />
              </Link>
            </div>
          </div>
          <div>
            <span>Thành Tiền:</span>
            <span>{calculateTotal()}</span>
          </div>
        </div>
  );
}
{
  /* <>
      {quantity === 0 ? (
        <p className={`${Styles.title_number_cart}`}>
          Giỏ hàng của bạn đang trống
        </p>
      ) : (
        <div>
          {quantity.map((item) => (
            <div key={item.id} className={` ${Styles.title_number_border}`}>
              <p className={`${Styles.title_number_cart}`}>
                Bạn đang có <b> {quantity} sản phẩm </b> trong giỏ hàng
              </p>
              <div className={`d-flex row ${Styles.media_line_item}`}>
                <div className={`col-2 ${Styles.media_left}`}>
                  <a className={`${Styles.media_left_a}`} href="/">
                    <img
                      className={`${Styles.image_number_cart}`}
                      src={item.image}
                      alt={item.name}
                    />
                  </a>
                </div>
                <div className={`col-8 ${Styles.media_right}`}>
                  <a href="/">{item.name}</a>
                  <div className="d-flex">
                    <input
                      type="button"
                      value="-"
                      onClick={decrement}
                      className={` btn btn-light ${Styles.input_color}`}
                    />
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={count}
                      onChange={handleCountChange}
                      className={`form-control ${Styles.input_quantity}`}
                    />
                    <input
                      type="button"
                      value="+"
                      onClick={increment}
                      className={`btn btn-light ${Styles.input_color}`}
                    />
                  </div>
                  <p>
                    <b>
                      {item.price}
                      <u>đ</u>
                    </b>
                  </p>
                </div>
                <div className={`col-2`}>
                  <a href="/cart/change?line=1&quantity=0" className="cart">
                    <img src="//theme.hstatic.net/1000160337/1000885200/14/delete-cart.png?v=316" />
                  </a>
                </div>
              </div>
              <div>
                <span>Thành Tiền:</span>
                <span>{calculateTotalPerProduct()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </> */
}
