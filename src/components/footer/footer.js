import React from "react"
import "../footer/footer.css"

const Footer = () => {
    return(
        <div className="footer-container" id="contact">
          <h2>Truong Thanh Vietnamese Restaurant</h2>
          <h3>2096 Kingsway, Vancouver, BC V5N 2T3</h3>
          <h1><a href="tel:604-876-9288">Call Us</a></h1>
          <ul>
            <li>Monday: <span>11am-2am</span></li>
            <li>Tuesday: <span>11am-2am</span></li>
            <li>Wednesday: <span>11am–2am</span></li>
            <li>Thursday: <span>11am–2am</span></li>
            <li>Friday: <span>11am–4am</span></li>
            <li>Saturday: <span>11am–4am</span></li>
            <li>Sunday: <span>11am–2am</span></li>
          </ul>
        </div>
    )
}
export default Footer