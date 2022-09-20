import React, { useState } from "react"
import "./navigation.css"

const Navigation = () => {
    const [isActivated, setActive] = useState(false);

    //This will toggle burger button onClick
    const activateBurger = () => {
        setActive(!isActivated)
    }
    return(
        <div className="nav-wrapper">
            <div className="nav-container">
                <div className="nav-logo">
                    <a href="#">Trường Thành</a>
                    <p>Vietnamese Restaurant</p>
                </div>
                <div className="nav-bar">
                    <div className="burger-button" onClick={activateBurger}>
                            <div className={`burger-line ${isActivated ? "burger-active-top" : "burger-inactive"}`} ></div>
                            <div className={`burger-line ${isActivated ? "burger-active-bottom" : "burger-inactive"}`}></div>
                    </div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    
                </div>
                
            </div>
            <ul className={`nav-ul ${isActivated ? "nav-ul-opened" : "nav-ul-closed"}`}>
                        <li onClick={activateBurger}><a href="#home">Home</a></li>
                        <li onClick={activateBurger}><a href="#menu">Menu</a></li>
                        <li onClick={activateBurger}><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}
export default Navigation