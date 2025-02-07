import { useContext, useEffect, useState } from "react";
import CartItems from "./CartItems";
import CartContext from "../context/cartContext";
import { getProducts } from "../firebase/dataBase";
import SliderCart from "./SliderCart";

function Cart() {
    const { cart } = useContext(CartContext)
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (cart.length === 0) {
        localStorage.removeItem('productos')

        getProducts(setSuggestions)

        return (
            <>
                <div className="w-50 pt-4 m-auto text-center empty-cart">
                    <h4>Tu carrito está vacío, agrega productos! </h4>
                    <img src="/carrito-de-compras.gif" alt="carrito de compras" />
                </div>
                <div className="cart-back">
                    <h3 className="pt-4 px-4" >Te puede interesar</h3>
                    <SliderCart suggestions={suggestions} />
                </div>
            </>
        )
    }

    return (
        <CartItems items={cart} />
    )
}

export default Cart