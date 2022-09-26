import React, {useState , useEffect, useRef} from "react"
import MenuCard from "./menu-card/menuCard"
import "./menu.css"
import  { AppertizerList, BeefSoupList, RicePlattersList, SpecialNoodleList, SpecialOrdersList, SpecialList, VietSubList, VermicelliList, FamilyDinnerList, VegetarianList, CoffeeList, DessertsList, SmoothiesList, BeverageList, BubbleTeaList } from "../../misc/data"

const Menu = () => {
    
    const [menuState, setMenuState] = useState(AppertizerList)
    const [highlight, setHighlight] = useState(true)
    const [mealTitle, setMealTitle] = useState("Appertizer")
    //Function to change menu
    const menuChangeOnClick = (value,event) =>{
        setMenuState(value)
        setHighlight(false)
        setMealTitle(event.target.innerHTML)
    }
   
    return(
        <div className="menu-container secondary-background-color" id="menu-container">
            <ul tabIndex="1" className="menu-selection">
                <li className={`${highlight ? "selected-menu" : ""}`}tabIndex="1" onClick={(event) => menuChangeOnClick(AppertizerList,event)}>Appertizers</li>
                <li tabIndex="1" onClick={(event) => menuChangeOnClick(BeefSoupList,event)}>Beef Noodle Soup</li>
                <li tabIndex="1" onClick={(event) => menuChangeOnClick(RicePlattersList,event)}>Rice Platters</li>
                <li tabIndex="1" onClick={(event) => menuChangeOnClick(SpecialNoodleList,event)}>Special Noodle Soup</li>
                <li tabIndex="1" onClick={(event) => menuChangeOnClick(VietSubList,event)}>Vietnamese Sub</li>
                <li tabIndex="1" onClick={(event) => menuChangeOnClick(VermicelliList,event)}>Vermicelli</li>
                <li tabIndex="1" onClick={(event) => menuChangeOnClick(FamilyDinnerList,event)}>Family Dinner</li>
                <li tabIndex="1" onClick={(event) => menuChangeOnClick(VegetarianList,event)}>Vegetarian</li>
                <li tabIndex="1" onClick={(event) => menuChangeOnClick(CoffeeList,event)}>Coffee</li>
                <li tabIndex="1" onClick={(event) => menuChangeOnClick(DessertsList,event)}>Desserts</li>
                <li tabIndex="1" onClick={(event) => menuChangeOnClick(BeverageList,event)}>Beverages</li>
                <li tabIndex="1" onClick={(event) => menuChangeOnClick(SmoothiesList,event)}>Fruit Smoothies</li>
                <li tabIndex="1" onClick={(event) => menuChangeOnClick(SpecialOrdersList,event)}>SPECIAL ORDERS</li>
                <li tabIndex="1" onClick={(event) => menuChangeOnClick(SpecialList,event)}>Everyday Special Combo</li>

            </ul>
            {/* <select className="menu-selection">
                <option onClick={() => menuChangeOnClick(AppertizerList)}>Appertizers</option>
                <option onClick={() => menuChangeOnClick(BeefSoupList)}>Beef Noodle Soup</option>
                <option onClick={() => menuChangeOnClick(RicePlattersList)}>Rice Platters</option>
                <option onClick={() => menuChangeOnClick(SpecialNoodleList)}>Special Noodle Soup</option>
                <option onClick={() => menuChangeOnClick(SpecialOrdersList)}>SPECIAL ORDERS</option>
                <option onClick={() => menuChangeOnClick(SpecialList)}>Everyday Special Combo</option>
                <option onClick={() => menuChangeOnClick(VietSubList)}>Vietnamese Sub</option>

            </select> */}
            <MenuCard MealList={menuState} mealTitle={mealTitle}/>
            {/* <MenuCard MealList={BeefSoupList} mealTitle={"Beef Noodle Soup"}/>
            <MenuCard MealList={RicePlattersList} mealTitle={"Rice Platters"}/>
            <MenuCard MealList={SpecialNoodleList} mealTitle={"Special Noodle Soup"}/>
            <MenuCard MealList={SpecialOrdersList} mealTitle={"SPECIAL ORDERS"}/>
            <MenuCard MealList={SpecialList} mealTitle={"Everyday Special Combo"} />
            <MenuCard MealList={VietSubList} mealTitle={"Vietnamese Sub"} /> */}
        </div>
    )
}

export default Menu
