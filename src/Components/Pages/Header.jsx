import React, { useState } from "react";
import "./Pages.css"
import Login from "../Authcompo/Login";
import Signup from "../Authcompo/Signup";
//import images from "../images/tomato.avif";

const Header=()=>{
    let [logtoggle,setlogtoggle]=useState(false);
    let [signtoggle,setsigntoggle]=useState(false); 

    let loginhandler=(e)=>{
        e.preventDefault()
        setsigntoggle(false)
        if(logtoggle){
            setlogtoggle(false)
        }else{
            setlogtoggle(true)
        }
    }


    let signuphandler=(e)=>{
        e.preventDefault()
        setlogtoggle(false)
        if(signtoggle){
            setsigntoggle(false)
        }else{
            setsigntoggle(true)
        }
    }
    
    return(
        
            <div>
                <div className="container">
                <div>
                <a href="#">Investers Relations</a>
                <a href="#">Add Restaurents</a>
                <a href="" onClick={loginhandler}>Login</a>
                <a href="" onClick={signuphandler}>Signup</a>
            
            
            <div>
                {
                   logtoggle?<Login toggle={loginhandler}/>:null
                }
            </div>
            <div>
                {
                    signtoggle?<Signup toggle={signuphandler}/>:null
                }
            </div>
            </div>
            <div>
                <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt=""  className="image"/>

            </div>
            <div className="data">
                <h1>Discover the best food & drinks in Bengaluru</h1>
            </div>
            </div>
            </div>
    )
}

export  default Header