import React from "react";
import facebook from "./img/facebook.png";
// import twitter from "./img/twitter.png";
import twitter from "./img/twittersign.png"; 
import africa from "./img/africacdc.jpg";


const Header = ()=>{
    return(
        <>
            <div className="Header">
                <div className="headerup">
                    <div className="headerupicon">
                        <div className="facebookicon">
                            <img src={facebook} alt="" />
                        </div>
                        <div className="twitericon">
                            <img src={twitter} alt="" />
                        </div>
                        <nav>English</nav>
                        <nav>My page</nav>
                        <nav>Logout</nav>
                    </div>
                    
                </div>
                <div className="headerdown">
                    <div className="headerdownlogo">
                        <img src={africa} alt=""/>
                    </div>
                    <div className="headerdowntext">
                        <nav>About</nav>
                        <nav>Program</nav>
                        <nav>Join</nav>
                        <nav>Sponsor</nav>
                        <nav>News</nav>
                    </div>
                    <button>ACD campaign</button>
                </div>
            </div>
        </>
    )
}

export default Header