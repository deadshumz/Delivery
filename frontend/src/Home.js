import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import CategoryList from './Components/CategoryList'
import RestaurantList from './Components/RestaurantList';

const API_URL = 'http://localhost:8000'


export default function Home() {

    const [restaurants, setRestaurants] = useState(false)
    const [categories, setCategories] = useState(false)

    // Get Restaurants
    useEffect(() => {
        const url = `${API_URL}/api/restaurant`
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


    return (
        <Container className='mt-5'>
            <Row>
                <Col xxl="10">
                    {restaurants && categories && <RestaurantList restaurants={restaurants} categories={categories} />}
                </Col>
                <Col xxl="2">
                    {categories && <CategoryList categories={categories}/>}
                </Col>
            </Row>
        </Container>
    )
}
