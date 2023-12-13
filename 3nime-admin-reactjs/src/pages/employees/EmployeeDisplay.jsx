import React from 'react'
import EmployeeList from './EmployeeList'

export default function EmployeeDisplay({ queryResult }) {

    const display = queryResult?.map((employee, index) => <EmployeeList key={employee.id} employeesList={employee} index={index} />);

    const content = display?.length ? display : null

    return (
        <tbody>
            {content}
        </tbody>
    )
}
