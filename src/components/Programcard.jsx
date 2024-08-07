import React from "react";
import Card from "./Card"
import lecture from "./img/Images/healthimage.jpg";
import heailthexhibition from "./img/Images/heailthexhibition.jpg";
import heailthignite from "./img/Images/healthignite.jpg";
import forum from "./img/Images/forum.jpg";
import workshop from "./img/Images/workshop.jpg";



const Programcard = ()=>{
    return(
        <>
            <div className='section2programs'>
                <Card Text ="Lecture"
                    img ={lecture}
                />
                <Card Text ="Health Exhibition"
                    img ={heailthexhibition}
                />
                <Card Text ="Forum"
                    img ={forum}
                />
                <Card Text ="Workshop"
                    img ={workshop}
                />
                <Card Text ="Health Ignite"
                    img ={heailthignite}
                />
            </div>
        </>
    )
}


export default Programcard