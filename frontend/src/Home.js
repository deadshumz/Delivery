import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import CategoryList from './Components/CategoryList'

const API_URL = 'http://localhost:8000'


export default function Home() {
    
    const [categories, setCategories] = useState(false)

    useEffect(() => {
        const url = `${API_URL}/api/category`
        axios.get(url).then(response => {
            setCategories(response.data)
        })
    }, [])


    return (
        <Container>
            {categories && <CategoryList categories={categories}/>}
        </Container>
    )
}
