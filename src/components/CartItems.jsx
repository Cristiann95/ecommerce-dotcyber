import { useContext } from "react"
import CartContext from "../context/cartContext"
import { ListGroup, Row, Col, Container, Button } from "react-bootstrap"
import CartItem from "./CartItem"
import { Link } from "react-router"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

function CartItems({ items }) {
    const { getTotal, emptyCart } = useContext(CartContext)


    const deleteQuestion = () => {
        MySwal.fire({
            title: "Seguro que quieres eliminar todos los productos del carrito?",
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
            customClass: {
                confirmButton: 'confirmButton_delete'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                emptyCart()
            }
        });
    }


    return (
        <Container className="mt-6 col-lg-6 col-md-8 col-sm-12">
            <Row>
                <Col className="d-flex flex-column">
                    <ListGroup>
                        <Col className="d-flex justify-content-between px-4">
                            <h4>Producto</h4>
                            <h4>Cantidad</h4>
                        </Col>
                        {items.map(item => (
                            <CartItem item={item} key={item.id} />
                        ))}
                    </ListGroup>
                    <Col className="d-flex justify-content-between m-2">
                        <p className="p-2 m-0"><strong>Total: ${getTotal()}</strong></p>
                        <Button className="btn-delete-cart" onClick={deleteQuestion}>Eliminar productos</Button>
                    </Col>
                    <Button as={Link} to={'/checkout'} className="w-100 m-auto mb-3">Finalizar compra</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CartItems