import React from "react";
import twitter_icon from "../images/Twittericon.png"
import fb_icon from "../images/Facebook Icon.png"
import insta_icon from "../images/Instagram Icon.png"
import linkedIn_icon from "../images/Linkedin Icon.png"
import GitHub_icon from "../images/GitHub Icon.png"
export default function Footer(){
    return(
        <div className="images">
            <img className="t" src={twitter_icon} alt="twitter_logo" />
            <img className="f" src={fb_icon} alt="fb_logo" /> 
            <img className="i" src={insta_icon} alt="insta_icon" />
            <img className="l" src={linkedIn_icon} alt="linkedIn_icon" />
            <img className="g" src={GitHub_icon} alt="GitHub_icon" />
        </div>
    );
    
}