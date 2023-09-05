
import React, { useState } from "react";


const Signup=({toggle})=>{
    
    let [username , setusername]=useState();
    let [email , setemail]=useState();
    let [password , setpassword]=useState();
    let [confirmpassword , setconfirmpassword]=useState();
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
                    <label htmlFor="">Ename</label><br></br>
                    <input type="email" onChange={e=>setemail(e.target.value)}/><br></br>
                    <label htmlFor="">Password</label><br></br>
                    <input type="password" onChange={e=>setpassword(e.target.value)}/><br></br>
                    <label htmlFor="">Conform Password</label><br></br>
                    <input type="password" onChange={e=>setconfirmpassword(e.target.value)}/><br></br>
                    <input type="submit" id="sub" />
                </fieldset>
            </form>
        </div>
    )
}

export default Signup



