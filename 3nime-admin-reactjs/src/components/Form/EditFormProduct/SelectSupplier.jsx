import React, { memo, useEffect, useMemo, useState } from 'react';
import { getSupplierAll } from 'utils/Api';

function SelectSupplier({
    label,
    name,
    validation,
    selectedSupplier
}) {
    const [supplierList,setSupplierList] = useState([]);
 
    const isValid = useMemo(() => {
        if (validation.errors[name] && validation.touched[name]) {
            return false;
        };

        return true;
    }, [name, validation.errors, validation.touched]);

    useEffect(() => {
      getSupplierAll().then(data => {
        setSupplierList(data || [])
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
                    <option defaultValue>{selectedSupplier.name}</option>
                    {
                        supplierList.map(supplier => {
                            return(
                                <option key={supplier._id} value={supplier._id}>{supplier.name}</option>
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

export default memo(SelectSupplier);