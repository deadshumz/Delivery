import React from 'react'

export default function CategoryList({categories}) {

    return (
        <>
            <h1>Categories</h1>
            {categories.map((category) => 
                <span key={category.id}>
                    <a href={`?category=${category.id}`}>{category.name}</a>
                    <br/>
                </span>
            )}
        </>
    )
}
