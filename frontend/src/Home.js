import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import axios from 'axios'
import CategoryList from './Components/CategoryList'
import RestaurantList from './Components/RestaurantList';
import ShuffleButton from './Components/ShuffleButton';

export default function Home({API_URL}) {

    const [data, setData] = useState()
    const [selectedCategories, setSelectedCategories] = useState('')
    const loadsize = 20
    const [shownRestaurants, setShownRestaurants] = useState(loadsize)

    const fetchData = () => {
        // Setting Up API endpoints
        const restaurantURL = `${API_URL}/api/restaurants/category/${selectedCategories}`
        const categoryURL = `${API_URL}/api/categories`

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

    const dataShuffle = () => {
        setData({
                ...data,
                restaurants : data.restaurants.sort(() => Math.random() - 0.5)
            })
    }

    useEffect(() => {
        fetchData()
    }, [selectedCategories])


    if (data) {
        return (
            <Container fluid className='mt-5 px-5 bg-'>
                <h1>Restaurants</h1>
                <div className='d-flex'>
                    <ShuffleButton className='me-2' callback={dataShuffle}/>
                    <CategoryList categories={data.categories} change={setSelectedCategories}/>
                </div>
                <RestaurantList restaurants={data.restaurants} categories={data.categories} API_URL = {API_URL}/>
            </Container>
        )
    }
    
}
