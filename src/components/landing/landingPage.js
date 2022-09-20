import React from "react"
import Feature from "./feature/feature"
import Promotion from "./promotion/promotion"
import Specialty from "./specialty/specialty"

const LandingPage = () => {
    return(
        <div className="landing-container">
            <Feature/>
            <Promotion/>
            <h2>Specialty</h2>
            <Specialty/>
        </div>
    )
}

export default LandingPage