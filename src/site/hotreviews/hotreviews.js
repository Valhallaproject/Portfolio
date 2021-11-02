import React from 'react';
import Header from "../../components/header/headerSite";
import Footer from '../../components/footer/footer';
import Carousel from 'react-bootstrap/Carousel'
//import Carousel, {CarouselItem} from "../carousel/carousel";
import "../styleSite/styleSite.css"
import Thr from "./piquante/piquante.png"
import Img1 from "./piquante/image1.png"
import Img2 from "./piquante/image2.png"

function hotreviews(){
    return(
        <div id="contenu">
            <Header/>
            <h1 className="titleSite">The Hot Reviews</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Thr}
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
               
            </Carousel>
            <div className="textSite" id="textSite">
                <p className="pSite">
                    Réalisation d'une API sécurisé pour le site The Hot Reviews dans le cadre du projet 6 de la formation Développeur Web OpenClassrooms.
                </p>
                <p className="pSite">
                    Technologies utilisées : </p>
                    <p className="skillsSite">- Réalisation d'un server<span> Node.js</span></p>
                    <p className="skillsSite">- Réalisation de l'API avec<span> Express.js</span></p>
                    <p className="skillsSite">- Réalisation de la base de données avec <span>MongoDB</span></p>
                
                <div className="button">
                    <button className="link"><a className="linkSite" href="https://github.com/Valhallaproject/NicolasBictel_6_06072021" target="blank">Githuh</a></button>
                </div>
            </div>
            <Footer/>
        </div>
    )
};
export default hotreviews