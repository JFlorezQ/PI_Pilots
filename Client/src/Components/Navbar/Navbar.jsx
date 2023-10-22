import Searchbar from '../Searchbar/Searchbar';
import './Navbar.css';
import {NavLink } from "react-router-dom";



function Navbar() {
  return (
    <nav className="barra">
      <Searchbar className="searchbar"/>
      <div className="botones">
      <button className="boton"> 
      <NavLink className='link' to="/about"> About </NavLink>
      </button>
      <button className="boton"> 
      <NavLink className='link' to="/home"> Home </NavLink>
      </button>
          
      <button className="boton"> 
      <NavLink className='link' to="/create"> Create </NavLink>
      </button> 

      </div>
    </nav>
  )
}

export default Navbar;