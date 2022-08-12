import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './RestaurantList.module.css'

export default function RestaurantList(props) {

    return (
        <>
            <Row className='px-2'>
                {props.restaurants.map(restaurant => {

                    let restaurant_category = null

                    for (let category of props.categories) {
                        if (category.id === restaurant.category) {
                            restaurant_category = category.name
                        }
                    }

                    return(
                        <Col key={restaurant.id} md="6" xl="4" xxl="3" className={`p-1`}>
                            <div className={`${styles.restaurant} border d-flex flex-column`}>
                                <div>img</div>
                                <div className='p-3'>
                                    <h2 className={styles.title}>{restaurant.name}</h2>
                                    <span className={`${styles.categoryBadge} mt-2`}>{restaurant_category}</span>
                                </div>
                            </div>
                        </Col>
                    )
                    
                })}
            </Row>
        </>
    )
}
