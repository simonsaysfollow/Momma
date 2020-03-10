import React from 'react';
import "./Header.css";
import { Navbar, Nav } from 'react-bootstrap';
import rocket from '../Images/rocketPlaceHolder.png'

function Header() {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    src={rocket}
                    width="50"
                    height="30"
                    className="d-inline-block align-top "
                    alt="Mommas"
                />{' '}
                Mommas
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#deets">About </Nav.Link>
                    <Nav.Link href="#memes"> Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}

export default Header;