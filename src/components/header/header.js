import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Container,  Navbar } from 'react-bootstrap';
import Logo from "../../images/logoBlanc.png"
import "./header.css"

function Header(){
   
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img className="logo" src={Logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#presentation">Présentation</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
export default Header

