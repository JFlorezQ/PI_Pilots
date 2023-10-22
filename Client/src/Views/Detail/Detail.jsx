import './Detail.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

function Detail() {
    const { id } = useParams();
    const [driver, setDriver] = useState({});    

    useEffect(() => {
        fetch(`http://localhost:1030/drivers/${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.name) {
                    setDriver(data);
                } else {
                    window.alert("No hay Driver con este ID");
                }
            })
    }, [id]);

    return (
        <div className="container">
            <img src={driver?.image?.url} alt={driver?.name} />
            <h1>Name: {driver?.name} {driver?.surname}</h1>
            <h2>ID: {driver?.id}</h2>
            <h2>Nationality: {driver?.nationality}</h2>
            <h3>Description: {driver?.description}</h3>
            <h2>Date of birth: {driver?.dob}</h2>
            <h2>Teams: {driver?.teams}</h2>
        </div>
    );
}
export default Detail;
