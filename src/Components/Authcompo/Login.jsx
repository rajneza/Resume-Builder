
import React, { useState } from "react";


const Login=(toggle)=>{
    
    let [username , setusername]=useState();
    
    let [password , setpassword]=useState();
    
    let handledata=(e)=>{
        e.preventDefault()
        
    }
    return(
        <div>
            <form onClick={handledata}>
                <fieldset>
                    <legend>Form</legend>
                    <button onClick={toggle}>x</button>
                    <label htmlFor="">Username</label><br></br>
                    <input type="text" onChange={e=>setusername(e.target.value)}/><br></br>
                    
                    <label htmlFor="">Password</label><br></br>
                    <input type="password" onChange={e=>setpassword(e.target.value)}/><br></br>
                    
                    <input type="submit" id="sub" />
                </fieldset>
            </form>
        </div>
    )
}

export default Login



