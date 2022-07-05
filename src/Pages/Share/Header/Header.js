import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from '../../../image/logo/bicycle-warehouse.png'
const Header = () => {
    return (
        <div>
            <Navbar className='fs-3' collapseOnSelect expand="lg" bg="success" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img height="40px" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/inventory' >Inventory_Items</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/signup'>SignUp</Nav.Link>
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;