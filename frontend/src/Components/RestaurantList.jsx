import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function RestaurantList(props) {

    console.log(props)
    
    return (
        <>
            <h1>Restaurants</h1>
            <Row>
                {props.restaurants.map(restaurant => {

                    let restaurant_category = null

                    for (let category of props.categories) {
                        if (category.id === restaurant.category) {
                            restaurant_category = category.name
                        }
                    }

                    return(
                        <Col className='p-1'>
                            <div className='border rounded p-3'>
                                <h2>{restaurant.name}</h2>
                                <p>Category: {restaurant_category}</p>
                            </div>
                        </Col>
                    )
                    
                })}
            </Row>
        </>
    )
}
