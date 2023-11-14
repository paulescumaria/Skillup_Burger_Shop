import React from "react";
import burger2 from "C:/Users/Ale/Desktop/webdevbasics/finalProject/Skillup_Burger_Shop/src/assets/burger2.png"
import Popup from "reactjs-popup";

function Contact () {
    return (
        <div className="contact">
            <form>
                <h2>Contact Us</h2>
                <input placeholder="Name"></input>
                <input placeholder="Email"></input>
                <textarea placeholder="Your message here..."></textarea>
                <Popup trigger=
                { <button>Send</button>}
                >
                    <div style={{color:"red", transform: 'translate(0%,-500%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Thank you for contacting us! We will get back to you shortly.</div>
                </Popup>
            </form>
            <div className="formBorder">
                <div>
                    <img className="" src={burger2}/>
                </div>
            </div>
        </div>
    )
}

export default Contact;
// Write all the code here