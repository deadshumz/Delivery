import React, { useEffect, useState, useRef } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from './CategoryList.module.css'
import { ChevronDown } from 'react-bootstrap-icons';

export default function CategoryList({categories, change}) {

    const [selectedCategories, setSelectedCategories] = useState([])
    const [popupVisible, setPopupVisible] = useState(false)
    const categoryBtn = useRef()

    const togglePopup = () => {
        setPopupVisible(!popupVisible)
    }
    

    const CategoryChangeHandler = (category_id) => {
        if (selectedCategories.includes(category_id)) {
            setSelectedCategories((selectedCategories) => selectedCategories.filter((category) => category !== category_id))
        } else {
            setSelectedCategories([
                ...selectedCategories,
                category_id
            ])
        }
    }

    const ConfirmCategoriesHandler = () => {
        let list_to_str = selectedCategories.join(',')
        change(list_to_str)
        setPopupVisible(!popupVisible)
    }


    return (
        <div className='position-relative'>
            <div className={styles.categoryBtn} onClick={togglePopup} ref={categoryBtn}>Category <ChevronDown className='ms-1'/></div>
            {popupVisible && <div className={styles.popup}>
                {categories.map((category) => {
                    return(<div key={category.id} className="mb-2">
                        <Form.Check type='checkbox' defaultChecked={selectedCategories.includes(category.id.toString()) ? true : false} categoryid={category.id} key={category.id} onChange={(e) => CategoryChangeHandler(e.target.getAttribute('categoryid'))} inline label={category.name} className={styles.popupEl}/>
                    </div>)})}
                <Button variant="outline-success" onClick={ConfirmCategoriesHandler}>Confirm</Button>
            </div>}
        </div>
    )
}
