import React from 'react';
import './Searchbar.css';

function Searchbar({ handleChange, handleSubmit }) {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Realizando solicitud al backend...'); // Agregar un console.log para verificar que se está haciendo la solicitud
    handleSubmit(); // Llamar a la función handleSubmit
  };

  return (
    <div>
      <form onSubmit={handleSearch}> {/* Usar onSubmit para manejar el envío del formulario */}
        <input placeholder='Búsqueda' type="search" onChange={handleChange} />
        <button type='submit'>Buscar</button>
      </form>
    </div>
  );
}

export default Searchbar;

