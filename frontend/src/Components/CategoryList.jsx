import React from 'react'

export default function CategoryList({categories}) {

    return (
        <div>
            <h1>Categories</h1>
            {categories.map((category) => 
                <p key={category.id}>{category.name}</p>
            )}
        </div>
    )
}
