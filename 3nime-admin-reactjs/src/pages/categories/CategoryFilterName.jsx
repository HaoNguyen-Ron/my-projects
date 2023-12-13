import React, { useEffect, useState } from 'react'

import fil from './category.module.css'
import { getCategoryAll } from 'utils/Api';

export default function CategoryFilterName({ setQueryResult, categoryList }) {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [checkboxLabel, setCheckboxLabel] = useState([])

  function handleSuppllierChange(label) {
    // Check if the label is already in the selected suppliers list
    if (selectedCategory.includes(label)) {
      // If it is, remove it
      const updatedCategory = selectedCategory.filter((supplier) => supplier !== label);
      setSelectedCategory(updatedCategory);
    } else {
      // If it's not, add it
      const updatedCategory = [...selectedCategory, label];
      setSelectedCategory(updatedCategory);
    }
  }

  useEffect(() => {
    getCategoryAll().then(data => {
      setCheckboxLabel(data || [])
    })

    // If no suppliers are selected, show all products
    if (selectedCategory.length === 0) {
      setQueryResult(categoryList);
    } else {
      // Filter products based on selected suppliers
      const resultArray = categoryList.filter((category) => selectedCategory.includes(category.name));
      setQueryResult(resultArray);
    }
  }, [selectedCategory, categoryList, setQueryResult]);

  return (
    <div
      className={`${fil["filter_group-block"]}`}
    >
      <button className={` btn ${fil["filter_group-subtitle"]} border rounded`}>
        Category
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
          return(
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
        )})}
      </ul>
    </div>
  );
};