import React from 'react'

import Twitter from "../../images/twitter.png"
import Mail from "../../images/mail.png"
import Linkedin from "../../images/linkedin.png"
import Github from "../../images/github.png"
import "./contact.css"

function contact(){
    return(
        <div className="contact">
            <a href="https://twitter.com/NBictel" target="blank" className="iconContact"><img className="iconContactImg1" src={Twitter} alt=""/></a>
            <a href="https://github.com/Valhallaproject" target="blank" className="iconContact"><img className="iconContactImg" src={Github} alt=""/></a>
            <a href="https://www.linkedin.com/feed/" target="blank" className="iconContact"><img className="iconContactImg1" src={Linkedin} alt=""/></a>
            <a href="https://twitter.com/NBictel" target="blank" className="iconContact"><img className="iconContactImg" src={Mail} alt=""/></a>
        </div>
    )
};
export default contact