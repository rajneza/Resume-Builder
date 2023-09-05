import React, { useState } from "react";


const Range =()=>{
    let [data, setdata]=useState(0)
    return(
        <div>
            <input type="range" min="0" max="20" step="1" value={data} onChange={(e)=>setdata(e.target.value)} className="in" id="input"/>
            <p id="dat">{data}years <span id="years">20+years</span></p>
            
        </div>
    )
}

export default Range