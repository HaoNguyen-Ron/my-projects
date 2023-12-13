
import React from 'react'

import styles from './order.module.css'


import { SortOrderByDateNToP, SortOrderByDatePToN } from 'utils/Api/order';
import axiosClient from 'utils/axiosClient';

export default function OrderSort({ setQueryResult }) {

  const handleSortNToP = () => {
    SortOrderByDateNToP().then(data => {
      setQueryResult(data)
    })
  }

  const handleSortPToN = () => {
    SortOrderByDatePToN().then(data => {
      setQueryResult(data)
    })
  }

  const handleOrderByStatus = async (selectedStatus) => {
    try {
      const res = await axiosClient.get(`/query/sortOrderByStatus/`, { params: { status: selectedStatus } });
      
      setQueryResult(res.data.payload || [])

    } catch (error) {
      console.log('««««« apiError »»»»»', error);
    }
  }

  return (
    <div className={`${styles["filter_group-block"]}`}>
      <button className={` btn ${styles["filter_group-subtitle"]} border rounded`}
      >
        Sort

        <i className={` ${styles["icon-control"]} fa fa-chevron-down`} aria-hidden="true" />
      </button>

      <div className={`${styles["filter_group-content"]}`}>
        <div className={`${styles["checkbox-list"]} d-flex flex-column`}>
          <button className={`${styles.item} btn border-none`} onClick={handleSortNToP}>
            Date: Present - Past
          </button>

          <button className={`${styles.item} btn border-none`} onClick={handleSortPToN}>
            Date: Past - Present
          </button>

          <button className={`${styles.item} btn border-none`} onClick={() => handleOrderByStatus('COMPLETED')}>
            Status: COMPLETED
          </button>

          <button className={`${styles.item} btn border-none`} onClick={() => handleOrderByStatus('WAITING')}>
            Status: WAITING
          </button>

          <button className={`${styles.item} btn border-none`} onClick={() => handleOrderByStatus('CANCELED')}>
            Status: CANCELLED
          </button>

          <button className={`${styles.item} btn border-none`} onClick={() => handleOrderByStatus('REJECTED')}>
            Status: REJECTED
          </button>

        </div>
      </div>
    </div>

  )
}
