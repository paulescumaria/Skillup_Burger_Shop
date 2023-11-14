import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "C:/Users/Ale/Desktop/webdevbasics/finalProject/Skillup_Burger_Shop/src/assets/burger1.png"
import burger2 from "C:/Users/Ale/Desktop/webdevbasics/finalProject/Skillup_Burger_Shop/src/assets/burger2.png"
import burger3 from "C:/Users/Ale/Desktop/webdevbasics/finalProject/Skillup_Burger_Shop/src/assets/burger3.png"
import "C:/Users/Ale/Desktop/webdevbasics/finalProject/Skillup_Burger_Shop/src/styles/menu.scss"
function Menu() {
    return(
        <div id="menu">
            <h1>Menu</h1>
            <div>
                <MenuCard itemNum={1} burgerSrc={burger1} price={200} title={"Cheese Burger"} handler={1}></MenuCard>
                <MenuCard itemNum={2} burgerSrc={burger2} price={500} title={"Veg Cheese Burger"} handler={1}></MenuCard>
                <MenuCard itemNum={3} burgerSrc={burger3} price={1800} title={"Cheese Burger with French Fries"} handler={1}></MenuCard>
            </div>
        </div>
    )
}

export default Menu;
// Write all the code here
