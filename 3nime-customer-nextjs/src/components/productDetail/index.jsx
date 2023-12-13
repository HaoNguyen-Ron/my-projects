import React, { useState } from "react";

import Styles from "@/styles/cardProduct.module.css";
import { useRouter } from "next/router";

export default function CardProduct({ products }) {
  const [count, setCount] = useState(1);
  const [showText, setShowText] = useState(false);

  const router = useRouter();

  const formattedPrice = (price) => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  const priceThenDiscount =
    products.price - (products.price * products.discount) / 100;
  const handleAddToCart = () => {
    if (router.isReady === true) {
      const checkForToken = localStorage.getItem("TOKEN");
      if (!checkForToken) {
        router.push("/login");
      } else {
        const { products: omitProducts, ...rest } = products;

        const productWithoutCircularRefs = { ...rest };

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = cart.findIndex(
          (item) => item._id === products._id
        );

        if (existingProductIndex !== -1) {
          cart[existingProductIndex].quantity += count;
        } else {
          const newProduct = { ...productWithoutCircularRefs, quantity: count };
          cart.push(newProduct);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
  };

  if (!products) {
    return <p>No product found.</p>;
  }

  function increment() {
    setCount(count + 1);
  }

  // Hàm giảm giá trị xuống 1
  function decrement() {
    if (count > 1) {
      setCount(count - 1);
    } else setCount(count);
  }
  const handleChange = (e) => {
    setCount(Number(e.target.value));
  };

  return (
    <div className={`container d-block `}>
      <div className={`row justify-content-around  ${Styles.card_Product} `}>
        <div
          className={`text-center col-12 col-md-12 col-lg-5 ${Styles.img_product} `}
        >
          <img
            className={`${Styles.caroshel}`}
            src={products.description}
            alt={products.name}
          />
          {products.discount === 0 ? (
            <span></span>
          ) : (
            <span className={`${Styles["sale-span"]}`}>
              -{products.discount}%
            </span>
          )}
        </div>
        <div className={`${Styles.info_product} col-12 col-md-12 col-lg-7`}>
          <h3>{products.name}</h3>
          <p>
            {products.discount === 0 ? (
              <span></span>
            ) : (
              <span className={`${Styles.price_text}`}>
                {formattedPrice(products.price)}
              </span>
            )}

            <span className={`${Styles.price_text_discount}`}>
              {formattedPrice(priceThenDiscount)}
            </span>
          </p>
          <div
            className={`row justify-content-around align-items-center ${Styles.form_buy}`}
          >
            <div className="col-5 col-md-3 col-lg-3 row align-items-center">
              <input
                type="button"
                value="-"
                onClick={decrement}
                className={`col-3 btn btn-light ${Styles.input_color}`}
              />
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={count}
                onChange={handleChange}
                className={`col-3 form-control ${Styles.input_quantity}`}
              />
              <input
                type="button"
                value="+"
                onClick={increment}
                className={`col-3 btn btn-light ${Styles.input_color}`}
              />
            </div>

            <div
              className={`col-7 col-md-3 col-lg-3 btn bg-body-secondary ${Styles.box_mes}`}
            >
              <a
                className="d-flex justify-content-around align-items-center"
                href="https://www.messenger.com/login"
              >
                <img
                  width={35}
                  height={35}
                  src="//theme.hstatic.net/1000160337/1000885200/14/icon_chat_desktop.png?v=316"
                  alt="chat"
                />
                <span className={`${Styles.title_chat}`}>Chat Ngay</span>
              </a>
            </div>
            <button
              onClick={handleAddToCart}
              className={`col-12 col-md-5 col-lg-5 ${Styles.btn_add_card}`}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
          <div className={`${Styles.product_deliverl}`}>
            <ul className={`${Styles.infoList_deliverly}`}>
              <li
                className={`d-flex align-items-center ${Styles.infoList_deliverly_item}`}
              >
                <span>
                  <img
                    className=" lazyloaded"
                    data-src="//theme.hstatic.net/1000160337/1000885200/14/product_deliverly_1_ico.png?v=316"
                    src="//theme.hstatic.net/1000160337/1000885200/14/product_deliverly_1_ico.png?v=316"
                    alt="Sản phẩm chính hãng từ Nhật Bản."
                  />
                </span>
                <div>
                  <i className="fa fa-check" />
                  <strong> Sản phẩm chính hãng từ Nhật Bản.</strong>
                  <br />
                  <i className="fa fa-check" />
                  <strong> Trước khi bạn đặt mua:</strong> vui lòng check lại
                  giá hiện tại với admin, vì khả năng giá đã thay đổi so với lần
                  cập nhật gần nhất, hoặc hết hàng, hết suất order. Do giới hạn
                  số lượng, figure Nhật sẽ hiếm dần theo thời gian, dẫn tới giá
                  tăng.
                </div>
              </li>

              <li
                className={`d-flex align-items-center ${Styles.infoList_deliverly_item}`}
              >
                <span>
                  <img
                    className=" lazyloaded"
                    data-src="//theme.hstatic.net/1000160337/1000885200/14/product_deliverly_2_ico.png?v=316"
                    src="//theme.hstatic.net/1000160337/1000885200/14/product_deliverly_2_ico.png?v=316"
                    alt="Với sản phẩm CÓ SẴN, bạn sẽ được giao ngay."
                  />
                </span>
                <div>
                  <i className="fa fa-check" />
                  <span> Với sản phẩm</span>
                  <strong> CÓ SẴN, bạn sẽ được giao ngay.</strong>
                  <br />
                  <i className="fa fa-check" />
                  <span> Với sản phẩm</span>
                  <strong> ĐẶT TRƯỚC, bạn cần cọc 50% giá trị sản phẩm.</strong>
                  <span>
                    {" "}
                    Hàng về VN khoảng 2-3 tuần sau khi phát hành. Lịch phát hành
                    dự kiến như thông tin chi tiết bên dưới.
                  </span>
                </div>
              </li>

              <li
                className={`d-flex align-items-center ${Styles.infoList_deliverly_item}`}
              >
                <span>
                  <img
                    className=" lazyloaded"
                    data-src="//theme.hstatic.net/1000160337/1000885200/14/product_deliverly_3_ico.png?v=316"
                    src="//theme.hstatic.net/1000160337/1000885200/14/product_deliverly_3_ico.png?v=316"
                    alt="Giao hàng tận nơi. Miễn phí ship với các đơn hàng >1000K .Vui lòng kiểm tra sản phẩm khi nhận bưu kiện"
                  />
                </span>
                <div>
                  <i className="fa fa-check" />
                  <span> Giao hàng tận nơi.</span>
                  <br />
                  <i className="fa fa-check" />
                  <span> Miễn phí ship với các đơn hàng {">"} 1000K </span>
                  <br />
                  <i className="fa fa-check" />
                  <span> Giao hàng tận nơi.</span>
                  <br />
                </div>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <p
              className={`${Styles.infomation_product}`}
              onClick={() => setShowText(!showText)}
            >
              Thông tin sản phẩm
            </p>
            {showText && (
              <div>
                <p>
                  Loại Sản Phẩm: <span>{products.category.name}</span>
                </p>
                <p>
                  Hãng sản xuất: <span>{products.supplier.name}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
