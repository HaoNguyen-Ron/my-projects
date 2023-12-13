import React, { memo, useMemo } from 'react';

function SelectSupplier({
    label,
    name,
    validation,
}) {

    const isValid = useMemo(() => {
        if (validation.errors[name] && validation.touched[name]) {
            return false;
        };

        return true;
    }, [name, validation.errors, validation.touched]);

    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>

            <select
                label={label}
                id="demo-simple-select outlined-error-helper-text"
                name={name}
                onChange={validation.handleChange}
                className={` ${isValid ? "" : "is-invalid"} form-select`}
                value={validation.values[name]}
            >
                <option defaultValue></option>
                <option value="CASH">Bằng tiền mặt tại cửa hàng</option>
                <option value="CREDIT_CARD">Bằng thẻ tín dụng</option>
            </select>

            {!isValid && (
                <div style={{ color: "#ee2d7a" }}>
                    {validation.errors.paymentType}
                </div>
            )}
        </div>
    );
}

export default memo(SelectSupplier);