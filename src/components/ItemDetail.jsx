import { useContext } from 'react'
import CartContext from '../context/cartContext'
import { Col, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ItemDetail({ detail }) {
    
    const { cart, addToCart } = useContext(CartContext)
    const MySwal = withReactContent(Swal)

    let find = ''

    const handleAddToCart = () => {
        find = cart.find((prod) => prod.id == detail.id)

        if (!find) {
            addToCart({ ...detail, quantity: 1 })
            return
        }

        MySwal.fire({
            position: "top-end",
            icon: "success",
            title: 'El producto ya se encuentra en el carrito',
            showConfirmButton: false,
            timer: 1500
          });
    }

    return (
        <Col className='div-detail'>
            <section className='section-detail d-flex justify-content-around'>
                <img className='img-detail p-4' src={detail?.thumbnail} />
                <div className='detail-prices'>
                    <h3>{detail?.title}</h3>
                    <h3>${detail?.price.toLocaleString('es-ES')}</h3>
                    <div>
                        <p className='title-quotas'><b>¡Tus opciones de pago!</b></p>
                        <p className='quotas'><b>12</b> cuotas de ${((detail?.price + (detail?.price * 20 / 100)) / 12).toLocaleString('es-ES')}</p>
                        <p className='quotas'><b>6</b> cuotas sin interés de ${(detail?.price / 6).toLocaleString('es-ES')}</p>
                        <p className='quotas'><b>3</b> cuotas sin interés de ${(detail?.price / 3).toLocaleString('es-ES')}</p>
                        <img style={{ width: '200px' }} src="/tarjetas-credito-logos.png" alt="Tarjetas de crédito" />
                    </div><hr />
                    <div>
                        <img src="/icons8-camión-48 (1).png" alt="Camion-envío" />
                        <p className='p-sending'>Envíos gratis llevando más de un producto!</p> <br />
                        <img src="/icons8-tienda-48.png" alt="Sucursal-tienda" />
                        <p className='p-sending'>Retirá <span style={{ color: 'green' }}>GRATIS</span> en sucursal!</p>
                    </div>
                    <Button className='btn-addToCart' onClick={handleAddToCart}>Añadir al carrito</Button>
                </div>
            </section>
            <div className='w-100 px-4 pb-4' style={{background:'rgb(228, 228, 228)'}}>
                <hr />
                <h3>Descripción</h3>
                <hr />
                <p>{detail?.description}</p>
                <p><b>Medidas:</b> {detail?.measures}</p>
                <p><b>Peso:</b> {detail?.weight}</p>
                <p><b>Orígen:</b> {detail?.origin}</p>
            </div>
        </Col>
    )
}

export default ItemDetail;