
import React from 'react'

import fil from './supplier.module.css'
import {
  sortSupplierByAZ,
  sortSupplierByZA,
} from 'utils/Api';

export default function SupplierSort({ setQueryResult }) {

  const handleSortAToZ = () => {
    sortSupplierByAZ().then(data => {
      setQueryResult(data)
    })
  }

  const handleSortZToA = () => {
    sortSupplierByZA().then(data => {
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
        </div>

        <div className={`${fil["checkbox-list"]} d-flex flex-column`}>
          <button className={`${fil.item} btn border-none`} onClick={handleSortZToA}>
            Name: Z - A
          </button>
        </div>
      </div>
    </div>

  )
}
