import React from 'react';
import Header from "../../components/header/headerSite";
import Footer from '../../components/footer/footer';
import Carousel from 'react-bootstrap/Carousel'
//import Carousel, {CarouselItem} from "../carousel/carousel";
import "../styleSite/styleSite.css"
import Room from "./room/room.png"
import Img1 from "./room/image1.png"
import Img2 from "./room/image2.png"
import Img3 from "./room/image3.png"
import Img4 from "./room/image4.png"

function room(){
    return(
        <div id="contenu">
            <Header/>
            <h1 className="titleSite">Room</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Room}
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
                    Intégration réalisée à partir d'une maquette provenant du site Frontend mentor.
                </p>
                <p className="pSite">
                    Technologies utilisées : </p>
                    <p className="skillsSite">- Intégration en <span> HTML/CSS</span></p>
                    <p className="skillsSite">- Réalisation de l'animation en<span> JavaScript</span></p>
                
                <div className="button">
                    <button className="link"><a className="linkSite" href="https://github.com/Valhallaproject/room" target="blank">Githuh</a></button>
                    <button className="link"><a className="linkSite" href="https://valhallaproject.github.io/room/" target="blank">Site</a></button>  
                </div>
            </div>
            <Footer/>
        </div>
    )
};
export default room