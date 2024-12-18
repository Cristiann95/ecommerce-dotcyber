import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router'

function Item({ card }) {
    return (
        <Col key={card.id} className='div-col'>
            <Card className='card'>
                <Card.Img variant="top" src={card.thumbnail} />
                <Card.Body className='card-content'>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                        {card.description}
                    </Card.Text>
                    <Card.Text>
                    Precio: usd {card.price}
                    </Card.Text>
                    <Button variant="primary" className='button-detail' as={Link} to={`/item/${card.id}`}>Ver detalle</Button>
                </Card.Body>
            </Card>
        </Col>
    )

};

export default Item;