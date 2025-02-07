import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router';

function ItemCart({ card }) {

    let title = (card.title).split(' ');
    let modifiedTitle = title.splice(0, 2).join(' ');

    return (
        <Col key={card.id} className='div-products-cart'>
            <Card className='card-cart'>
                <Card.Img variant="top" src={card.thumbnail} />
                <Card.Body className='card-content'>
                    <Card.Title className='title-cart'><p>{`${modifiedTitle} ...`}</p></Card.Title>
                    <Card.Text > <strong>$ {card.price.toLocaleString('es-ES')}</strong></Card.Text>
                    <Button variant="primary" className='button-detail' as={Link} to={`/item/${card.id}`}>Ver detalle</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ItemCart;