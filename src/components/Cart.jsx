import { useContext, useEffect, useState } from "react";
import CartItems from "./CartItems";
import SliderImages from "./SliderImages";
import CartContext from "../context/cartContext";
import { getProducts } from "../firebase/dataBase";

function Cart() {
    const { cart } = useContext(CartContext)
    const [ suggestions, setSuggestions ] = useState([])

    
    if (cart.length === 0) {
        localStorage.removeItem('productos')
        
        useEffect(() => {
           getProducts(setSuggestions)
        }, [])

        return (
            <>
                <div className="w-50 mt-4 m-auto text-center" style={{ minHeight: "60vh" }}>
                    <h4>Tu carrito está vacío </h4>
                    <img src="/carrito-de-compras.gif" alt="carrito de compras" />
                </div>
                <SliderImages suggestions={suggestions} />
            </>
        )
    }

    return (
        <CartItems items={cart} />
    )
}

export default Cart