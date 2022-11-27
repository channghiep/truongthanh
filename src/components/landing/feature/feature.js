import React from "react"
import banhhoi from "../../../assets/banhhoi4.png"
import "../feature/feature.css"
const Feature = () => {
    return(
        <div className="feature-container primary-background-color">
            <div className="content primary-color">
                <h3 className="glow">Tastes like Home</h3>
                <p className="glow">since 1993</p>
                {/* <p>We are committed to using fresh ingredients and meticulously preparing most of the dishes in-house to ensure your satisfaction</p>
                <a href="#" class="btn">order now</a> */}
                <div className="online-order">
                    <button>
                        order to pick up now
                    </button>
                </div>
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