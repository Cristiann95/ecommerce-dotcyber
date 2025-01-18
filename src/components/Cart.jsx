import CartItems from "./CartItems";
import { useContext } from "react";
import CartContext from "../context/cartContext";

function Cart() {
    const { cart, getTotal } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="w-50 mt-4 m-auto text-center">
                <h4>Tu carrito está vacío </h4>
                <img src="./src/public/carrito-de-compras.gif" alt="carrito de compras" />
            </div>
        )
    }

    return (
            <CartItems items={cart} total={getTotal} />
    )
}

export default Cart