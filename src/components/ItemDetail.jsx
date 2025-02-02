import { useContext } from 'react'
import CartContext from '../context/cartContext'
import { Col, Button } from 'react-bootstrap'

function ItemDetail({ detail }) {

    const { cart, addToCart } = useContext(CartContext)

    let find = ''

    const handleAddToCart = () => {
        find = cart.find((prod) => prod.id == detail.id)

        if (!find) {
            addToCart({ ...detail, quantity: 1 })
            return
        }

        console.log('El producto ya se encuentra en el carrito')
    }

    return (
        <Col className='div-detail'>
            <section className='d-flex justify-content-around'>
                <img className='p-4' style={{ width: '400px', height: '400px' }} src={detail?.thumbnail} />
                <div className='detail-prices'>
                    <h3>{detail?.title}</h3>
                    <h3>${detail?.price.toLocaleString('es-ES')}</h3>
                    <div>
                        <p className='title-quotas'><b>¡Tus opciones de pago!</b></p>
                        <p className='quotas'><b>12</b> cuotas sin interés de ${(detail?.price / 12).toLocaleString('es-ES')}</p>
                        <p className='quotas'><b>6</b> cuotas sin interés de ${(detail?.price / 6).toLocaleString('es-ES')}</p>
                        <p className='quotas'><b>3</b> cuotas sin interés de ${(detail?.price / 3).toLocaleString('es-ES')}</p>
                        <img style={{ width: '200px' }} src="../../public/tarjetas-credito-logos.png" alt="Tarjetas de crédito" />
                    </div><hr />
                    <div>
                        <img src="../../public/icons8-camión-48 (1).png" alt="Camion-envío" />
                        <p className='p-sending'>Envíos gratis llevando más de un producto!</p> <br />
                        <img src="../../public/icons8-tienda-48.png" alt="Sucursal-tienda" />
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