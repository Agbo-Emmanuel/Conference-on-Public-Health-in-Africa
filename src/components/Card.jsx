import React from "react";



const Card = (props)=>{
    return(
        <>
            <div className='section2progcard'>
                <div className="progcardimg">
                    <img src={props.img} alt="" />
                </div>
                <div className="progtext">
                    <h2>{props.Text}</h2>
                    <p>The inaugural Conference on Public Health in Africa (CPHIA 2021) will put a spotlight on emergency health response in Africa.</p>
                </div>
            </div>
        </>
    )
}




export default Card