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
                        <a href="https://next.perkhero.com/merchant/truong-thanh-vietnamese-restaurant-%E9%95%B7%E5%9F%8E%E8%B6%8A%E5%8D%97%E9%A4%90%E5%BB%B3-a382?hide-merchant-info=false&landing=false&clear-landing=false&hide-progress=true&auto-confirm=false&category-control=true&require-email=true&greeting=Welcome">order to pick up now</a>
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