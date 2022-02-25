import React, {useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Orinoco from "../../images/orinoco.png";
import Groupo from "../../images/groupomania.png";
import Piquante from "../../images/piquante.png";
import Room from "../../images/room.png";
import OMF from "../../images/ohmyfood.png";
import ST from "../../images/spatial.png"
import NB from "../../images/NBP.JPG";
import BGP from "../../images/bgportfolio.jpeg";
import ArrowUp from "../../images/backArrow.png";
import "./portfolio.css";
import Footer from "../footer/footer";

function Portfolio(){
    const[background, setBackground] = useState({BGP})
    var list, index;
    const handleOver = (e) => {
        setBackground(e.target.getAttribute("value"));
        list=document.getElementsByClassName('itemPortfolio')
        for (index = 0; index < list.length; ++index) {
            list[index].setAttribute('style', 'opacity: 0.7', 'transition: 3s');
        }
    }
    const handleOut = () => {
        setBackground(BGP)
        list=document.getElementsByClassName('itemPortfolio')
        for (index = 0; index < list.length; ++index) {
            list[index].setAttribute('style', 'opacity: 1');
        }
    }
    return(
        <>
            <div className="portfolio" id="portfolio"  value="red" style={{backgroundImage: `url(${background})`}}>
                <div className="itemsPortfolio">
                    <a href="/groupomania" className="itemPortfolio" onMouseOver={handleOver} onMouseOut={handleOut} value={Groupo} >Groupomania</a>
                    <a href="/thehotreviews" className="itemPortfolio" onMouseOver={handleOver} onMouseOut={handleOut} value={Piquante}>The Hotreviews</a>
                    <a href="/orinoco" className="itemPortfolio" onMouseOver={handleOver} onMouseOut={handleOut} value={Orinoco}>Orinoco</a>
                    <a href="spatial" className="itemPortfolio" onMouseOver={handleOver} onMouseOut={handleOut} value={ST}>Spatial</a>
                    <a href="nbphotographie" className="itemPortfolio" onMouseOver={handleOver} onMouseOut={handleOut} value={NB}>NB Photographie</a>
                    <a href="ohmyfood" className="itemPortfolio" onMouseOver={handleOver} onMouseOut={handleOut} value={OMF}>ohmyfood</a>
                    <a href="room" className="itemPortfolio" onMouseOver={handleOver} onMouseOut={handleOut} value={Room}>Room</a>
                </div>
                <div className="arrow">
                <AnchorLink href="#home"><img className="arrowUp" src={ArrowUp} alt=""/></AnchorLink>
                </div>
            </div>
            <Footer/>
        </>
    )
};
export default Portfolio
