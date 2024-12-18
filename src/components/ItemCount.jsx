import {useState} from "react";

function ItemCount() {
    const [count, setCount] = useState(0)
    
    const suma = () => {
        setCount(count + 1)
    }
    const resta = () => {
        (count > 0) ? setCount(count - 1) : setCount(0)
    }

    return (
        <div className="div-count">
            <p>{count}</p>
            <button onClick={suma}>+</button>
            <button onClick={resta}>-</button>
        </div>
    )
}

export default ItemCount;