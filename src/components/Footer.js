import React from "react";
import '../style/Footer.css';
import { NavLink } from 'react-router-dom';
import FacebookLogo from './Photo/FacebookLogo.png';
import TwitterLogo from './Photo/TwitterLogo.png';
import VisaLogo from './Photo/VisaLogo.png';
import AmexLogo from './Photo/AmexLogo.png';
import MastercardLogo from './Photo/MastercardLogo.png';

const Footer = () => {
    return (
        <div className="Footer">
           <div className="FooterSocials">
                <a href="https://www.instagram.com/topsecretshirtsla/">
                    <img className="InstagramLogo" src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph-1200x1199.png" style={{
                        height:  "40px",
                        width:  "40px"
                    }}/>
                </a>
                <a href="https://www.facebook.com/Top-Secret-Shirts-Las-Angeles-102583755900082">
                    <img className="FacebookLogo" src={FacebookLogo} style={{
                        height:  "40px",
                        width:  "40px"
                    }}/>
                </a>
                <a href="https://twitter.com/TSShirtsLa">
                    <img className="TwitterLogo" src={TwitterLogo} style={{
                        height:  "40px",
                        width:  "40px"
                    }}/>
                </a>
           </div>
           <div className="FooterExtras">
                    <NavLink id='NavLink' to='/about'>About</NavLink>
                    <br></br>
                    <NavLink id='NavLink' to='/tos'>Terms of Service</NavLink>
                    <br></br>
                    <NavLink id='NavLink' to='/privacy_legal'>Privacy {'&'} Legal</NavLink>
           </div>
           <div className="FooterPayments">
                    <img className="VisaLogo" src={VisaLogo}/>
                    <img className="AmexLogo" src={AmexLogo}/>
                    <img className="MastercardLogo" src={MastercardLogo}/>
           </div>
        </div>
    )
}

export default Footer