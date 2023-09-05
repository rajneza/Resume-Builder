import React, { useState } from "react";

const Website = () =>{

  const [level , setlevel] = useState("100%")

  const butt1=()=>{
    setlevel("20%")
  }
  const butt2=()=>{
    setlevel("40%")
  }
  const butt3=()=>{
    setlevel("60%")
  }
  const butt4=()=>{
    setlevel("80%")
  }
  const butt5=()=>{
    setlevel("100%")
  }

  return(
    <div>
      <input type="text" />
      <button>
        <button onClick={butt1}>1</button>
        <button onClick={butt2}>2</button>
        <button onClick={butt3}>3</button>
        <button onClick={butt4}>4</button>
        <button onClick={butt5}>5</button>
      </button>

      <div className="main-bar">
        <div className="bar" style={{width:level}}></div>

      </div>
       
    </div>
  )
}

export default Website