import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>EchoVibe</h1>
                    <p>
                    Echovibe is not just a name, it's a symphony of sound waiting to be experienced. 
                    
                    </p>
                    <div className="ctas">
                        {/* <div className="banner-cta">Read More</div> */}
                        <div className="banner-cta v2" onClick={() => {
                            window.scrollTo(0,950);
                            // window.scrollTo(0,600);
                        }}>Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;