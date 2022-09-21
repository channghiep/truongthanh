import React from "react"
//import module
import Slider from "react-slick"
import "../../../../node_modules/react-slick/"
import "../../../../node_modules/slick-carousel/slick/slick.css"
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../promotion/promotion.css"

const Promotion = () => {
    //Carousel setting
    const settings = {
        dots: false,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1
        // dots: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      cssEase: "linear",
      arrows: false
    };

    return(
        <div className="promotion-container">
            <Slider {...settings}>
            <div>
              <h2>Open 11AM to 4AM everyday</h2>
            </div>
            <div>
              <h2>Uber, Doordash available</h2>
            </div>
            <div>
              <h2>Vegetarian options available</h2>
            </div>
          </Slider>
        </div>
    )
}

export default Promotion