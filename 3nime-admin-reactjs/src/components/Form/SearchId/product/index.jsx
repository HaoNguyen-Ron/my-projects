import React from 'react'
import styles from './../../form.module.css'
import axiosClient from 'utils/axiosClient';
import { fuzzySearch } from 'utils/Api';

export default function ProductSearch({ setQueryResult, productList }) {

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const inputValue = e.target.querySelector('input').value;
      const res = await axiosClient.get(`/products/${inputValue}`);

      if (res.status === 200) {
        setQueryResult([res.data.payload]);
      }

    } catch (error) {
      console.log('««««« error »»»»»', error);
      setQueryResult(productList);
    }
  };

  const handleSearchChange = (e) => {
    if (!e.target.value) return setQueryResult(productList || []);

    const fuzzy = fuzzySearch(e.target.value);

    const resultsArray = productList.filter(product =>
      product.name.match(fuzzy)
    );

    setQueryResult(resultsArray)
  }

  return (
    <form action="" className='input-group' onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Find product's id or name"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        onChange={handleSearchChange}
      />

      <button
        className={`btn ${styles.modal__btn}`}
        type="submit"
        id="button-addon2">
        <i className="fa-solid fa-magnifying-glass text-white"></i>
      </button>

    </form>
  )
}
