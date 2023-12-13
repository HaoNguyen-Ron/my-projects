import React, { memo, useMemo } from 'react';

function DateGroup({
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

            <input 
                label={label}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                type='date'
                name={name}
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                className={` ${isValid ? '' : 'is-invalid'} form-control`}
            />

            {!isValid && (
                <div style={{ color: '#ee2d7a' }}>
                    {validation.errors[name]}
                </div>
            )}
        </div>
    );
}
export default memo(DateGroup)
