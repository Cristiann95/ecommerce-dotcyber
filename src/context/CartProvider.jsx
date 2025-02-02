import { useEffect, useState } from "react"
import CartContext from "./cartContext";

function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('productos')
        return storedCart ?
            JSON.parse(storedCart) : []
    })

    const [num, setNum] = useState(1)

    useEffect(() => {
        localStorage.setItem('productos', JSON.stringify(cart))
    }, [cart, num])


    const addToCart = (prod) => {
        setCart([...cart, prod])
    }

    const addToCountContext = (count) => {
        setNum(count)
    }

    const quantity = (idem, number) => {
        cart.map(prod => {
            if (prod.id == idem) {
                prod.quantity = number
            }
        })
    }

    const deleteItem = (item) => {
        let index = cart.indexOf(item)
        let newCart = [...cart]
        newCart.splice(index, 1)
        setCart(newCart)
        setNum(0)
    }

    const numberCart = () => {
        let number = cart.length
        return number
    }

    const getTotal = () => {
        let prices = cart.map(prod => prod.quantity * prod.price)
        let total = prices.reduce((acc, current) => acc + current, 0)
        let formattedPrice = total.toLocaleString('es-ES')
        return formattedPrice
    }

    const emptyCart = () => setCart([])


    return (
        <CartContext.Provider value={{ cart, setCart, num, quantity, deleteItem, addToCountContext, numberCart, addToCart, getTotal, emptyCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;