import React from "react"
import Feature from "./feature/feature"
import Promotion from "./promotion/promotion"
import Specialty from "./specialty/specialty"

const LandingPage = () => {
    return(
        <div className="landing-container secondary-background-color">
            <Feature/>
            <Promotion/>
            <h2 id="menu">Specialty</h2>
            <Specialty/>
        </div>
    )
}

export default LandingPage