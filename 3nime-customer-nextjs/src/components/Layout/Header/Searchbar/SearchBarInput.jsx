import React, { useState } from "react";
import styles from "@/styles/searchbar.module.css";
import { fuzzySearch } from "@/utils";

export default function SearchBarInput({
  setQueryResult,
  searchList,
  setIsSearched,
}) {
  const [hover, setHover] = useState(false);
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  const handleSearchChange = (e) => {
    if (!e.target.value) {
      return setQueryResult(searchList || []), setIsSearched(false);
    } else {
      const fuzzy = fuzzySearch(e.target.value);

      const resultsArray = searchList.filter((product) =>
        product.name.match(fuzzy)
      );

      setQueryResult(resultsArray);
      setIsSearched(true);
    }
  };

  const handleSearchButton = () => {
    
  }
  return (
    <div
      className="input-group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <input
        type="text"
        className={`form-control ${styles.searchbar}`}
        placeholder="Tìm kiếm sản phẩm ở đây nè !..."
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        onChange={handleSearchChange}
      />

      <button
        className={`btn btn-outline-secondary ${styles.searchbar_btn}`}
        onClick={handleSearchButton}
        type="button"
        id="button-addon2"
        // onClick={handalToSearchPage}
        style={
          hover
            ? { backgroundColor: "#fc629f" }
            : { backgroundColor: "#ee2d7a" }
        }
      >
        <i
          className="fa-solid fa-magnifying-glass"
          style={{ color: "#ffffff" }}
        ></i>
      </button>
    </div>
  );
}
