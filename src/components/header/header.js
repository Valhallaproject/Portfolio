import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from "../../images/logoBlanc.png"
import "./header.css"

function Header(){

    return(
        <div className="header positionned" id="header"> 
                <div className="logoH"><img className="logoHeader" src={Logo}alt=""/></div>
                <div className="itemHeader">
                    <li><AnchorLink href="#home">Home</AnchorLink></li>
                    <li><AnchorLink href="#presentation">Présentation</AnchorLink></li>
                    <li><AnchorLink href="#portfolio">Portfolio</AnchorLink></li>
                </div>
        </div>
    )
};
export default Header