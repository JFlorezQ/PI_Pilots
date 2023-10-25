import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers, getbyName } from "../../redux/actions";
import './Home.css';
import Navbar from "../../Components/Navbar/Navbar";
import Cards from '../../Components/Cards/Cards';

function Home() {
  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);
  const [searchString, setSearchString] = useState("");
  const [showAllDrivers, setShowAllDrivers] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const driversPerPage = 10;
  const [filteredDrivers, setFilteredDrivers] = useState([]); // Estado para conductores filtrados y ordenados
  const [isSorted, setIsSorted] = useState(false); // Estado para controlar el orden

  function handleChange(e) {
    e.preventDefault();
    setSearchString(e.target.value);
  }

  function handleSubmit() {
    dispatch(getbyName(searchString));
    setShowAllDrivers(false);
    setCurrentPage(1);
  }

  function showAll() {
    dispatch(getDrivers());
    setShowAllDrivers(true);
    setCurrentPage(1);
  }

  useEffect(() => {
    if (showAllDrivers) {
      setFilteredDrivers(allDrivers); // Mostrar todos los conductores al inicio
    }
  }, [dispatch, showAllDrivers, allDrivers]);

  useEffect(() => {
    // Aplicar filtro por nombre
    setFilteredDrivers(filteredDrivers.filter(driver => driver.name.toLowerCase().includes(searchString.toLowerCase())));
  }, [searchString]);

  useEffect(() => {
    // Ordenar conductores al cambiar el estado de orden
    const sortedDrivers = [...filteredDrivers].sort((a, b) => a.name.localeCompare(b.name));
    if (isSorted) {
      sortedDrivers.reverse();
    }
    setFilteredDrivers(sortedDrivers);
  }, [isSorted]);

  const indexOfLastDriver = currentPage * driversPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
  const currentDrivers = filteredDrivers.slice(indexOfFirstDriver, indexOfLastDriver);

  const totalPages = Math.ceil(filteredDrivers.length / driversPerPage);

  function handlePageChange(newPage) {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  }

  function handleSort() {
    setIsSorted(!isSorted); // Cambiar el estado de orden al hacer clic en el botón de ordenamiento
  }

  return (
    <div>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} showAll={showAll} />
      <button onClick={handleSort}>{isSorted ? "Z-A" : "A-Z"}</button>
      <Cards currentDrivers={currentDrivers} />
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Home;
