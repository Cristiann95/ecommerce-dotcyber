import { useState, useContext, useRef } from 'react';
import { Container, Nav, Navbar, Form, Row, Col, Button } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link, useNavigate, useLocation } from 'react-router';
import ProductsContext from '../context/productsContext';


function NavBar() {
    const [inputValue, setInputValue] = useState('')
    const { getSearchValue } = useContext(ProductsContext)
    const navigate = useNavigate()
    const inputRef = useRef(null)
    const location = useLocation()
    
    const handleInputValue = (e) => {
        setInputValue(e.target.value)
        getSearchValue(inputValue)
    }

    const handleNavigate = () => {
        navigate({
            pathname: '/search',
            search: `?q=${inputValue}`
        })
    }

    const search = (e) => {
        e.preventDefault()
        handleNavigate()
    }

    return (
        <Navbar expand="lg" sticky="top" data-bs-theme="dark" className='bg-body-tertiary d-flex flex-column'>
            <p className='p-quotas'>3 y 6 cuotas sin interés</p>
            <Container className='container-nav'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='menu' />
                <Navbar.Brand as={Link} className='titulo' to="/">DotCyber</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-100 justify-content-end">
                        <Form>
                            <Row className='me-4'>
                                <Col className='p-0' xs="auto">
                                    <Form.Control
                                        id='input-search'
                                        type="text"
                                        ref={inputRef}
                                        placeholder="Buscar"
                                        className=" mr-sm-2"
                                        onKeyDown={handleInputValue}
                                        autoComplete='off'
                                    />
                                </Col>
                                <Col className='p-0' xs="auto">
                                    <Button className='btn-search' type="submit" onClick={search}><img src="/icons8-búsqueda-32.png" alt="Buscar" /></Button>
                                </Col>
                            </Row>
                        </Form>
                        <Nav.Link as={Link} to={'category/smartphones'}>Celulares</Nav.Link>
                        <Nav.Link as={Link} to={'category/laptops'}>Computadoras</Nav.Link>
                        <Nav.Link as={Link} to={'category/tablets'}>Tablets</Nav.Link>
                        <Nav.Link as={Link} to={'category/accessories'}>Accesorios</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar >
    )
}

export default NavBar;