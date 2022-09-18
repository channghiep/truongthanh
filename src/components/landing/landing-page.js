import React from 'react'
import Feature from './feature/feature'
import Promotion from './promotion/promotion'

const LandingPage = () => {
    return(
        <div className='landing-container'>
            <Feature/>
            <Promotion/>
        </div>
    )
}

export default LandingPage