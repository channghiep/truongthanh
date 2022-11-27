import React from "react"
//import styles
import "./specialtyCard.css"

const SpecialtyCard = (props) =>{
    return(
        <div className="box" key={props.index}>
            <div className="image-cont">
                <img className="image" src={props.image} alt=""/>
            </div>            
            <div className="content">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

export default SpecialtyCard