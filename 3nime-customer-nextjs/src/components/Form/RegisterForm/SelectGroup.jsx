import React, { memo, useMemo } from 'react';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


function SelectGroup({
    label,
    name,
    validation,
}) {

    const [open, setOpen] = React.useState(false);

    const isValid = useMemo(() => {
        if (validation.errors[name] && validation.touched[name]) {
            return false;
        }

        return true;
    }, [name, validation.errors, validation.touched]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className="mb-3">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    defaultValue=""
                    labelId="demo-simple-select-label"
                    id="demo-simple-select outlined-error-helper-text"
                    value={validation.values[name]}
                    label={label}
                    variant="outlined"
                    name={name}
                    open={open}
                    onBlur={validation.onBlur}
                    onChange={validation.handleChange}
                    className={` ${isValid ? '' : 'is-invalid'}`}
                    onClose={handleClose}
                    onOpen={handleOpen}
                >
                    <MenuItem value={0}>Nam</MenuItem>
                    <MenuItem value={1}>Nữ</MenuItem>
                    <MenuItem value={2}>Bí mật</MenuItem>
                </Select>
            </FormControl>

            {!isValid && (
                <div className="invalid-feedback">
                    {validation.errors[name]}
                </div>
            )}
        </div>
    );
}

export default memo(SelectGroup);