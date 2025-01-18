import CartContext from "./cartContext";
import { useState } from "react"

function CartProvider({ children }) {

    const [cart, setCart] = useState([])

    const addToCart = (prod) => {
        setCart([...cart, prod])
    }

    const setQuantity = (detail, count) => {
        setCart(cart.map(prod => {
            if (prod.id == detail.id) {
                return { ...prod, quantity: prod.quantity + count }
            }
            return prod
        }))
    }

    const getQuantities = () => {
        const quantities = cart.map(prod => prod.quantity)
        const quantity = quantities.reduce((acc, current) => acc + current, 0)
        return quantity
    }

    
    const deleteItem = (item) => {
        let index = cart.indexOf(item)
        let newCart = [...cart]
        newCart.splice(index, 1)
        setCart(newCart)
    }

    const getTotal = () => {
        let prices = cart.map(prod => prod.quantity * prod.price)
        let total = prices.reduce((acc, current) => acc + current, 0)
        let formattedPrice = total.toLocaleString('es-ES')
        return formattedPrice
    }

    const emptyCart = () => setCart([])


    return (
        <CartContext.Provider value={{ cart, setQuantity, deleteItem, getQuantities, addToCart, getTotal, emptyCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;