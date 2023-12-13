import React, { useEffect, useState } from 'react'

import fil from './product.module.css'
import { getSupplierAll } from 'utils/Api';

export default function ProductFilterSupplier({ setQueryResult, productsList }) {
  const [selectedSuppliers, setSelectedSuppliers] = useState([]);
  const [checkboxLabel, setCheckboxLabel] = useState([])

  function handleSuppllierChange(label) {
    // Check if the label is already in the selected suppliers list
    if (selectedSuppliers.includes(label)) {
      // If it is, remove it
      const updatedSuppliers = selectedSuppliers.filter((supplier) => supplier !== label);
      setSelectedSuppliers(updatedSuppliers);
    } else {
      // If it's not, add it
      const updatedSuppliers = [...selectedSuppliers, label];
      setSelectedSuppliers(updatedSuppliers);
    }
  }

  useEffect(() => {
    getSupplierAll().then(data => {
      setCheckboxLabel(data || [])
    })

    // If no suppliers are selected, show all products
    if (selectedSuppliers.length === 0) {
      setQueryResult(productsList);
    } else {
      // Filter products based on selected suppliers
      const resultArray = productsList.filter((product) => selectedSuppliers.includes(product.supplier.name));
      setQueryResult(resultArray);
    }
  }, [selectedSuppliers, productsList, setQueryResult]);

  return (
    <div
      className={`${fil["filter_group-block"]}`}
    >
      <button className={` btn ${fil["filter_group-subtitle"]} border rounded`}>
        Supplier
        <i className={` ${fil["icon-control"]} fa fa-chevron-down`} aria-hidden="true" />
      </button>

      <FilItem
        handleSuppllierChange={handleSuppllierChange}
        checkboxLabel={
          checkboxLabel
        }
      />
    </div>

  )
}

const FilItem = ({ checkboxLabel, handleSuppllierChange }) => {
  const handleCheckboxChange = (label) => {
    handleSuppllierChange(label);
  };

  return (
    <div className={`${fil["filter_group-content"]}`}>
      <ul className={`${fil["checkbox-list"]}`}>
        {checkboxLabel && checkboxLabel.map((label, index) => {
          return (
            <li className={`${fil["li"]}`} key={label._id}>
              <input
                type="checkbox"
                id={`data-brand-p-${index}`}
                value={label.name}
                name="brand-filter"
                data-vendor="(vendor:product contains)"
                onChange={() => handleCheckboxChange(label.name)}
              />

              <span className={fil.title}>
                {label.name}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  );
};