import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './css/Restaurant.module.css'

export default function Restaurant({API_URL}) {

    const restaurantId = useParams().id
    const [data, setData] = useState()

    const fetchData = (id = restaurantId) => {
        // Endpoint URLs
        const restaurantDataURL = `${API_URL}/api/restaurants/${id}`

        // raw data
        const restaurantData = axios.get(restaurantDataURL)
        
        axios.all([restaurantData,]).then(
            axios.spread((...allData) => {
                setData({
                    restaurant : allData[0].data[0],
                })
            })
        )
    }

    useEffect(() => {
        fetchData()
    }, [])

    // useEffect(() => {
    //     axios.get(`${API_URL}/api/restaurant/${restaurantId}`).then(response => {
    //         if(response.status === 200) {
    //             console.log(response.data)
    //             response = response.data[0]
    //             setRestaurantData({
    //                 ...restaurantData, 
    //                 name : response.name,
    //                 image : response.image
    //             })
    //         }
    //     })
    // }, [])

    if (data) {
        return (
            <Container fluid className='mt-5 px-5'>
                
                <h1> <img className={styles.image} style={{backgroundImage : `url(${API_URL}${data.restaurant.image})`}} /> Restaurant - {data.restaurant.name}</h1>
                
            </Container>
        )
    }
}