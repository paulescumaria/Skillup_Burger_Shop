import React from "react";
import logoHeader from "C:/Users/Ale/Desktop/webdevbasics/finalProject/Skillup_Burger_Shop/src/assets/logoHeader.png"
import DropdownMenu from "./DropdownMenu";
import "C:/Users/Ale/Desktop/webdevbasics/finalProject/Skillup_Burger_Shop/src/styles/DropdownMenu.scss"

function Header () {
    var baseURL = "http://localhost:3000";

    return (
        <div>
            <nav>
                <img src={logoHeader} alt="burger-and-drink" height={50}/>
                <a href={`${baseURL}/`}>Home</a>
                <a href={`${baseURL}/contact`}>Contact</a>
                <a href={`${baseURL}/about`}>About</a>
                <a href={`${baseURL}/cart`}>Shopping Cart</a>
                <DropdownMenu></DropdownMenu>
            </nav>
        </div>)  
}

export default Header;
// Write all the code here