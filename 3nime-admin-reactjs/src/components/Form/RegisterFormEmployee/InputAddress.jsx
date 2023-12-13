import React, { useEffect, useMemo, useState } from 'react'

export default function InputAddress({
    name,
    validation,
}) {

    const [cityList, setCityList] = useState([]);

    const [currentCityName, setCurrentCityName] = useState()
    const [currentDistrictName, setCurrentDistrictName] = useState()
    const [, setCurrentWardName] = useState()

    const getCurrentDistrictList = () => {
        const currentCity = cityList.find((city) => city.Name === currentCityName)

        return (currentCity && currentCity.Districts) || []

    }

    const getCurrentWardList = () => {
        const currentDistrict = getCurrentDistrictList().find((district) => district.Name === currentDistrictName)

        return (currentDistrict && currentDistrict.Wards) || []
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

    const isValid = useMemo(() => {
        if (validation.errors[name] && validation.touched[name]) {
            return false;
        }

        return true;
    }, [name, validation.errors, validation.touched]);


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
                <label htmlFor="exampleInputEmail1" className="form-label">City</label>

                <select
                    defaultValue=''
                    id="demo-simple-select outlined-error-helper-text"
                    label='Thành phố / Tỉnh'
                    name='city'
                    onBlur={validation.handleBlur}
                    onChange={onChangeCity}
                    className={` ${isValid ? '' : 'is-invalid'} form-select`}
                >
                    <option defaultValue></option>
                    {
                        cityList && cityList.map((city) =>
                            <option key={city.Id} value={city.Name}>{city.Name}</option>
                        )
                    }
                </select>

                {!isValidCity && (
                    <div style={{ color: '#ee2d7a' }}>
                        {validation.errors.city}
                    </div>
                )}
            </div>

            <div className="col-12 col-md-6">
                <label htmlFor="exampleInputEmail1" className="form-label">District</label>

                <select
                    defaultValue=""
                    id="demo-simple-select outlined-error-helper-text"
                    label='Quận / Huyện'
                    onChange={onChangeDistrict}
                    className={` ${isValid ? '' : 'is-invalid'} form-select`}
                >
                    {
                        getCurrentDistrictList() && getCurrentDistrictList().map((district) =>
                            <option key={district.Id} value={district.Name}>{district.Name}</option>)
                    }
                </select>

                {!isValidDistrict && (
                    <div style={{ color: '#ee2d7a' }}>
                        {validation.errors.district}
                    </div>
                )}
            </div>

            <div className="col-12 col-md-6">
                <label htmlFor="exampleInputEmail1" className="form-label">Ward</label>
                
                <select
                    id="demo-simple-select outlined-error-helper-text"
                    label='Quận / Huyện'
                    onChange={onChangeWard}
                    className={` ${isValid ? '' : 'is-invalid'} form-select`}
                >
                    {
                        getCurrentWardList().map((ward) =>
                            <option key={ward.Id} value={ward.Name}>{ward.Name}</option>)
                    }
                </select>

                {!isValidWard && (
                    <div style={{ color: '#ee2d7a' }}>
                        {validation.errors.ward}
                    </div>
                )}
            </div>

        </div >
    )
}
