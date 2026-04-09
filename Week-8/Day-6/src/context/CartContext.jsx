import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addToCart = (product) => {
        const exist = cart.find((item) => item.id === product.id)
        if (!exist) return setCart((prev) => [...prev, product])
        else return setCart((prev)=>[...prev])
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => item.id !== id)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
