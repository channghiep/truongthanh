import React from "react"
import banhhoi from "../../../assets/banhhoi4.png"
import "../feature/feature.css"
const Feature = () => {
    return(
        <div className="feature-container">
            <div className="content">
                <h3>Tastes like Home</h3>
                {/* <p>Proudly family-owned and operated restaurant, we are pleased to offer you a delicious dining experience </p>
                <p>We are committed to using fresh ingredients and meticulously preparing most of the dishes in-house to ensure your satisfaction</p>
                <a href="#" class="btn">order now</a> */}
            </div>
            <div className="image">
                {/* <div className="image-rotate"> */}
                    <img src={banhhoi}/>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Feature