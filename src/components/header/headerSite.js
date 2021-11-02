import React from 'react';
import backArrow from "../../images/backArrow.png"
import Logo from "../../images/logoBlanc.png"
import "./headerSite.css"

function HeaderSite(){

    return(
        <div className="headerSite " id="header"> 
                <div className="itemHeader">
                    <li className="liHeader"><a className="aHeader" href="/"><img src={backArrow} alt=""/></a></li>
                </div>
                <div className="logoHSite"><img className="logoHeaderSite" src={Logo}alt=""/></div>
        </div>
    )
};
export default HeaderSite