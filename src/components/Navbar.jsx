import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router';


function NavBar() {
    return (
        <Navbar expand="lg" sticky="top" data-bs-theme="dark" className='bg-body-tertiary'>
            <Container className='container-nav'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='menu' />
                <Navbar.Brand as={Link} className='titulo' to="/">DotCyber</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'category/smartphones'}>Smartphones</Nav.Link>
                        <Nav.Link as={Link} to={'category/laptops'}>Laptops</Nav.Link>
                        <Nav.Link as={Link} to={'category/tablets'}>Tablets</Nav.Link>
                        <Nav.Link as={Link} to={'category/mobile-accessories'}>Accesorios</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;