import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router';

function Item({ card }) {

    return (
        <Col key={card.id} className='div-col'>
            <Card className='card' as={Link} to={`/item/${card.id}`}>
                <Card.Img variant="top" src={card.thumbnail} />
                <Card.Body className='card-content'>
                    <Card.Title className='title-card'><p>{card.title}</p></Card.Title>
                    <Card.Text > <strong>$ {card.price.toLocaleString('es-ES')}</strong></Card.Text>
                    <Card.Text className='quotas-list'>3 cuotas de ${(card.price / 3).toLocaleString('es-ES')}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )

};

export default Item;