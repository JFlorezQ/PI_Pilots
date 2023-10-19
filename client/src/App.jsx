
import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

 
function App() {
  return (
    <div className="App">
 <Routes>
            <Route path= "/" element = {<Landing/>} />
            <Route path="/home" />
            <Route path="/about" element = {<About/>} />
            <Route path="/detail/:id" element = {<Detail/>} />
            <Route path="/Form" element = {<Form/>} />
            </Routes>
    </div>
  );
}

export default App;
