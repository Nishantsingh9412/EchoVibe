import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa";
import Payment from '../../assets/payments.png';


import React from "react";
import "./Footer.scss";
const Footer = () => { 
    return (
        <footer className="footer">
             <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Echovibe is not just a name, it's a symphony of sound waiting to be experienced. 
                    Our collection of headphones goes beyond delivering audio – it's about immersing yourself
                     in the music, feeling the rhythm pulse through you, and letting each note resonate deep within your soul. 
                     {/* With cutting-edge technology and precision engineering, Echovibe headphones offer an unparalleled auditory journey, 
                     where every beat, every melody, and every echo comes to life in vivid detail. Elevate your listening experience to
                      new heights with Echovibe, where sound becomes an immersive vibration of emotion */}
                      </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-items">
                        <FaLocationArrow />
                            <div className="text">
                               Kanpur - Uttar Pradesh India - 208010
                            </div>
                     </div>

                     <div className="c-items">
                        <FaMobileAlt />
                            <div className="text">
                                Phone : 011 225 4456
                            </div>
                     </div>

                     <div className="c-items">
                        <FaEnvelope />
                            <div className="text">
                                Email : stores@echoVibe.com
                            </div>
                     </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                            <span className="text">
                                Headphones
                            </span>
                            <span className="text">
                                Smart Watches
                            </span>
                            <span className="text">
                                Bluetooth Speakers
                            </span>
                            <span className="text">
                                Wireless Earbuds
                            </span>
                            <span className="text">
                                Home theatre
                            </span>
                            <span className="text">
                                Projectors
                            </span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <       span className="text">
                                Home 
                            </span>
                            <span className="text">
                               About
                            </span>
                            <span className="text">
                                Privacy Policy
                            </span>
                            <span className="text">
                               Returns
                            </span>
                            <span className="text">
                                Terms and Conditions
                            </span>
                            <span className="text">
                                Contact Us
                            </span>
                </div>
             </div>
                <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <div className="text">
                            EchoVibe 2023 CREATED BY EchoVibe PREMIUM E-COMMERCE
                            SOLUTIONS.
                        </div>
                        <img src={Payment} />
                    </div>
                </div>
        </footer>
    );

    
};

export default Footer;
