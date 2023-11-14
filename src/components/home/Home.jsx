import React from "react";
import Menu from "./Menu";
import { useState } from "react";

function Home () {
    const [show, setShow] = useState(false)
    return (
        show ?
        <>
            <Menu></Menu>
        </>
        :
        <>        
        <div className="home">
            <div>
                <h1>Burger Shop</h1>
                <p>Give yourself a tasty burger</p>
            </div>
            <a href="#"><button onClick={() => setShow(true)}>Explore Menu</button></a>
        </div>
        </>
    )
}

export default Home;
// Write all the code here



