import React from 'react';
import Header from "../../components/header/headerSite";
import Footer from '../../components/footer/footer';
import Carousel from 'react-bootstrap/Carousel'
//import Carousel, {CarouselItem} from "../carousel/carousel";
import "../styleSite/styleSite.css"
import Omf from "./ohmyfood/ohmyfood.png"
import Img1 from "./ohmyfood/image1.png"
import Img2 from "./ohmyfood/image2.png"
import Img3 from "./ohmyfood/image3.png"
import Img4 from "./ohmyfood/image4.png"

function ohmyfood(){
    return(
        <div id="contenu">
            <Header/>
            <h1 className="titleSite">OhMyFood</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Omf}
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
                    intégration d'une maquette pour l'application OhMyFood dans le cadre du projet 3 de la formation Développeur Web OpenClassrooms.
                </p>
                <p className="pSite">
                    Technologies utilisées : </p>
                    <p className="skillsSite">- Intégration de la maquette avec <span> HTML / SASS</span></p>
                    
                
                <div className="button">
                    <button className="link"><a className="linkSite" href="https://github.com/Valhallaproject/NicolasBictel_3_06052021" target="blank">Githuh</a></button>
                    <button className="link"><a className="linkSite" href="https://valhallaproject.github.io/NicolasBictel_3_06052021/" target="blank">Site</a></button>

                </div>
            </div>
            <Footer/>
        </div>
    )
};
export default ohmyfood