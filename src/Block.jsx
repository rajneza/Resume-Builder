import React, { Component } from "react"
import "./Second.css"
import Range from "./Range";
import { Switch } from "antd";
import { SlMagnifier,SlLocationPin } from "react-icons/sl"




class Block extends Component{
    constructor(){
        super()
        this.state={
            name:true
        }
        
    }
    togglehandler=()=>{
        if(this.state.name){
            this.setState({name:false})
        }
        else{
            this.setState({name:true})
        }
    }
render(){
    return(
        <div>
            <div>
            
            </div>
            <div style={{display:"flex"}} className="first"> 
            <div className="skill2">
                  <SlMagnifier></SlMagnifier>
                <input type="text" placeholder="skill" className="cc"/>
            </div>
            <div className="city2">
                <SlLocationPin></SlLocationPin>
                <input type="text" placeholder="City" className="cc"/>
                
            </div>
            <button className="jobs">Find Jobs</button>
            </div>
            <div style={{display:"flex"}}>
            <div className="second">
                <div className="bd1" style={{display:"flex"}}>
                    <h3>Filter Search</h3>
                   <button className="clear">Clear All</button>
                </div>
                <div>
                    <p>Location</p>
                </div>
                <div>
                    <input type="text" placeholder="city" className="in"/><br></br>
                    <div className="abc">
                    <input type="checkbox" className="cba" id="city1"/><label htmlFor="city1">Chennai,TamilNadu</label><br></br>
                    <input type="checkbox" className="cba" id="city2"/><label htmlFor="city2">Mumbai,Mumbai</label><br></br>
                    <input type="checkbox" className="cba" id="city3"/><label htmlFor="city3">Banglore,Karnataka</label><br></br>
                    <input type="checkbox" className="cba" id="city4"/><label htmlFor="city4">Kolkata,West Bengal</label><br></br>
                    <input type="checkbox" className="cba" id="city5"/><label htmlFor="city5">Bhubaneswar,Odisha</label><br></br>
                    <input type="checkbox" className="cba" id="city6"/><label htmlFor="city6">New Delhi,Delhi</label><br></br>
                    <input type="checkbox" className="cba" id="city7"/><label htmlFor="city7">Pune,Maharastra</label><br></br>
                    <input type="checkbox" className="cba" id="city8"/><label htmlFor="city8">Indore,Madhaya Pradhesh</label><br></br>
                    <input type="checkbox" className="cba" id="city9"/><label htmlFor="city9">Ahamadabad,Gujarat</label><br></br>
                    <h6 className="dca">+7154More</h6>
                    </div>

                </div>
                <div>
                    <p>Salary</p>
                    <input type="checkbox" className="cba" id="sal1"/><label htmlFor="sal1">Rs 2Lac - 5Lac</label><br></br>
                    <input type="checkbox" className="cba" id="sal2"/><label htmlFor="sal2">Rs 2Lac - 5Lac</label><br></br>
                    <input type="checkbox" className="cba" id="sal3"/><label htmlFor="sal3">Rs 2Lac - 5Lac</label><br></br>
                    <input type="checkbox" className="cba" id="sal4"/><label htmlFor="sal4">Rs 2Lac - 5Lac</label><br></br>
                    <input type="checkbox" className="cba" id="sal5"/><label htmlFor="sal5">Rs 2Lac - 5Lac</label><br></br>
                </div>
                <div>
                    <p>Preferred Job Type</p>
                    <input type="checkbox" className="cba" id="pjt1"/><label htmlFor="pjt1">Full Time</label><br></br>
                    <input type="checkbox" className="cba" id="pjt2"/><label htmlFor="pjt2">Direct Contract</label><br></br>
                    <input type="checkbox" className="cba" id="pjt3"/><label htmlFor="pjt3">Contract-to-Hire</label><br></br>

                </div>
                <div>
                    <p>Joining Preferences</p>
                    <input type="checkbox" className="cba" id="jp1"/><label htmlFor="jp1">Immediate</label><br></br>
                    <input type="checkbox" className="cba" id="jp2"/><label htmlFor="jp2">2 Weeks</label><br></br>
                    <input type="checkbox" className="cba" id="jp3"/><label htmlFor="jp3">1 Months</label><br></br>
                    <input type="checkbox" className="cba" id="jp4"/><label htmlFor="jp4">2 Months</label><br></br>
                </div>
                <div>
                    <p>Work Authorization</p>
                    <input type="checkbox" className="cba" id="wa1"/><label htmlFor="wa1">Required</label><br></br>
                    <input type="checkbox" className="cba" id="wa2"/><label htmlFor="wa2">Not Required</label><br></br>
                </div>
                <div>
                    <p>Job Durations</p>
                    <input type="checkbox" className="cba" id="jd1"/><label htmlFor="jd1">Contract-3 Months</label><br></br>
                    <input type="checkbox" className="cba" id="jd2"/><label htmlFor="jd2">Contract-6 Months</label><br></br>
                    <input type="checkbox" className="cba" id="jd3"/><label htmlFor="jd3">Contract-1 Year</label><br></br>
                    <input type="checkbox" className="cba" id="jd4"/><label htmlFor="jd4">Permanent</label><br></br>
                </div>
                <div>
                    <p>Salary Types</p>
                    <input type="checkbox" className="cba" id="st1"/><label htmlFor="st1">Annual</label><br></br>
                    <input type="checkbox" className="cba" id="st2"/><label htmlFor="st2">Monthly</label><br></br>
                </div>
                <div>
                    <p>Industry Domains</p>
                    <input type="text" placeholder="Entry Industry Domain" className="in"/><br />
                    <input type="checkbox" className="cba" id="id1"/><label htmlFor="id1">Technology</label><br></br>
                    <input type="checkbox" className="cba" id="id2"/><label htmlFor="id2">Education</label><br></br>
                    <input type="checkbox" className="cba" id="id3"/><label htmlFor="id3">Hospitality</label><br></br>
                    <input type="checkbox" className="cba" id="id4"/><label htmlFor="id4">Healthcare</label><br></br>
                    <input type="checkbox" className="cba" id="id5"/><label htmlFor="id5">Engineering and Construction</label><br></br>
                    <input type="checkbox" className="cba" id="id6"/><label htmlFor="id6">Banking</label><br></br>
                    <input type="checkbox" className="cba" id="id7"/><label htmlFor="id7">Finance</label><br></br>
                    <input type="checkbox" className="cba" id="id8"/><label htmlFor="id8">Automotive</label><br></br>
                    <input type="checkbox" className="cba" id="id9"/><label htmlFor="id9">Telecom</label><br></br>
                    <input type="checkbox" className="cba" id="id10"/><label htmlFor="id10">Chemical</label><br></br>
                    <h6 className="dca">+13More</h6>
                </div>
                <div>
                    <p>Experince</p> 
                    
                    <Range/>
                </div>
                <div>
                    
                        <div>
                        <p>Travel Required<Switch onClick={this.togglehandler} style={{backgroundColor:"#14bc9a"}} className="togg"/>{
                            this.state.name?<span></span>:<input type="number" className="switch" placeholder="Travel"/>
                        }</p>

                        </div>
                        
                    <p>Equal Opportunity <br />Employer<Switch style={{backgroundColor:"#14bc9a"}} className="toggle"/></p>
                </div>
                <div>
                    <p>Jobs Posted Between</p>
                    <div>
                        <input type="date" name="" id="inp" className="in"/>
                        <input type="date" name="" id="" className="in"/>
                    </div>
                </div>
                
            </div>
            <div style={{display:"flex"}}>
               <div>
                <h3 id="search">Search results</h3>
               </div>
               <div style={{display:"flex"}} className="sort">
                <div>
                <h6 id="sort">Sort by:</h6>
                <img src="https://truetalent.io/Assets/svgs/list_view_icon.svg" alt="" id="squre"/>
                </div>
                <div>
                  <h5 id="newest">Newest First</h5>
                  <img src="https://truetalent.io/Assets/svgs/grid_view_icon.svg" alt="" id="block"/>
                </div>
              </div>
            </div>
            </div>
            <div>
                <table className="table">
                    <tr>
                        <th className="th-job">
                            Job
                        </th>
                        <th className="th-skills">
                            Skills
                        </th>
                        <th className="th-location">
                            Location
                        </th>
                        <th className="th-company">
                            Company
                        </th>
                        <th className="th-type">
                            Job Type
                        </th>
                        <th className="th-exp">
                            Experience
                        </th>
                    </tr>
                    <tr className="td-one">
                        <td>
                        Travel Consultant with 3+ year of experience
                        </td>
                        <td>
                        Amadeus, Sabre, Galileo & Apollo Reservation Systems.
                        </td>
                        <td>
                        Bangalore, Karnataka
                        </td>
                        <td>
                        Mystifly Consulting India Pvt Ltd.
                        </td>
                        <td>
                            Full Time
                        </td>
                        <td>
                            3-5 Yrs
                        </td>
                    </tr>
                    <tr className="td-one">
                        <td>
                        Finance-Assistant Manager / Deputy Manager
                        </td>
                        <td>
                        Must have Chartered Accountant completion. Certificate with minimum5 -7 years of industry experience post qualification (CA)
                        </td>
                        <td>
                        Bangalore, Karnataka
                        </td>
                        <td>
                            NVK STAFFING SOLUTIONS
                        </td>
                        <td>
                            Full Time
                        </td>
                        <td>
                            2-7 Yrs
                        </td>
                    </tr>
                    <tr className="td-one">
                        <td>
                        Travel Consultant with 3+ year of experience
                        </td>
                        <td>
                        Amadeus, Sabre, Galileo & Apollo Reservation Systems.
                        </td>
                        <td>
                        Bangalore, Karnataka
                        </td>
                        <td>
                        Mystifly Consulting India Pvt Ltd.
                        </td>
                        <td>
                            Full Time
                        </td>
                        <td>
                            3-5 Yrs
                        </td>
                    </tr>
                    <tr className="td-one">
                        <td>
                        Finance-Assistant Manager / Deputy Manager
                        </td>
                        <td>
                        Must have Chartered Accountant completion. Certificate with minimum5 -7 years of industry experience post qualification (CA)
                        </td>
                        <td>
                        Bangalore, Karnataka
                        </td>
                        <td>
                            NVK STAFFING SOLUTIONS
                        </td>
                        <td>
                            Full Time
                        </td>
                        <td>
                            2-7 Yrs
                        </td>
                    </tr>
                    <tr className="td-one">
                        <td>
                        Travel Consultant with 3+ year of experience
                        </td>
                        <td>
                        Amadeus, Sabre, Galileo & Apollo Reservation Systems.
                        </td>
                        <td>
                        Bangalore, Karnataka
                        </td>
                        <td>
                        Mystifly Consulting India Pvt Ltd.
                        </td>
                        <td>
                            Full Time
                        </td>
                        <td>
                            3-5 Yrs
                        </td>
                    </tr>
                    <tr className="td-one">
                        <td>
                        Finance-Assistant Manager / Deputy Manager
                        </td>
                        <td>
                        Must have Chartered Accountant completion. Certificate with minimum5 -7 years of industry experience post qualification (CA)
                        </td>
                        <td>
                        Bangalore, Karnataka
                        </td>
                        <td>
                            NVK STAFFING SOLUTIONS
                        </td>
                        <td>
                            Full Time
                        </td>
                        <td>
                            2-7 Yrs
                        </td>
                    </tr>
                    <tr className="td-one">
                        <td>
                        Travel Consultant with 3+ year of experience
                        </td>
                        <td>
                        Amadeus, Sabre, Galileo & Apollo Reservation Systems.
                        </td>
                        <td>
                        Bangalore, Karnataka
                        </td>
                        <td>
                        Mystifly Consulting India Pvt Ltd.
                        </td>
                        <td>
                            Full Time
                        </td>
                        <td>
                            3-5 Yrs
                        </td>
                    </tr>
                    <tr className="td-one">
                        <td>
                        Finance-Assistant Manager / Deputy Manager
                        </td>
                        <td>
                        Must have Chartered Accountant completion. Certificate with minimum5 -7 years of industry experience post qualification (CA)
                        </td>
                        <td>
                        Bangalore, Karnataka
                        </td>
                        <td>
                            NVK STAFFING SOLUTIONS
                        </td>
                        <td>
                            Full Time
                        </td>
                        <td>
                            2-7 Yrs
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}



}

export default Block


