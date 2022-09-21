import React, { useState } from "react"
import "./navigation.css"
// Import library
import {Link} from "react-scroll"

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
                        <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
                        <li><Link to="menu" spy={true} smooth={true}>Menu</Link></li>
                        <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
                    </ul>
                    
                </div>
                
            </div>
            <ul className={`nav-ul ${isActivated ? "nav-ul-opened" : "nav-ul-closed"}`}>
                        <li><Link onClick={activateBurger} activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
                        <li><Link onClick={activateBurger} to="menu" spy={true} smooth={true}>Menu</Link></li>
                        <li><Link onClick={activateBurger} to="contact" spy={true} smooth={true}>Contact</Link></li>
            </ul>
        </div>
    )
}
export default Navigation