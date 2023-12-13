import React, { useEffect, useState } from 'react'

import styles from './order.module.css'

import { getSupplierAll } from 'utils/Api';

export default function OrderFilterStatus({ setQueryResult, orderList }) {
  const [status, setStatus] = useState('')

  const handleStatusChange = () => {

  }

  return (
    <div>
      <div className='btn d-flex align-items-center'>
        <div className='me-2'>
          <label htmlFor="status">Sort status</label>
          <select
            name="status"
            className='form-select'
            onChange={(e) => setStatus(e.target.value)}
          >

            <option defaultValue></option>
            <option value={'COMPLETED'}>Completed</option>
            <option value={"REJECTED"}>Rejected</option>
            <option value={"CANCELED"}>Cancelled</option>
          </select>
        </div>

        <div>
          <div>
            <label htmlFor="fromDate">Date from</label>
            <input type="date" name="fromDate" placeholder='fromdate' className='form-control' />
          </div>

          <div>
            <label htmlFor="toDate">Date to</label>

            <input type="date" name="toDate" placeholder='toDate' className='form-control' />
          </div>
        </div>
      </div>
      {/* <div className=' mt-4 text-center'>
                    <button type='submit' className={`btn ${styles.btn}`} onClick={(e) => handleStatusChange(e, orderList._id)}>Save change status</button>
                </div> */}

    </div>

  )
}
