import './Form.css';
import axios from 'axios';
import { useState } from 'react';
import validation from '../validation';

function Form() {
  const [input, setInput] = useState({
    name: {
      forename: "",
      surname: ""
    },
    description: "",
    image: "",
    nationality: "",
    dob: "",
    teams: "" // Cambiado de "team" a "teams" para que coincida con el estado inicial
  });

  const [error, setErrors] = useState({
    name: {
      forename: "",
      surname: ""
    },
    description: "",
    image: "",
    nationality: "",
    dob: "",
    teams: "" // Cambiado de "team" a "teams" para que coincida con el estado inicial
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "forename" || name === "surname") {
      setInput({
        ...input,
        name: {
          ...input.name,
          [name]: value
        }
      });
    } else {
      setInput({
        ...input,
        [name]: value
      });
    }

    setErrors(validation({
      ...input,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validation(input);
    console.log("Errors:", errors); // Asegúrate de que no haya errores en la consola
  
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('http://localhost:1030/drivers', input);
        // Maneja la respuesta del servidor aquí si es necesario
        console.log(response.data);
      } catch (error) {
        // Maneja los errores de la solicitud aquí
        console.error(error);
      }
    }
  };
  
  return (
    <div className="formulario-contenedor">
      <form onSubmit={handleSubmit}>
        <label className="mi-titulo">Nombre</label>
        <input
          className="respuestas"
          type="text"
          name="forename"
          placeholder="Ingrese un Nombre"
          value={input.name.forename}
          onChange={handleChange}
        />
        <span>{error.name.forename}</span> {/* Cambiado a error.name.forename */}
        <br /><br />

        <label className="mi-titulo">Apellido</label>
        <input
          className="respuestas"
          type="text"
          name="surname"
          placeholder="Ingrese el Apellido"
          value={input.name.surname}
          onChange={handleChange}
        />
        <span>{error.name.surname}</span> {/* Cambiado a error.name.surname */}
        <br /><br />

        <label className="mi-titulo">Nacionalidad</label>
        <input
          className="respuestas"
          type="text"
          name="nationality"
          placeholder="Ingrese la nacionalidad"
          value={input.nationality}
          onChange={handleChange}
        />
        <span>{error.nationality}</span>
        <br /><br />
        <label className="mi-titulo">Fecha de nacimiento</label>
        <input
          className="respuestas"
          type="text"
          name="dob"
          placeholder="Ingrese Fecha de nacimiento"
          value={input.dob}
          onChange={handleChange}
        />
        <span>{error.dob}</span>
        <br /><br />

        <label className="mi-titulo">Descripcion</label>
        <input
          className="respuestas"
          type="text"
          name="description"
          placeholder="Ingrese la Descripcion"
          value={input.description}
          onChange={handleChange}
        />
        <span>{error.description}</span>
        <br /><br />

        <label className="mi-titulo">Escuderia</label>
        <input
          className="respuestas"
          type="text"
          name="teams" // Cambiado de "team" a "teams"
          placeholder="Ingrese la Escuderia"
          value={input.teams}  // Cambiado de "team" a "teams"
          onChange={handleChange}
        />
        <span>{error.teams}</span> {/* Cambiado a error.teams */}
        <br /><br />

        <label className="mi-titulo">Imagen</label> {/* Cambiado a "Imagen" en lugar de "imagen" para que coincida con el estado */}
        <input
          className="respuestas"
          type="text"
          name="image"
          placeholder="Ingrese la imagen"
          value={input.image}
          onChange={handleChange}
        />
        <span>{error.image}</span>
        <br /><br />

        <button className="boton" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Form;
