  import React from "react";
  import SearchList from "./SearchList";
  import styles from "@/styles/searchbar.module.css";

  export default function SearchBarDisplay({ queryResult }) {
    const display = queryResult
      .slice(0, 3)
      .map((product, index) => (
        <SearchList key={product._id} searchList={product} index={index} />
      ));
    console.log("««««« display »»»»»", display);
    const content = display?.length ? display : null;

    return (
      <>
        {display.length === 0 ? (
          <p className={styles["searchbar__input-ul-none"]}>Không có sản phẩm nào ... </p>
        ) : (
          <ul className={styles["searchbar__input-ul"]}>{content}</ul>
        )}
      </>
    );
  }
