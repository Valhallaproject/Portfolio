import React from 'react';
import Header from "../../components/header/headerSite";
import Footer from '../../components/footer/footer';
import Carousel from 'react-bootstrap/Carousel'
//import Carousel, {CarouselItem} from "../carousel/carousel";
import "../styleSite/styleSite.css"
import Ornc from "./orinoco/orinoco.png"
import Img1 from "./orinoco/image1.png"
import Img2 from "./orinoco/image2.png"
import Img3 from "./orinoco/image3.png"
import Img4 from "./orinoco/image4.png"

function orinoco(){
    return(
        <div id="contenu">
            <Header/>
            <h1 className="titleSite">Orinoco</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Ornc}
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
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img4}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="textSite" id="textSite">
                <p className="pSite">
                    Réalisation du frontend pour le e-commerce Orinoco dans le cadre du projet 5 de la formation Développeur Web OpenClassrooms.
                </p>
                <p className="pSite">
                    Technologies utilisées : </p>
                    <p className="skillsSite">- Intégration des maquettes avec<span> HTML/CSS</span></p>
                    <p className="skillsSite">- Interaction avec le backend en <span> JavaScript</span></p>
                
                <div className="button">
                    <button className="link"><a className="linkSite" href="https://github.com/Valhallaproject/NicolasBictel_5_26052021" target="blank">Githuh</a></button>
                </div>
            </div>
            <Footer/>
        </div>
    )
};
export default orinoco