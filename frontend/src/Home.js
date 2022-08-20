import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import CategoryList from './Components/CategoryList'
import RestaurantList from './Components/RestaurantList';


export default function Home({API_URL}) {

    const [data, setData] = useState()
    const [selectedCategory, setSelectedCategory] = useState(null)
    const loadsize = 20
    const [shownRestaurants, setShownRestaurants] = useState(loadsize)

    const fetchData = () => {
        // Creating URLSearchParams Object with initial data (current url search params as initial)
        const searchParams = new URLSearchParams(window.location.search);
        // Setting Up API endpoints
        const restaurantURL = `${API_URL}/api/category/${searchParams.get('category')}`
        const categoryURL = `${API_URL}/api/category`

        // Getting raw data
        const getRestaurants = axios.get(restaurantURL)
        const getCategories = axios.get(categoryURL)

        axios.all([getRestaurants, getCategories]).then(
            axios.spread((...allData) => {
                // response data to variable
                setData({
                    restaurants : allData[0].data,
                    categories : allData[1].data,
                })
            })
        )
    }

    useEffect(() => {
        fetchData()
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
    

    if (data) {
        return (
            <Container fluid className='mt-5 px-5 bg-'>
                <h1>Restaurants</h1>
                <Col md="2">
                    <CategoryList categories={data.categories} change={selectChange} currentCategory={selectedCategory}/>
                </Col>
                <RestaurantList restaurants={data.restaurants} categories={data.categories} API_URL = {API_URL}/>
            </Container>
        )
    }
    
}
