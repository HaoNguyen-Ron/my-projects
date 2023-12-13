import React from 'react'
import CategoryList from './CategoryList';

export default function CategoryDisplay({ queryResult }) {

    const display = queryResult?.map((category, index) => <CategoryList key={category._id} categoryList={category} index={index} />);

    const content = display?.length ? display : null

    return (
        <tbody>
            {content}
        </tbody>
    )
}
