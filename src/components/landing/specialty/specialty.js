import React from "react"
import Slider from "react-slick"
import "../../../../node_modules/slick-carousel/slick/slick.css"
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

//Import Component
import SpecialtyCard from "./specialty-card/specialtyCard";

//Import Data
import { specialList } from "../../../misc/data"
//Import Styles
import "./specialty.css"

const Specialty = () => {
    //Carousel setting
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        mobileFirst: true,
        responsive: [
            {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    };
    return(
        <div className="specialty-container">
            <div className="special_dishes">
            </div>
            <div class="box-container">
                <Slider {...settings}>
                {specialList.map((item)=>{
                    const {image, name, price} = item
                    return(
                        <SpecialtyCard
                            image={image}
                            name={name}
                            price={price}  
                        />    
                    )
                })}
                </Slider>     
            </div>        
        </div>
    )
}

export default Specialty