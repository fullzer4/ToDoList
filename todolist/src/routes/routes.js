import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Signup from "../pages/Singup";
import Login from "../pages/Login";
import Home from "../pages/home";

const Rotas = () => {
   return(
        <BrowserRouter>
            <Routes>
                <Route component = { Signup }  path="/" element={<Signup/>}/>
                <Route component = { Login }  path="/Login" element={<Login/>}/>
                <Route component = { Home }  path="/Home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
   )
}

export default Rotas;