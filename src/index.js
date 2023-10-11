import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';





let root=ReactDom.createRoot(document.querySelector('#root'),()=>{
    console.log("application started");
})


root.render(
    <div>
        <ToastContainer></ToastContainer>
    <App/>

    </div>
    
    
    
)