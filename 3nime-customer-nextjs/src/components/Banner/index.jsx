import React from "react";
import x from "@/components/Banner/Banner.module.css";
import Link from "next/link";

function Banner({ image, titles, caption, name }) {
  return (
    <div>
      <figure
        className={`
            ${x["figure"]}
            ${x["snip1278"]}`}
      >
        <h4 className={`${x["H4"]}`}>{titles}</h4>

        <div className={`${x["image"]}`}>
          <img className={`${x["images"]}`} src={image} alt="sq-sample6" />
        </div>

        <figcaption className={`${x["figcaption"]}`}>
          <p className="text-dark">Bộ sưu tập</p>

          <p className={`${x["name"]}`}>{name}</p>

          <p className={` text-dark ${x["pi"]}`}>{caption}</p>

          <div className={`${x["price"]}`}>
            <Link href="/collections" className={`${x["add-to-cart"]}`}>
              Xem Thêm
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </Link>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default Banner;
