import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Container,  Navbar } from 'react-bootstrap';

//import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from "../../images/logoBlanc.png"
//import Close from "../../images/icon-close.svg"
//import Hamburger from "../../images/icon-hamburger.svg"
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

/*<div className="header positionned" id="header"> 
<div className="logoH"><img className="logoHeader" src={Logo}alt=""/></div>

<input type="checkbox" id="menu-checkbox" className="menu-checkbox"/>
<label for="menu-checkbox" className="hamburger"><img  src={Hamburger} alt=""/></label>
<label for="menu-checkbox" className="close"><img  src={Close} alt=""/></label>


<div className="itemHeader">
    <li><AnchorLink className="item" href="#home">Home</AnchorLink></li>
    <li><AnchorLink href="#presentation">Présentation</AnchorLink></li>
    <li><AnchorLink href="#portfolio">Portfolio</AnchorLink></li>
</div>
</div>*/