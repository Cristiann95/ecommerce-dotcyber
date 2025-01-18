import { useState, useContext } from "react";
import CartContext from "../context/cartContext";
import { Button } from 'react-bootstrap';


function ItemCount({ detail }) {

    const [count, setCount] = useState(0)

    const { cart, setQuantity, addToCart } = useContext(CartContext)


    const handleAddToCart = () => {
        let find = cart.find(prod => prod.id == detail.id)

        if (find) {
            setQuantity(detail, count)
        } else {
            addToCart({ ...detail, quantity: count })
        }
        setCount(0)
    }

    const suma = () => {
        setCount(count + 1)
    }

    const resta = () => {
        (count > 0) ? setCount(count - 1) : setCount(0)
    }


    return (
        <div className="div-count">
            <button className="btn__count" onClick={resta} disabled={count < 1}>-</button>
            <p className="mb-0">{count}</p>
            <button className="btn__count" onClick={suma}>+</button>
            <Button onClick={handleAddToCart}>Añadir al carrito</Button>
        </div>
    )
}

export default ItemCount;