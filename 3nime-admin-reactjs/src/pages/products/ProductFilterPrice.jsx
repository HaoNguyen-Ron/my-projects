import React, { useEffect, useState } from 'react'

import fil from './product.module.css'

export default function ProductFilterPrice({ setQueryResult, productsList, }) {
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  const handlePriceChange = (priceOption) => {
    const isOptionSelected = selectedPriceRanges.includes(priceOption);

    let updatedSelectedPriceRanges;

    if (isOptionSelected) {
      updatedSelectedPriceRanges = selectedPriceRanges.filter(
        (selectedOption) => selectedOption !== priceOption
      );
    } else {
      updatedSelectedPriceRanges = [...selectedPriceRanges, priceOption];
    }

    setSelectedPriceRanges(updatedSelectedPriceRanges);
  };

  const getPriceRangeFromOption = (selectedPriceOption) => {
    switch (selectedPriceOption) {
      case "Below 1.000.000₫":
        return [0, 1000000];
      case "1.000.000₫ - 2.000.000₫":
        return [1000000, 2000000];
      case "2.000.000₫ - 3.000.000₫":
        return [2000000, 3000000];
      case "3.000.000₫ - 4.000.000₫":
        return [3000000, 4000000];
      case "Above 4.000.000₫":
        return [4000000, 80000000];
      default:
        return [];
    }
  };

  useEffect(() => {
    const filterProductsByPrice = () => {
      if (selectedPriceRanges.length === 0) {
        // If no price options are selected, render all products
        setQueryResult(productsList);
        return;
      }

      const filtered = productsList.filter((product) => {
        const productPrice = product.price;

        return selectedPriceRanges.some((range) => {
          const [minPrice, maxPrice] = getPriceRangeFromOption(range);

          return (
            (minPrice === undefined || productPrice >= minPrice) &&
            (maxPrice === undefined || productPrice <= maxPrice)
          );
        });
      });
      setQueryResult(filtered);
    };

    filterProductsByPrice();
  }, [selectedPriceRanges, productsList, setQueryResult]);

  return (
    <div
      className={`${fil["filter_group-block"]}`}
    >
      <button className={` btn ${fil["filter_group-subtitle"]} border rounded`}>
        Price
        <i className={` ${fil["icon-control"]} fa fa-chevron-down`} aria-hidden="true" />
      </button>

      <FilItem
        handlePriceChange={handlePriceChange}
        items={[
          "Below 1.000.000₫",
          "1.000.000₫ - 2.000.000₫",
          "2.000.000₫ - 3.000.000₫",
          "3.000.000₫ - 4.000.000₫",
          "Above 4.000.000₫",
        ]}
      />
    </div>

  )
}

const FilItem = ({ items, handlePriceChange }) => {
  const handleCheckboxChange = (priceOption) => {
    handlePriceChange(priceOption);
  };

  return (
    <div className={`${fil["filter_group-content"]}`}>
      <ul className={`${fil["checkbox-list"]}`}>
        {items.map((priceOption, index) => (
          <li className={`${fil["li"]}`} key={index}>
            <input
              type="checkbox"
              id={`data-brand-p-${index}`}
              value={priceOption}
              name="brand-filter"
              data-vendor="(vendor:product contains)"
              onChange={() => handleCheckboxChange(priceOption)}
            />

            <span className={fil.title}>
              {priceOption}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};