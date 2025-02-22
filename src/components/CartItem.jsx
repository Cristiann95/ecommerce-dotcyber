import { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import CartContext from "../context/cartContext";
import ItemCount from "./ItemCount";
import Toastify from 'toastify-js';

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
                background: "#bd7c42",
            },
        }).showToast();
    }

    return (
        <ListGroup.Item className="d-flex justify-content-start align-items-center gap-2">
            <img style={{ width: '72px', margin: '10px' }} src={item.thumbnail} alt={item.title} />
            <p className="m-0 w-75">{item.title} <br /> <span className="individualPrice">${(item.price * item.quantity).toLocaleString('es-ES')}</span></p>
            <ItemCount detail={item} />
            <button className="btn_trash" onClick={handleDeleteItem}>
                <img style={{ width: '25px' }} src="/trash-fill.svg" alt="Eliminar" />
            </button>
        </ListGroup.Item>
    )
}

export default CartItem