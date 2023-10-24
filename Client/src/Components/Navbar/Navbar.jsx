import Searchbar from '../Searchbar/Searchbar';
import './Navbar.css';
import {NavLink } from "react-router-dom";



function Navbar({ handleChange, handleSubmit, showAll }) {
  return (
    <nav className="barra">
      <Searchbar className="searchbar" handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className="botones">
      <button onClick={showAll}>Mostrar Todos</button>
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