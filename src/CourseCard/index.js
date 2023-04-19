/* eslint-disable @next/next/no-img-element */
import { CartContext } from '@/contexts/CartContext'
import React, { useContext } from 'react'

const CourseCard = ({ img, title, price }) => {
    const { handleAddItemToCart } = useContext(CartContext)

    return (
        <div>
            <div className='card'>
                <img className='card-logo' src={img} alt='/next-logo.svg' />
                <h1 className='card-title'>
                    {title} R$ {price}</h1>
                <button onClick={() => handleAddItemToCart(img, title, price)}>Adicionar</button>
            </div>
        </div>
    )
}

export default CourseCard