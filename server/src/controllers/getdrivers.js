/* 📍 GET | /drivers
Obtiene un arreglo de objetos, donde cada objeto es un driver con su información.
IMPORTANTE: Si un driver no tiene imagen, deberás colocarle una por defecto 🖼️ */

const axios = require('axios');
const URL = `http://localhost:5000/drivers`


const getDrivers = async (req,res)=>{
    try {
          const {data} = await axios(`${URL}`)

          if (!data) {
            throw new Error('No se encontraron datos de los conductores');}
          
        const drivers = data.map((driver)=>({
            image: driver.image || "imagen por defecto lo cambiaré luego",
            name: driver.name.forename,
            team: driver.teams
        }))

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