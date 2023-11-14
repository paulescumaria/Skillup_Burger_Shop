import React from "react";
import "C:/Users/Ale/Desktop/webdevbasics/finalProject/Skillup_Burger_Shop/src/styles/footer.scss"
import { FaYoutube, FaInstagram, FaGithub  } from "react-icons/fa";

function Footer () {
    return (
        <div>
            <footer>
                <div>
                    <h2>Burger Shop</h2>
                    <p>We are trying to give you the best taste possible.</p>
                    <em>We give attention to genuine feedback.</em>
                    <b> All right received @burgershop</b>
                </div>
                
                <aside>
                    <h4>Follow us</h4>
                    <a href="https://www.youtube.com/"><FaYoutube /></a>
                    <a href="https://www.instagram.com/"><FaInstagram /></a>
                    <a href="https://github.com/"><FaGithub/></a>
                </aside>
            </footer>
        </div>
    )
}

export default Footer;
// Write all the code here