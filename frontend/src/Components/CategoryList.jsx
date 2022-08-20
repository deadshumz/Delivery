import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'

export default function CategoryList({categories, change}) {

    const [currentCategory, setCurrentCategory] = useState("0")



    useEffect(() => {
        let URLParams = new URLSearchParams(window.location.search)
        if (URLParams.has('category')) {
            setCurrentCategory(URLParams.get('category')) 
        } else {
            setCurrentCategory("0")
        }
    }, [])

    return (
        <Form.Select value={currentCategory} onChange={(e) => change(e.currentTarget.value)}>
            <option value="0">Select Category</option>
            {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option> )}
        </Form.Select>
    )
}
