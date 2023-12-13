import React from 'react'
import CustomerList from './CustomerList'

export default function CustomerDisplay({ queryResult }) {
    const display = queryResult?.map((customer, index) => <CustomerList key={customer.id} searchCustomers={customer} index={index} />);

    const content = display?.length ? display : null

    return (
        <tbody>
            {content}
        </tbody>
    )
}
