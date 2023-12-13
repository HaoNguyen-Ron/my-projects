import React, { memo, useEffect, useMemo, useState } from 'react';
import { getCategoryAll } from 'utils/Api';

function SelectCategory({
    label,
    name,
    validation,
    selectedCategory
}) {
    const [categoryList, setCategoryList] = useState([])

    const isValid = useMemo(() => {
        if (validation.errors[name] && validation.touched[name]) {
            return false;
        }

        return true;
    }, [name, validation.errors, validation.touched]);

    useEffect(() => {
        getCategoryAll().then(data => {
            setCategoryList(data || [])
        });
    }, [])

    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>

            <select
                id="demo-simple-select outlined-error-helper-text"
                label={label}
                name={name}
                onBlur={validation.onBlur}
                onChange={validation.handleChange}
                className={` ${isValid ? '' : 'is-invalid'} form-select`}
                aria-label="Default select example"
            >
                <option defaultValue>Default: {selectedCategory.name}</option>
                {
                    categoryList.map(category => {
                        return (
                            <option key={category._id} value={category._id}>{category.name}</option>
                        )
                    })
                }

            </select>

            {!isValid && (
                <div className="invalid-feedback">
                    {validation.errors[name]}
                </div>
            )}
        </div>
    );
}

export default memo(SelectCategory);