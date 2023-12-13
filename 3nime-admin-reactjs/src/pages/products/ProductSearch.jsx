import React from 'react'

import { fuzzySearch } from 'utils/Api';

import styles from './product.module.css'

export default function ProductSearch({ setQueryResult, productsList }) {
  const handleSubmit = (e) => {
    e.preventDefault()
  };

  const handleSearchChange = (e) => {
    if (!e.target.value) return setQueryResult(productsList || []);

    const fuzzy = fuzzySearch(e.target.value);

    const resultsArray = productsList.filter(product =>
      product.name.match(fuzzy)
      || product.category.name.match(fuzzy)
      || product.supplier.name.match(fuzzy)
    );

    setQueryResult(resultsArray)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <span className="input-group-text" id="basic-addon1">
          <i className={`fa-solid fa-magnifying-glass ${styles.title}`}></i>
        </span>

        <input
          type="text"
          className="form-control"
          placeholder="Search for name..."
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={handleSearchChange} />
      </div>
    </form>
  )
}

