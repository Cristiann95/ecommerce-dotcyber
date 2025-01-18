import ItemCount from './ItemCount';
import { Col } from 'react-bootstrap';

function ItemDetail({ detail }) {

    return (
        <Col className='div-detail text-center' md={6} lg={6}>
            <h2>{detail?.title}</h2>
            <img style={{ width: '300px' }} src={detail?.thumbnail} />
            <p>{detail?.description}</p>
            <p><b>Medidas:</b> {detail?.measures}</p>
            <p><b>Peso:</b> {detail?.weight}</p>
            <p><b>Orígen:</b> {detail?.origin}</p>
            <ItemCount detail={detail} />
        </Col>
    )
}

export default ItemDetail;