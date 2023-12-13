
import React from 'react'

import fil from './category.module.css'
import {
  sortCategoryByAZ,
} from 'utils/Api';

export default function CategorySort({ setQueryResult }) {

  const handleSortAToZ = () => {
    sortCategoryByAZ().then(data => {
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
            Name
          </button>
        </div>
      </div>
    </div>

  )
}
