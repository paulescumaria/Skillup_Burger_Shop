import React, { useState } from "react";
import founder from "C:/Users/Ale/Desktop/webdevbasics/finalProject/Skillup_Burger_Shop/src/assets/skj.jpg"
import { FaSearch } from "react-icons/fa";
import Menu from "../home/Menu";
import Founder from "../home/Founder";

function About () {
    const [show, setShow] = useState(false);

    return (
        show ?
        <>
            <Menu></Menu>
        </>
        :
        <div className="about">
            <main>
                <h1>About us</h1>
                <article>
                    <h4>Burger shop</h4>
                    <p>This is Burger Shop. The place fot most tasty burgers on the enitre earth.</p>
                    <p>Explore the various type of food and burgers. Click below to see the menu</p>
                    <a onClick={() => setShow(true)}><FaSearch /></a>
                </article>
                <div>
                    <h2>Founder</h2>
                    <Founder></Founder>
                </div>
                
            </main>
        </div>
    )
}

export default About;
// Write all the code here
