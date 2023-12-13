import React, { memo, useMemo } from 'react';

function SelectGroup({
    label,
    name,
    validation,

}) {
 
    const isValid = useMemo(() => {
        if (validation.errors[name] && validation.touched[name]) {
            return false;
        }

        return true;
    }, [name, validation.errors, validation.touched]);

    return (
        <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>

                <select
                    defaultValue=""
                    id="demo-simple-select outlined-error-helper-text"
                    label={label}
                    name={name}
                    onBlur={validation.onBlur}
                    onChange={validation.handleChange}
                    className={` ${isValid ? '' : 'is-invalid'} form-select`}
                    aria-label="Default select example"
                >
                    <option defaultValue></option>
                    <option value={'Male'}>Male</option>
                    <option value={'Female'}>Female</option>
                    <option value={'Secret'}>Secret</option>
                </select>

            {!isValid && (
                <div className="invalid-feedback">
                    {validation.errors[name]}
                </div>
            )}
        </div>
    );
}

export default memo(SelectGroup);