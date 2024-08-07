import React from 'react';
import Programcard from "./Programcard";
import Profile from "./Profile"
import firstman from "./img/Images/firstman.jpg"
import secondman from "./img/Images/secondman.jpg"
import thirdman from "./img/Images/thirdman.jpg"
import firstwoman from "./img/Images/firstwoman.jpg"
import secondwoman from "./img/Images/secondwoman.jpg"
import thirdwoman from "./img/Images/thirdwoman.jpg"
import who from "./img/Images/who.png"
import Blogo from "./img/Images/Blogo.png"
import cad from "./img/Images/cad.png"
import microsoft from "./img/Images/microsoft.png"
import bbc from "./img/Images/bbc.png"
import creative from "./img/Images/creative.png"
import hamburger from "./img/hamburger.png";






const Sections = ()=> {
    return(
        <>
            <div className="Sections">
                <div className='section1'>
                    <div className="hamburger">
                        <img src={hamburger} alt="" />
                    </div>
                    <div className='section1content'>
                        <h1><span>"Hello! Health lovers"</span><br/>Int'l Conference on Public<br/>Health in Africa (CPHIA2021)</h1>
                        <div className='section1contentp'>
                            <p>The inaugural Conference on Public Health in Africa (CPHIA 2021) will put a spotlight on<br/>emergency health response in Africa and allow participants from around the world to share and learn about progress made, best practices in public health interventions and the latest in innovative research.</p>
                        </div>
                        <div className='section1contentdate'>
                            <h1>2022.5.22 ~ 2022.5.22</h1>
                            <p>@National museum Lagos, Nigeria.</p>
                        </div>
                    </div>
                </div>

                <div className="section2">
                    <h1>Main Program</h1>
                    <div className='line'></div>
                    <Programcard/>
                    <button><h3>SEE THE WHOLE PROGRAM</h3></button>    
                </div>

                <div className="section3">
                    <h1>Featured speakers</h1>
                    <div className='line'></div>
                    <div className="section3content">
                        <Profile img1 ={firstman}
                                img2 ={secondman}
                        />
                        <Profile img1 ={firstwoman}
                                img2 ={thirdman}
                        />
                        <Profile img1 ={secondwoman}
                                img2 ={thirdwoman}
                        />
                    </div>
                </div>

                <div className='section4'>
                    <h1>Partner</h1>
                    <div className='line'></div>
                    <div className='section4logos'>
                        <div className='who'>
                            <img src={who} alt="" />
                        </div>
                        <div className='Blogo'>
                            <img src={Blogo} alt="" />
                        </div>
                        <div className='cd'>
                            <img src={cad} alt="" />
                        </div>
                        <div className='microsoft'>
                            <img src={microsoft} alt="" />
                        </div>
                        <div className='bbc'>
                            <img src={bbc} alt="" />
                        </div>
                    </div>
                </div>

                <div className='section5'>
                    <div className='section5img'>
                        <img src={creative} alt="" />
                    </div>
                    <div className='section5text'>
                        <p>2015 © Agbo Emmanuel .F. for Africa some rights reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Sections