import React from "react";
import { AiOutlineEye } from "react-icons/ai"


const Candidate=()=>{

    return(
        <div>
            <nav className="main">
                <div>
                <img src="https://truetalent.io/static/media/logo.e8c72fdf.svg" alt=""  className="img"/>
                </div>
                <div className="tt">
                    <a href="/" className="but" id="but" >TT Essential</a>
                    <a href="" className="but" id="butt">TT Gig</a>
                </div>
                <div className="log">
                    <a href="" className="login">Login</a>
                    <a href="" className="login" id="login">Register</a>
               </div>
               </nav>   
               <div style={{display:"flex"}}>
               <div className="reg">
                <img src="https://truetalent.io/Assets/images/login_banner.png?1" alt="" className="cover"/>
                <div>
                   <h2 className="dream">Amazing <span>career opportunites..</span> just a click <br></br>away!!</h2>
                </div>
                <div style={{textAlign:"center"}}>
                    <button className="learn"><span>Learn more about TrueTalent</span></button>
                </div>
            </div>
            <div className="inp-main">
            <div>
                <h2>Create True Talent Account</h2>
            </div>
            <div>
               I am a
                <button>Candidtate</button>
                <button>Employer</button>
            </div>
            <div>
                <input type="text" placeholder="First Name" className="inp-first" style={{marginRight:"15px"}}/>
                <input type="text" placeholder="Last Name" className="inp-first"/>
            </div>
            <div>
                <input type="email" placeholder="Email Address" className="inp-email"/>
            </div>
            <div style={{display:"flex"}}>
                <div className="reg-pass">
                <input type="password" placeholder="Password" id="inp-pass"/><AiOutlineEye></AiOutlineEye>
                </div>
                <input type="password" placeholder="Confirm Password" id="inp-cpass"/>
            </div>
            <div className="inp-check">
                <input type="checkbox" name="" id="" /><label className="inp-text">I accept the True Talent.io <span>Terms of Use</span> & <span>Privacy Policy</span></label>
            </div>
            <div>
                <button className="inp-create" id="inp-create">Create Account</button><br />
                <button className="inp-create">Continue With Google</button>
            </div>
            </div>
               </div>
        </div>
    )
}

export default Candidate