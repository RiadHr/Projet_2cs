import React,{Component} from 'react';
import './Style/App.css';
import Login from './Component/Login';
import Signin from "./Component/Signin.js";
import { BrowserRouter , Routes, Route } from 'react-router-dom';


function App(){
    return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='SignIn/*' element={<Signin/>} />
          </Routes>
      </BrowserRouter>
    );
}

export default App;