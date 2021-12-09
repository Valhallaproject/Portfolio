import React from 'react';
import Header from "../../components/header/headerSite";
import Footer from '../../components/footer/footer';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import "../styleSite/styleSite.css"
import ST from "./spatial/ST.png"
import Img1 from "./spatial/Img1.png"
import Img2 from "./spatial/Img2.png"
import Img3 from "./spatial/Img3.png"

function spatial(){
    return(
        <div id="contenu">
            <Header/>
            <h1 className="titleSite">Spatail</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ST}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img1}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img3}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="textSite" id="textSite">
                <p className="pSite">
                    Intégration d'une maquette via le site frontent mentor.
                </p>
                <p className="pSite">
                    Technologies utilisées : </p>
                    <p className="skillsSite">- Intégration réalisée avec <span> React.js CSS</span></p>
                
                <div className="button">
                    <button className="link"><a className="linkSite" href="https://github.com/Valhallaproject/spatial" target="blank">Githuh</a></button>
                    <button className="link"><a className="linkSite" href="https://spatial-travel.herokuapp.com/" target="blank">Site</a></button>
                </div>
            </div>
            <Footer/>
        </div>
    )
};
export default spatial
