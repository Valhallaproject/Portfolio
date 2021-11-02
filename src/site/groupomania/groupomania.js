import React from 'react';
import Header from "../../components/header/headerSite";
import Footer from '../../components/footer/footer';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import "../styleSite/styleSite.css"
import Grp from "./groupomania/groupomania.png"
import Img1 from "./groupomania/image1.png"
import Img2 from "./groupomania/image2.png"
import Img3 from "./groupomania/image3.png"

function groupomania(){
    return(
        <div id="contenu">
            <Header/>
            <h1 className="titleSite">Groupomania</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Grp}
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
                    Réalisation d'un réseau social d'entreprise dans le cadre du projet 7 de la formation Développeur Web OpenClassrooms.
                </p>
                <p className="pSite">
                    Technologies utilisées : </p>
                    <p className="skillsSite">- Réalisation du frontend avec<span> React.js CSS</span></p>
                    <p className="skillsSite">- Réalisation d'une API avec<span> Express.js</span></p>
                    <p className="skillsSite">- Réalisation d'un server avec<span> Node.js</span></p>
                    <p className="skillsSite">- Réalisation de la base de données avec <span>MySql</span></p>
                
                <div className="button">
                    <button className="link"><a className="linkSite" href="https://github.com/Valhallaproject/NicolasBictel_7_02082021" target="blank">Githuh</a></button>
                </div>
            </div>
            <Footer/>
        </div>
    )
};
export default groupomania


           