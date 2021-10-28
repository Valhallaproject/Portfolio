import "./presentation.css"
import Header from "../header/header"
import Portfolio from "../portfolio/portfolio"
import Profil from "../../images/profil.jpeg"
import Contact from "../contact/contact"

function presentation(){
    return(
        <div className="presentation" id="presentation">
            <Header/>
            <div className="contentPresent">
                <div className="skills">
                    <h2>Nicolas BICTEL</h2>
                    <h2>Développeur Full Stack Freelance</h2>
                    <p className="textPresentation">Je vous accompagne dans la réalisation de vos projets web</p>
                    <p className="textSkills">De façon plus précise :</p>
                    <p className="textSkills"> - Concevoir, manipuler et interroger des bases de données <span>MySql MongoDb</span><br/>
                                               - Concevoir le back-end et les API  <span>NodeJS Express</span><br/>
                                               - Concevoir le front-end et optimiser les assets <span>React.js HTML/CSS SASS JS</span></p>
                </div>
                <div className="photo">
                    <img src={Profil} className="profil" alt=""/>
                </div>
                <Contact/>
            </div>
            <Portfolio/>
            
            
        </div>
        
        
    )
};
export default presentation