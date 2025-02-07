import { useContext } from "react";
import CartContext from "../context/cartContext";


function ItemCount({ detail }) {

    const { num, addToCountContext, quantity } = useContext(CartContext)

    const suma = () => {
        addToCountContext(num + 1)
        quantity(detail.id, detail.quantity + 1)
    }

    const resta = () => {
        addToCountContext(num - 1)
        quantity(detail.id, detail.quantity - 1)
    }

    return (
        <div className="div-count">
            <button className="btn__count" onClick={resta} disabled={detail.quantity < 2}>-</button>
            <p className="mb-0">{detail.quantity}</p>
            <button className="btn__count" onClick={suma}>+</button>
        </div>
    )
}

export default ItemCount;