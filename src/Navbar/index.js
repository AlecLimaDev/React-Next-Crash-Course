import { CartContext } from '@/contexts/CartContext'
import React, { useContext } from 'react'
import Logo from '../Logo'

const Navbar = () => {
    const {cart , clearCart} = useContext(CartContext)
    const totalPrice = cart.reduce((acc, current) => acc + current.price, 0)

    return (
        <header>
            <nav>
                <Logo />
                <div className='nav-bar-actions'>
                    <div className='nav-bar-total'>
                        <span className='nav-bar-total-quantity'>
                        {cart.length} {cart.length === 1 ? "Curso" : "Cursos"}</span>
                        <span className='nav-bar-total-price'>R$ {totalPrice.toFixed(2)}</span>
                    </div>
                    <button className='clean-btn' onClick={() => clearCart()}>Limpar</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar