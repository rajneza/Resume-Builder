import { useState } from "react";
import React from "react";


const Navbar=()=>{

    const [showContent, setShowContent] = useState(true);
    return(
        <div>
            <h5>Create resume in trueTalent</h5>
            <div>
               <p className={showContent ? 'visible' : 'hidden'}>
        This content is visible.
      </p>
      <button onClick={() => setShowContent(!showContent)}>
        Toggle Content
      </button>
               </div>
        </div>
    )
}

export default Navbar