import React, { useState } from "react";

import styles from "@/styles/searchbar.module.css";

export default function SearchList({ searchList, index }) {
  const updatedUrl = `/productDetail/${searchList._id}`;;

  return (
    <>
      <li
        className={`d-flex justify-content-between align-items-center ${styles["searchbar__input-li"]}`}
        key={searchList._id}
      >
        <a
          className={`d-flex justify-content-between align-items-center ${styles["searchbar__input-li-a"]}`}
          href={updatedUrl}
        >
          <div>
            <p>{searchList.name}</p>
            <p className={styles["searchbar__input-p"]}>{searchList.price}</p>
          </div>

          <div>
            <img
              src={searchList.description}
              alt=""
              className={styles["searchbar__input-img"]}
            />
          </div>
        </a>
      </li>
    </>
  );
}
