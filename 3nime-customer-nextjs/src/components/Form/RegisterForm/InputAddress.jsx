import React, { useEffect, useMemo, useState } from 'react'

import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';


export default function InputAddress({
    name,
    validation,
}) {

    const [cityList, setCityList] = useState([]);

    const [currentCityName, setCurrentCityName] = useState()
    const [currentDistrictName, setCurrentDistrictName] = useState()
    const [currentWardId, setCurrentWardName] = useState()

    const getCurrentDistrictList = () => {
        const currentCity = cityList.find((city) => city.Name === currentCityName)

        return currentCity && currentCity.Districts || []

    }

    const getCurrentWardList = () => {
        const currentDistrict = getCurrentDistrictList().find((district) => district.Name === currentDistrictName)

        return currentDistrict && currentDistrict.Wards || []
    }

    const isValidCity = useMemo(() => {
        if (validation.errors.city && validation.touched.city) {
            return false;
        }

        return true;
    }, [validation.errors, validation.touched]);

    const isValidDistrict = useMemo(() => {
        if (validation.errors.district && validation.touched.district) {
            return false;
        }

        return true;
    }, [validation.errors, validation.touched]);

    const isValidWard = useMemo(() => {
        if (validation.errors.ward && validation.touched.ward) {
            return false;
        }

        return true;
    }, [validation.errors, validation.touched]);

    const onChangeCity = (e) => {
        validation.setFieldValue('city', e.target.value)
        setCurrentCityName(e.target.value)
    };

    const onChangeDistrict = (e) => {
        validation.setFieldValue('district', e.target.value)
        setCurrentDistrictName(e.target.value)

    };

    const onChangeWard = (e) => {
        validation.setFieldValue('ward', e.target.value)
        setCurrentWardName(e.target.value)

    };


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setCityList(data)
            })
    }, []);


    return (
        <div className="mb-3 g-5 d-flex row" >
            <div className="col-12 col-md-12">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Thành phố / Tỉnh</InputLabel>
                    <Select
                        defaultValue=''
                        labelId="demo-simple-select-label"
                        id="demo-simple-select outlined-error-helper-text"
                        label='Thành phố / Tỉnh'
                        variant="outlined"
                        name='city'
                        onBlur={validation.handleBlur}
                        onChange={onChangeCity}
                        error={
                            Boolean(validation.touched.city && validation.errors.city)
                        }
                    >
                        {
                            cityList && cityList.map((city) =>
                                <MenuItem key={city.Id} value={city.Name}>{city.Name}</MenuItem>
                            )
                        }
                    </Select>

                    {!isValidCity && (
                        <div style={{ color: '#ee2d7a' }}>
                            {validation.errors.city}
                        </div>
                    )}
                </FormControl>
            </div>

            <div className="col-12 col-md-6">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Quận / Huyện</InputLabel>
                    <Select
                        defaultValue=""
                        labelId="demo-simple-select-label"
                        id="demo-simple-select outlined-error-helper-text"
                        label='Quận / Huyện'
                        variant="outlined"
                        onChange={onChangeDistrict}
                        error={
                            Boolean(validation.touched.district && validation.errors.district)
                        }
                    >
                        {
                            getCurrentDistrictList() && getCurrentDistrictList().map((district) =>
                                <MenuItem key={district.Id} value={district.Name}>{district.Name}</MenuItem>)
                        }
                    </Select>

                        {!isValidDistrict && (
                            <div style={{ color: '#ee2d7a' }}>
                                {validation.errors.district}
                            </div>
                        )}
                </FormControl>
            </div>

            <div className="col-12 col-md-6">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Phường / Xã</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select outlined-error-helper-text"
                        label='Quận / Huyện'
                        variant="outlined"
                        onChange={onChangeWard}
                        error={
                            Boolean(validation.touched.ward && validation.errors.ward)
                        }
                    >
                        {
                            getCurrentWardList().map((ward) =>
                                <MenuItem key={ward.Id} value={ward.Name}>{ward.Name}</MenuItem>)
                        }
                    </Select>
                    
                        {!isValidWard && (
                            <div style={{ color: '#ee2d7a' }}>
                                {validation.errors.ward}
                            </div>
                        )}
                </FormControl>
            </div>

        </div >
    )
}
