import './Card.css';
import {NavLink } from "react-router-dom";

function Card({driver}) {
  const{name, team, image, id} = driver
  return (
    <div className='cardcontainer'>
      <NavLink to={`/detail/${id}`} >
        <img src={image?.url} alt={name} />
        <h1> Nombre: {name}  </h1>
        <h2> Equipo: {team} </h2>
        <p>id {id}</p>
        </NavLink>
    </div>
  )
}

export default Card;
