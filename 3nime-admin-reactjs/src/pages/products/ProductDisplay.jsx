import React from 'react'
import ProductList from './ProductList'

export default function ProductDisplay({ queryResult }) {
    const display = queryResult?.map((product, index) => <ProductList key={product._id} productList={product} index={index} />);

    const content = display?.length ? display : null

    return (
        <tbody>
            {content}
        </tbody>
    )
}
