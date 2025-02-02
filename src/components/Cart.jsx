import { useContext, useEffect } from "react";
import CartItems from "./CartItems";
import CartContext from "../context/cartContext";

function Cart() {
    const { cart } = useContext(CartContext)

    if (cart.length === 0) {
        localStorage.removeItem('productos')
        return (
            <div className="w-50 mt-4 m-auto text-center">
                <h4>Tu carrito está vacío </h4>
                <img src="/carrito-de-compras.gif" alt="carrito de compras" />
            </div>
        )
    }

    return (
        <CartItems items={cart} />
    )
}

export default Cart