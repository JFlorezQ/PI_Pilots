import './Card.css';
import {NavLink } from "react-router-dom";

function Card({driver}) {
  const{name, team, image, id,dob} = driver
  return (
    <div className='cardcontainer'>
      <NavLink to={`/detail/${id}`} >
        <img src={image?.url} alt={name} />
        <h1> Nombre: {name}  </h1>
        <h2> Equipo: {team} </h2>
        <p>Fecha de nacimiento: {dob}</p>
        </NavLink>
    </div>
  )
}

export default Card;
