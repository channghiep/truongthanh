import React, {useState , useEffect} from "react"
import MenuCard from "./menu-card/menuCard"
import "./menu.css"
import  { AppertizerList, BeefSoupList, RicePlattersList, SpecialNoodleList, SpecialOrdersList, SpecialList, VietSubList } from "../../misc/data"

const Menu = () => {
    
    const [menuState, setMenuState] = useState(AppertizerList)
    // const [selected, setSelected] = use
    //Function to change menu
    const menuChangeOnClick = (value) =>{
        setMenuState(value)
    }
    return(
        <div className="menu-container">
            <ul tabIndex="1" className="menu-selection">
                <li tabIndex="1" onClick={() => menuChangeOnClick(AppertizerList)}><h3>Appertizers</h3></li>
                <li tabIndex="1" onClick={() => menuChangeOnClick(BeefSoupList)}><h3>Beef Noodle Soup</h3></li>
                <li tabIndex="1" onClick={() => menuChangeOnClick(RicePlattersList)}><h3>Rice Platters</h3></li>
                <li tabIndex="1" onClick={() => menuChangeOnClick(SpecialNoodleList)}><h3>Special Noodle Soup</h3></li>
                <li tabIndex="1" onClick={() => menuChangeOnClick(SpecialOrdersList)}><h3>SPECIAL ORDERS</h3></li>
                <li tabIndex="1" onClick={() => menuChangeOnClick(SpecialList)}><h3>Everyday Special Combo</h3></li>
                <li tabIndex="1" onClick={() => menuChangeOnClick(VietSubList)}><h3>Vietnamese Sub</h3></li>

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
            <MenuCard MealList={menuState} mealTitle={"Appertizers"}/>
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