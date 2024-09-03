import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Feed from "./pages/feed/index";
import Home from "./pages/Home/index";
import Cadastro from "./pages/Cadastro/Cadastro";

const Rotas = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Feed" element={<Feed/>} />
                <Route path="/Login" element={<Login/>}  />
                <Route path="/cadastro" element={<Cadastro/>}  />
           </Routes>
       </BrowserRouter>
   )
}

export default Rotas;