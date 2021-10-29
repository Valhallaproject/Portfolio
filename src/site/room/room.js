import React from 'react';
import Header from "../../components/header/headerSite";
import Footer from '../../components/footer/footer';
import Separation from '../../components/separations/separation';
import Carousel, {CarouselItem} from "../carousel/carousel";
import LogoGroupomania from "../../images/logogroupomania.png";
import LogoOhmyfood from "../../images/logoohmyfood.png";
import LogoOrinoco from "../../images/logoorinoco.JPG";
import "../styleSite/styleSite.css"

function room(){
    return(
        <div id="contenu">
            <Header/>
            <h1 className="titleSite">Room</h1>
            <Carousel>
                <CarouselItem>Item 1</CarouselItem>
                <CarouselItem>Item 2</CarouselItem>
                <CarouselItem>Item 3</CarouselItem>
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
                    <button className="link"><a className="linkSite" href="https://github.com/Valhallaproject/NicolasBictel_6_06072021" target="blank">Githuh</a></button>
                </div>
            </div>
            <Separation/>
            <Separation/>
            <div className="otherSite">
                <img className="siteImg" src={LogoGroupomania} alt=""/>
                <img className="siteImg" src={LogoOhmyfood} alt=""/>
                <img className="siteImg" src={LogoOrinoco} alt=""/>
            </div>
            <Footer/>
        </div>
    )
};
export default room