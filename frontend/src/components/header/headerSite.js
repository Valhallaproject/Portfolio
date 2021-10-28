import React from 'react';
import backArrow from "../../images/backArrow.png"
import "./headerSite.css"

function HeaderSite(){

    return(
        <div className="headerSite " id="header"> 
                <div className="itemHeader">
                    <li className="liHeader"><a className="aHeader" href="/"><img src={backArrow} alt=""/></a></li>
                </div>
                <div></div>
        </div>
    )
};
export default HeaderSite