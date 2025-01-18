import { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import CartContext from "../context/cartContext";
import Toastify from 'toastify-js'

function CartItem({ item }) {

    const { deleteItem } = useContext(CartContext)

    const handleDeleteItem = () => {
        deleteItem(item)
        Toastify({
            text: "Producto eliminado",
            duration: 2000,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right,rgb(109, 92, 7),rgb(176, 181, 82))",
            },
          }).showToast();
    }

    let price = item.price

    return (
        <ListGroup.Item className="d-flex justify-content-start">
            <img style={{ width: '72px', margin: '10px' }} src={item.thumbnail} alt={item.title} />
            <p className="m-0 w-75">{item.title} <br /> ${price.toLocaleString('es-ES')}</p>
            <p className="m-0 p-3 m-auto fw-semibold ">{item.quantity}</p>
            <button className="btn_trash" onClick={handleDeleteItem}>
                <img style={{ width: '25px' }} src="./src/assets/trash-fill.svg" alt="Eliminar" />
            </button>
        </ListGroup.Item>
    )
}

export default CartItem