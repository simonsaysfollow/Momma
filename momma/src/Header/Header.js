import React from 'react';
import "./Header.css";
import { Navbar, Nav,Button } from 'react-bootstrap';
import cake from '../Images/bdaycake.png'

function Header() {
    return (

        <Navbar fixed={"top"} collapseOnSelect expand="lg"  variant="dark" className="bg-color" >
            <Navbar.Brand href="#home">
                <img
                    src={cake}
                    width="50"
                    height="30"
                    className="d-inline-block align-top "
                    alt="Mommas"
                />{' '}
                Mommas
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto ">
                    <Nav.Link className="order-link" href="#deets">About </Nav.Link>
                    <Nav.Link className="order-link" href="#memes"> Contact</Nav.Link>
                    <Button className="order-link order-btn" variant="outline-dark">Inquire</Button>
            
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}

export default Header;