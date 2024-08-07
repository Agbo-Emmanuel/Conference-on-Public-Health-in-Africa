import React from "react";
import checkbox from "./img/Images/checkbox.jpg"




const Profile = (props)=>{
    return(
        <>
            <div className="Profile">
                <div className="profilecard">
                    <div className="profilecardimg">
                        <div className="personsimg">
                            <img src={props.img1} alt="" />
                        </div>
                        <div className="sideimg">
                            <img src={checkbox} alt="" />
                        </div>
                    </div>
                    <div className="profilecardtext">
                        <h1>Dr. Amadou-Sall</h1>
                        <span>Dr Amadou A Sall is the CEO of Institut Pasteur de Dakar in Senegal</span>
                        <p>Director of the WHO Collaborating Center for Arboviruses and Viral Hemorrhagic<br/>Fever. He has been chairman of the Global Outbreak Alert and Response Network<br/>and a member of the Coalition for Epidemic Preparedness and Innovation (CEPI)<br/>Scientific Advisory Board.</p>
                    </div>
                </div>
                <div className="profilecard">
                <div className="profilecardimg">
                        <div className="personsimg">
                            <img src={props.img2} alt="" />
                        </div>
                        <div className="sideimg">
                            <img src={checkbox} alt="" />
                        </div>
                    </div>
                    <div className="profilecardtext">
                        <h1>Dr. Amadou-Sall</h1>
                        <span>Dr Amadou A Sall is the CEO of Institut Pasteur de Dakar in Senegal</span>
                        <p>Director of the WHO Collaborating Center for Arboviruses and Viral Hemorrhagic<br/>Fever. He has been chairman of the Global Outbreak Alert and Response Network<br/>and a member of the Coalition for Epidemic Preparedness and Innovation (CEPI)<br/>Scientific Advisory Board.</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Profile