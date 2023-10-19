import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const Detail = () => {
    const { id } = useParams();
    const [driver, setDriver] = useState({});    

    useEffect(() => {
        fetch(`http://localhost:1029/drivers/${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.name) {
                    setDriver(data);
                } else {
                    window.alert("No hay Driver con este ID");
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [id]);

    return (
        <div className="container">
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
