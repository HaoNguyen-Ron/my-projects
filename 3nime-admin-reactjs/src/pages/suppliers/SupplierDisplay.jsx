import React from 'react'
import SupplierList from './SupplierList';

export default function SupplierDisplay({ queryResult }) {

    const display = queryResult?.map((supplier, index) => <SupplierList key={supplier._id} supplierList={supplier} index={index} />);

    const content = display?.length ? display : null

    return (
        <tbody>
            {content}
        </tbody>
    )
}
