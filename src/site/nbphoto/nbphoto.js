import React from 'react';
import Header from "../../components/header/headerSite";
import Footer from '../../components/footer/footer';
import Carousel from 'react-bootstrap/Carousel'
//import Carousel, {CarouselItem} from "../carousel/carousel";
import "../styleSite/styleSite.css"
import Nbp from "./nbp/NBP.JPG"
import Img1 from "./nbp/image1.png"
import Img2 from "./nbp/image2.png"
import Img3 from "./nbp/image3.png"
import Img4 from "./nbp/image4.png"

function nbphoto(){
    return(
        <div id="contenu">
            <Header/>
            <h1 className="titleSite">NB photographie</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Nbp}
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
                    Réalisation d'un protfolio pour un site de photographie.
                </p>
                <p className="pSite">
                    Technologies utilisées : </p>
                    <p className="skillsSite">- Réalisation de l'intégration en <span> HTML/CSS</span></p>
                    <p className="skillsSite">- Utilisation de <span> JavaScript</span> pour les animations</p>
                
                <div className="button">
                    <button className="link"><a className="linkSite" href="https://github.com/Valhallaproject/NBPhoto" target="blank">Githuh</a></button>
                    <button className="link"><a className="linkSite" href="https://valhallaproject.github.io/NBPhoto/" target="blank">Site</a></button>
                </div>
            </div>
            <Footer/>
        </div>
    )
};
export default nbphoto