import React from "react"
import "../footer/footer.css"

const Footer = () => {
    return(
        <div className="footer-container">
          <h2>Truong Thanh Vietnamese Restaurant</h2>
          <p>2096 Kingsway, Vancouver, BC V5N 2T3</p>
          <p>Phone:<a href="tel:604-876-9288"> Call Us</a></p>
          <ul>
            <li>Monday: 11a.m-2am </li>
            <li>Tuesday: 11am-2am</li>
            <li>Wednesday: 11a.m.–2a.m</li>
            <li>Thursday: 11a.m.–2a.m</li>
            <li>Friday: 11a.m.–4a.m.</li>
            <li>Saturday: 11a.m.–4a.m.</li>
            <li>Sunday: 11a.m.–2a.m.</li>
          </ul>
        </div>
    )
}
export default Footer