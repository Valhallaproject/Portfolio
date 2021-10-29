import React from 'react';
import Header from "../../components/header/headerSite";
import Footer from '../../components/footer/footer';
import Separation from '../../components/separations/separation';
import Carousel, {CarouselItem} from "../carousel/carousel";
import LogoGroupomania from "../../images/logogroupomania.png";
import LogoOhmyfood from "../../images/logoohmyfood.png";
import LogoOrinoco from "../../images/logoorinoco.JPG";
import "../styleSite/styleSite.css"

function groupomania(){
    return(
        <div id="contenu">
            <Header/>
            <h1 className="titleSite">Groupomania</h1>
            <Carousel>
                <CarouselItem>Item 1</CarouselItem>
                <CarouselItem>Item 2</CarouselItem>
                <CarouselItem>Item 3</CarouselItem>
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
export default groupomania