import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";


import Second from "./Second";
import Navbar from "./Navbar";
import Ttgig from "./Ttgig";
import Register from "./Register";
import Log from "./Log";
import Block from "./Block";
import Add from "./Add";
import Table from "./Table";
import Regi2 from "./Regi2";
import Validation from "./Validation";
import Valid from "./Validation";
import Resume from "./Resume";
import ProfilePhotoUpload from "./Second";
import PhotoUpload from "./Second";
import Websites from "./Websites";
import Custom from "./Custom";
import Course from "./Course";
import Internships from "./Internship";
import Hobbies from "./Hobbies";
import Languages from "./Languages";
import References from "./Reference";
import Extracurricular from "./Extra-curricular";
import Values from "./Values";
import Skills from "./Skills";
import Html from "./Html";
import Htmlx from "./Html";
import Value from "./Values";
import Reactt from "./Project/React";


const App=()=>{
    return(
        <div>
             <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Add/>}></Route>
                <Route path="/second" element={<Second/>}></Route>
                 <Route path="/ttgig" element={<Ttgig/>}></Route>
                 <Route path="/home" element={<Navbar/>}></Route>
                 <Route path="/register" element={<Register/>}></Route> */}
                 <Route path="/Table" element={<Table></Table>}></Route>
                 <Route path="/regi" element={<Regi2></Regi2>}></Route>
                 <Route path="/website" element={<Websites></Websites>}></Route>
                 {/* <Route path='/custom' element={<Custom></Custom>}></Route> */}
                 <Route path="/course" element={<Course></Course>}></Route>
                 <Route path="/" element={<Navbar></Navbar>}></Route>
                 <Route path="/intership" element={<Internships></Internships>}></Route>
                <Route path="/resume" element={<Resume></Resume>}></Route>
                <Route path="/hobbie" element={<Hobbies></Hobbies>}></Route>
                <Route path="/languages" element={<Languages></Languages>}></Route>
                <Route path="/reference" element={<References></References>}></Route>
                <Route path="/extra" element={<Extracurricular></Extracurricular>}></Route>
               <Route path="/value" element={<Values></Values>}></Route>
                <Route path="/profile" element={<PhotoUpload/>}></Route>
                 <Route path="/Ttgig" element={<Ttgig></Ttgig>}></Route>
                 <Route path="/skill" element={<Skills></Skills>}></Route>
                 <Route path="/html" element={<Htmlx></Htmlx>}></Route>
                 <Route path="/react" element={<Reactt></Reactt>}></Route>
                 {/* <Route path="/block" element={<Block/>}></Route> */}
                
            </Routes> 
            </BrowserRouter> 
           {/* <Table></Table> */}
           {/* <Regi2></Regi2> */}
           {/* <Log></Log> */}
          
        </div>
    )
}

export default App;