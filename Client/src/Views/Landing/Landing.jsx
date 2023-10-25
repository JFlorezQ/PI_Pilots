import './Landing.css';
import { NavLink } from 'react-router-dom';

function Landing() {
  return (
    <div>
    <h1> Bienvenido corredor </h1>
    <button className="boton"> 
    <NavLink className='link' to="/home "> ingresa </NavLink>
    </button>
    </div>
  )
}

export default Landing;
