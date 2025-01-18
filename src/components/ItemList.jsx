import {Container, Row} from 'react-bootstrap';
import Item from './Item';

function ItemList({ cards }) {
    return (
        <Container>
            <Row xs={1} md={2} lg={3} xxl={4}>
                {cards.map(card => (
                    <Item card={card} key={card.id} />)
                )}
            </Row>
        </Container>
    )
};

export default ItemList;