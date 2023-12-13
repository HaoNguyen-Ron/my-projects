import React from 'react'
import OrderList from './OrderList';

export default function OrderDisplay({ queryResult }) {
    const display = queryResult?.map((order, index) => <OrderList key={order._id} orderList={order} index={index} />);

    const content = display?.length ? display : null

    return (
        <tbody>
            {content}
        </tbody>
    )
}
