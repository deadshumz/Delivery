import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Restaurant({API_URL}) {

    const restaurantId = useParams().id
    const [restaurantData, setRestaurantData] = useState({})

    // const fetchData = () => {
    //     const restaurantId = useParams().id
        
    //     const restaurantDataURL = `${API_URL}/restaurant/${restaurantId}`
    //     const restaurantProductsURL = `${API_URL}`

    // }

    useEffect(() => {
        axios.get(`${API_URL}/api/restaurant/${restaurantId}`).then(response => {
            if(response.status === 200) {
                console.log(response.data)
                response = response.data[0]
                setRestaurantData({
                    ...restaurantData, 
                    name : response.name,
                    image : response.image
                })
            }
        })
    }, [])

    return (
        <Container fluid className='mt-5 px-5'>
            <h1>Restaurant - {restaurantData.name}</h1>
            <img src={`${API_URL}${restaurantData.image}`} />
        </Container>
    )
}