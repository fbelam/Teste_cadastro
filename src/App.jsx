import { useState } from 'react'
import './App.css';
import Rotas from "./Routes";
import Nav from "../src/pages/nav/Nav";
import { Route } from 'react-router';

function App() {
   return(
       <div>
        <Nav/>
        <Rotas/>    
       </div>
   )
}
export default App;
