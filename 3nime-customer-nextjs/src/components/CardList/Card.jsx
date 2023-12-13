import React, { useState } from "react";
import x from "@/styles/Card.module.css";

function Card({ products, handleAddToCart, id }) {
  const formattedPrice = (price) => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  return (
    <div>
      <div className="owl-stage-outer">
        <div className="owl-stage">
          <div className="owl-item active" style={{ width: "100%" }}>
            <div className="row-product">
              <div className={`${x["product-small"]} ${x["product-loop"]}`}>
                <div
                  className={`product-resize fixheight ${x["product-inner"]}`}
                  style={{ height: 305 }}
                >
                  <div className={` ${x["proloop-image"]}`}>
                    <div
                      className={`image-resize ${x["proloop--image"]}`}
                      style={{ height: 240 }}
                    >
                      <div className={` ${x["product--image__inner"]}`}>
                        <div
                          className={`hovered-img hidden-xs hidden-sm ${x["prod-img"]}  ${x["second-image"]} `}
                        >
                          <picture className={`${x["picture"]}`}>
                            <img
                              className={` img-loop  ${x["lazyloaded"]}`}
                              alt=""
                              src={products.description}
                            />
                            {products.discount === 0 ? (
                              <></>
                            ) : (
                              <span className={`${x["sale-span"]}`}>
                                -{products.discount}%
                              </span>
                            )}
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${x["proloop-detail"]}`}>
                    <h3 className={`${x["quickview-product"]}`}>
                      {/* onChange={() => handleGoToProductDetail(products.id)}  */}
                      <a href={id} className={`${x["quickview-product"]}`}>
                        {products.name}
                      </a>
                    </h3>
                    <p className={`${x["proloop--price"]}`}>
                      {products.discount === 0 ? (
                        <></>
                      ) : (
                        <span className={`${x["price"]}`}>
                          {formattedPrice(products.price)}
                        </span>
                      )}
                      <span className={`${x["price-discount"]}`}>
                        {formattedPrice(
                          products.price -
                            (products.price * products.discount) / 100
                        )}
                      </span>
                    </p>
                  </div>
                  <div className={`${x["proloop-actions"]}`}>
                    <div className={`${x["proloop-actions__inner"]}`}>
                      <div
                        className={`d-flex justify-content-center ${x["actions-primary"]}`}
                      >
                        <button
                          onClick={() => handleAddToCart(products)}
                          type="button"
                          className={`${x["btn_add_card"]}`}
                          style={{ border: "none" }}
                        >
                          <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                      </div>
                      <div className={`${x["actions-secondary"]}`}>
                        <button
                          type="button"
                          className={` ${x["button"]}  ${x["btn-proloop-checkout"]} `}
                        >
                          <i className="fa-solid fa-bag-shopping"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
