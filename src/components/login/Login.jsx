import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaGoogle, FaGithub   } from "react-icons/fa";


function Login () {
    const [showLog, setShowLog] = useState(true)
    
    return (
        <div className="containerLog">
            <div className="btns ">
                <button id="btn1" onClick={() => {setShowLog(true)}}>Login</button>
                <button id="btn2" onClick={() => {setShowLog(false)}}>Register</button>
            </div>
            {showLog ? 
            <div className="login">
                <h4>Sign in with:</h4>
                <div className="icons">
                    <a href="https://www.facebook.com/"><FaFacebookF /></a>
                    <a href="https://twitter.com/"><FaTwitter /></a>
                    <a href="https://google.com/"><FaGoogle /></a>
                    <a href="https://github.com/"><FaGithub /></a>
                </div>
                <h4>or:</h4>
                <form>
                    <input placeholder="Email address" /><br/>
                    <input placeholder="Password"/><br/>
                    <div className="check">
                        <div>
                            <input  type="checkbox" id="rememberMe" name="rememberMe" value="remember"/>
                            <label htmlFor="rememberMe"> Remember me</label><br/>
                        </div>
                        <div>
                            <a href="#">Forgot password?</a>
                        </div>
                    </div><br/>
                    <button className="signIn">Sign In</button>
                </form>
                <div className="cont">
                    <h6 className="notMember">Not a member? </h6>
                    <a onClick={() => setShowLog(false)}>
                         <h6> Register</h6>
                        </a>
                </div>
            </div>
            :
            <div className="register">
                <h4>Register with:</h4>
                <div className="icons">
                    <a href="https://www.facebook.com/"><FaFacebookF /></a>
                    <a href="https://twitter.com/"><FaTwitter /></a>
                    <a href="https://google.com/"><FaGoogle /></a>
                    <a href="https://github.com/"><FaGithub /></a>
                </div>
                <h4>or:</h4>
                <form>
                    <input placeholder="Email address" /><br/>
                    <input placeholder="Password"/><br/>
                    <input placeholder="Confirm Password"/><br/><br/>
                    <button className="signIn">Register</button>
                </form>
                <div className="cont">
                    <h6 className="notMember">Member? </h6>
                    <a onClick={() => setShowLog(true)}>
                         <h6> Log In</h6>
                        </a>
                </div>
            </div>
            }
        </div>
    )
}

export default Login;
// Write all the code here
