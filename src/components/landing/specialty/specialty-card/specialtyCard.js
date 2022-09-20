import React from "react"
//import styles
import "./specialtyCard.css"

const SpecialtyCard = (props) =>{
    return(
        <div class="box">
            <div className="image-cont">
                <img class="image" src={props.image} alt=""/>
            </div>            
            <div class="content">
                <h3>{props.name}</h3>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

export default SpecialtyCard