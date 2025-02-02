import { useState, useContext, useEffect } from "react";
import CartContext from "../context/cartContext";


function ItemCount({ detail }) {

    const { num, addToCountContext, quantity } = useContext(CartContext)
    // const [count, setCount] = useState(1)

    // useEffect(() => {
    //     setPrice((detail.price * detail.quantity).toLocaleString('es-ES'))
    // }, [count])

    const suma = () => {
        // setCount(count + 1)
        addToCountContext(num + 1)
        quantity(detail.id, detail.quantity + 1)
    }

    const resta = () => {
        // setCount(count - 1)
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