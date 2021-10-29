import React from 'react';
import bgHome from "../../images/bgHome.jpeg";
import Line from "../separations/separation"
import Logo from "../../images/logoBlanc.png"
import "./home.css"
import Presentation from '../presentation/presentation';

function home () {
    return(
        <>
        <div className="home" id="home">
            <img src={bgHome} alt="" className="bg"/>
            <div className="content">
                <div>
                    <Line/>
                    <Line/>
                </div>
                <img src={Logo} alt="Logo" className="logo"/>
                <h1>FULL STACK DEVELOPER</h1>
                <div className="lastLine">
                    <Line/>
                    <Line/>
                </div>
            </div>
            
        </div>
        <Presentation id="presentation"/>
        </>
    )
};
export default home