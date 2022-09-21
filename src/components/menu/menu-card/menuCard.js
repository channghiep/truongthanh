import React from "react"
import "../menu-card/menuCard.css"

const MenuCard = (props) => {
    return(
        <div className="menu-card">
            <h2>{props.mealTitle}</h2>
            {props.MealList.map((meal, index) => (
                <article className="menu-item" key={index}>
                    <div>
                        <h3 className="mains-name">{meal.name}</h3>
                        <h4 className="mains-price">$ {meal.price}</h4>
                    </div>
                    <p className="mains-description">{meal.description}</p>
                </article>
            ))}
        </div>
    )
}

export default MenuCard