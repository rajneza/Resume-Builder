import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";



import Navbar from "./Navbar";

import Resume from "./Resume";

import Websites from "./Websites";


import Internships from "./Internship";
import Hobbies from "./Hobbies";
import Languages from "./Languages";
import References from "./Reference";
import Extracurricular from "./Extra-curricular";




const App=()=>{
    return(
        <div>
             <BrowserRouter>
            <Routes>
                
                
                 <Route path="/website" element={<Websites></Websites>}></Route>
                 
                 
                 <Route path="/" element={<Navbar></Navbar>}></Route>
                 <Route path="/intership" element={<Internships></Internships>}></Route>
                <Route path="/resume" element={<Resume></Resume>}></Route>
                <Route path="/hobbie" element={<Hobbies></Hobbies>}></Route>
                <Route path="/languages" element={<Languages></Languages>}></Route>
                <Route path="/reference" element={<References></References>}></Route>
                <Route path="/extra" element={<Extracurricular></Extracurricular>}></Route>
              
                 
                
                
                
            </Routes> 
            </BrowserRouter> 
          
        </div>
    )
}

export default App;