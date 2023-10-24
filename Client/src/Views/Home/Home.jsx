import React, { useEffect, useState } from "react"; // Agrega "React" al import para utilizar JSX
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
    
    
    function handleChange(e) {
      e.preventDefault()
        setSearchString(e.target.value);
    } 
    function handleSubmit(){
      dispatch(getbyName(searchString))
      setShowAllDrivers(false);
    }
    function showAll() {
      dispatch(getDrivers());
      setShowAllDrivers(true); // Establece la bandera para mostrar todos los conductores
  }

 

    useEffect(() => {
        dispatch(getDrivers());
    }, [dispatch]);

    return (
        <div>
            <Navbar handleChange={handleChange} handleSubmit={handleSubmit} showAll={showAll} />
            <Cards allDrivers={allDrivers} />
        </div>
    );
}

export default Home;

   /* const allDriversCopy = useSelector((state) => state.allDriverscopy); // Corregir el nombre de la variable
    const [filtered, setFiltered] = useState(allDriversCopy);
    


    function handleSubmit(e) {
        e.preventDefault();
        const filtered = allDriversCopy.filter((driver) =>
            driver.name.includes(searchString)
        );
        setFiltered(filtered);
    }*/