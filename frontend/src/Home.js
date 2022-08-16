import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import CategoryList from './Components/CategoryList'
import RestaurantList from './Components/RestaurantList';


export default function Home({API_URL}) {

    const [restaurants, setRestaurants] = useState(false)
    const [categories, setCategories] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("0")

    // Get Restaurants
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const url = `${API_URL}/api/restaurant_list?category=${searchParams.get('category')}`
        axios.get(url).then(response => {
            setRestaurants(response.data)
        })
    }, [])


    // Get Categories
    useEffect(() => {
        const url = `${API_URL}/api/category`
        axios.get(url).then(response => {
            setCategories(response.data)
        })
    }, [])


    function selectChange(category_id) {
        const searchParams = new URLSearchParams(window.location.search);
        if (category_id === "0") {
            searchParams.delete('category')
        } else if (searchParams.has('category')) {
            searchParams.set('category', category_id)
            setSelectedCategory(category_id)
        } else {
            searchParams.set('category', category_id)
            setSelectedCategory(category_id)
        }
        window.location.search = searchParams
    }


    return (
        <Container fluid className='mt-5 px-5'>
            <h1>Restaurants</h1>
            <Col md="2">
                {categories && <CategoryList categories={categories} change={selectChange} currentCategory={selectedCategory}/>}
            </Col>
            {restaurants && categories && <RestaurantList restaurants={restaurants} categories={categories} API_URL = {API_URL}/>}
        </Container>
    )
}
