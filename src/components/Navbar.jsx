import { Container, Nav, Navbar} from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router';


function NavBar() {
    return (
        <Navbar expand="lg" sticky="top" data-bs-theme="dark" className='bg-body-tertiary d-flex flex-column'>
            <p className='p-quotas'>3 y 6 cuotas sin interés</p>
            <Container className='container-nav'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='menu' />
                <Navbar.Brand as={Link} className='titulo' to="/">DotCyber</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto w-100 justify-content-end">
                        <Nav.Link as={Link} to={'category/smartphones'}>Celulares</Nav.Link>
                        <Nav.Link as={Link} to={'category/laptops'}>Computadoras</Nav.Link>
                        <Nav.Link as={Link} to={'category/tablets'}>Tablets</Nav.Link>
                        <Nav.Link as={Link} to={'category/accessories'}>Accesorios</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;