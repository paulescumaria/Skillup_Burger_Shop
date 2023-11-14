import React, { useState } from "react";
import founder from "C:/Users/Ale/Desktop/webdevbasics/finalProject/Skillup_Burger_Shop/src/assets/skj.jpg"
import { FaSearch } from "react-icons/fa";
import Menu from "../home/Menu";
function About () {
    const [show, setShow] = useState(false);

    return (
        show ?
        <>
            <Menu></Menu>
        </>
        :
        <div className="founder">
            <div>
                <h3>Burger Shop</h3>
                <p>This is Burger Shop. The place fot most tasty burgers on the enitre earth.</p>
                <p>Explore the various type of food and burgers. Click below to see the menu</p>
                <button className="explore" onClick={() => setShow(true)}><FaSearch /></button> 
            </div>
            <div>
                <h2>Founder</h2>
                <img src={founder} alt="founder"/>
                <h3>Nelson</h3>
                <p>i am Nelson, the founder of Burger Shop.</p>
                <p>Affiliated to God Taste...</p>
            </div>
        </div>
    )
}

export default About;
// Write all the code here
