import React from 'react'
import styles from '../../form.module.css'
import { fuzzySearch } from 'utils/Api';
import axiosClient from 'utils/axiosClient';

export default function EmployeeSearch({ setQueryResult, employeesList }) {
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const inputValue = e.target.querySelector('input').value;
            const res = await axiosClient.get(`/employees/${inputValue}`);

            if (res.status === 200) {
                setQueryResult([res.data.payload]);
            }

        } catch (error) {
            console.log('««««« error »»»»»', error);
            setQueryResult(employeesList);
        }
    };

    const handleSearchChange = (e) => {
        if (!e.target.value) return setQueryResult(employeesList || []);

        const fuzzy = fuzzySearch(e.target.value);

        const resultsArray = employeesList.filter(employee =>
            employee.fullName.match(fuzzy) ||
            employee.email.match(fuzzy) ||
            employee.address.match(fuzzy) ||
            employee.city.match(fuzzy) ||
            employee.district.match(fuzzy) ||
            employee.ward.match(fuzzy) ||
            employee.street.match(fuzzy)
        )
        setQueryResult(resultsArray)
    }
    return (
        <form className='input-group' onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-control"
                placeholder="Find customer's id or name"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                onChange={handleSearchChange}
            />
            <button
                className={`btn ${styles.modal__btn}`}
                type="submit"
                id="button-addon2">
                <i className="fa-solid fa-magnifying-glass text-white"></i>
            </button>
        </form>
    )
}

