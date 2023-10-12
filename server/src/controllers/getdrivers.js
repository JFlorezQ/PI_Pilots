/* 📍 GET | /drivers
Obtiene un arreglo de objetos, donde cada objeto es un driver con su información.
IMPORTANTE: Si un driver no tiene imagen, deberás colocarle una por defecto 🖼️ 
Debe traer tanto de la api como de la base de datos*/

const axios = require('axios');
const{Driver} = require('../db.js')
const URL = `http://localhost:5000/drivers`;


const getDrivers = async (req,res)=>{
    try {
        // Obtener datos de la API
        const apiResponse = await axios.get(URL); //Se trae la información de la en un objeto gigante
        const apiDrivers = apiResponse.data; // se extrae la Data
        

        // verificar que el resultado sea lo que esperamos y que existan los datos
        if (!apiDrivers || !Array.isArray(apiDrivers)) {
            throw new Error('No se encontraron datos de conductores en la API');} 
        
        // Mapea los drivers de la API
        
        const driversAPI = apiDrivers.map((driver) => ({
            image: driver.image ||'../Images/Defaultimage.png',
            // Verificar que haya recibido el objeto de nombre para ir hasta su primer nombre
            name: driver.name ?`${driver.name.forename} ${driver.name.surname}`: 'Conductor sin nombre', 
            team: driver.teams || "Conductor sin Equipo"}));
        
        //Recuperar datos de la DB

        // Consultar los datos del modelo Driver

        const databaseDrivers = await Driver.findAll();
        
        // Mapear los datos de la base de datos
        
        const driversDatabase = databaseDrivers.map((driver) => ({
            image: driver.image ||'../Images/Defaultimage.png',
            name: `${driver.name.forename} ${driver.name.surname}` || 'Conductor sin nombre',
            team: driver.team || 'Conductor sin equipo'}));
            
        
        // Combinar datos de la API y la base de datos
        
        const drivers = [...driversAPI, ...driversDatabase];

        return res.status(200).json(drivers)}
   
       
    catch (error) {
        if (error.response) {
            return res.status(500).send(error.response.data.error);
        } else {
            return res.status(404).send(error.message);
        }
    }
}
    
module.exports ={getDrivers}



