
import React from 'react'

import fil from './product.module.css'
import {
  SortProductPriceHToL,
  SortProductPriceLToH,
  sortProductByAZ,
  sortProductByZA
} from 'utils/Api';

export default function ProductSort({ setQueryResult, productsList }) {

  const handleSortAToZ = () => {
    sortProductByAZ().then(data => {
      setQueryResult(data)
    })
  }

  const handleSortZToA = () => {
    sortProductByZA().then(data => {
      setQueryResult(data)
    })
  }

  const handlePriceIncrease = () => {
    SortProductPriceLToH().then(data => {
      setQueryResult(data)
    })
  }

  const handlePriceDecrease = () => {
    SortProductPriceHToL().then(data => {
      setQueryResult(data)
    })
  }

  return (
    <div className={`${fil["filter_group-block"]}`}>
      <button className={` btn ${fil["filter_group-subtitle"]} border rounded`}
      >
        Sort

        <i className={` ${fil["icon-control"]} fa fa-chevron-down`} aria-hidden="true" />
      </button>

      <div className={`${fil["filter_group-content"]}`}>
        <div className={`${fil["checkbox-list"]} d-flex flex-column`}>
          <button className={`${fil.item} btn border-none`} onClick={handleSortAToZ}>
            Name: A - Z
          </button>

          <button className={`${fil.item} btn border-none`} onClick={handleSortZToA}>
            Name: Z - A
          </button>

          <button className={`${fil.item} btn border-none`} onClick={handlePriceIncrease}>
            Price: Increase
          </button>

          <button className={`${fil.item} btn border-none`} onClick={handlePriceDecrease}>
            Price: Decrease
          </button>

        </div>
      </div>
    </div>

  )
}
