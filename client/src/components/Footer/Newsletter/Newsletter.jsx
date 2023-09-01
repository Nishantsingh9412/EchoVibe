import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";

const notify = () => toast("Subscribed to the List");

const Newsletter = () => {
    return (
    <div className="newsletter-section"> 
                <div className="newsletter-content">
                    <span className="small-text"> Newsletter </span>
                        <span className="big-text"> Signup for Latest updates and offers </span>
                        <div className="form">
                            <input type="text" name="" id="" placeholder="Email Address" />
                            <button onClick={notify}> Subscribe  </button>
                            <ToastContainer />
                        </div>
                        <div className="text">  Will be used in accordance with our Privacy Policy </div>
                        {/* <div className="social-icons">
                            <div className="icons">
                                <FaFacebookF size={14} />
                            </div>
                            <div className="icons">
                                <FaTwitter size={14} />
                            </div>
                            <div className="icons">
                                <FaInstagram size={14} />
                            </div>
                            <div className="icons">
                                <FaLinkedinIn size={14} />
                            </div>
                        </div> */}
                </div>
            </div>);
};

export default Newsletter;
