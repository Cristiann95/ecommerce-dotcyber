import {Button, Card, Col} from 'react-bootstrap';
import { Link } from 'react-router'

function Item({ card }) {
    let price = card.price

    return (
        <Col key={card.id} className='div-col'>
            <Card className='card'>
                <Card.Img variant="top" src={card.thumbnail} />
                <Card.Body className='card-content'>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                      <strong>$ {price.toLocaleString('es-ES')}</strong>
                    </Card.Text>
                    <Button variant="primary" className='button-detail' as={Link} to={`/item/${card.id}`}>Ver detalle</Button>
                </Card.Body>
            </Card>
        </Col>
    )

};

export default Item;