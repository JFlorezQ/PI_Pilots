
import './App.css';
// import Navbar from './Components/Navbar/Navbar';
import Create from './Views/Create/Create'
import Detail from './Views/Detail/Detail'
import Home from './Views/Home/Home'
import Landing from './Views/Landing/Landing'

import {Routes, Route, /*useLocation*/ } from 'react-router-dom' 



function App() {
  // let location = useLocation() // esto hace que la constante location nos permita acceder a las propiedades de useLocation (saber donde estamos)
  
  return (
    <div>
      <Routes>
        <Route path="/" element = {<Landing/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/detail/:id" element = {<Detail/>}/>
        <Route path="/Create" element = {<Create/>}/>
      </Routes>
      
    </div>
    )
}

export default App;
