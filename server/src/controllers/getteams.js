/* 📍 GET | /teams
Obtiene un arreglo con todos los teams existentes de la API.
En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los teams que encuentres en la API.
Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo).
Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí. */
const axios = require('axios');
const URL = `http://localhost:5000/drivers`
const getteams = async (req,res)=>{
    try {
          const {data} = await axios(`${URL}`)

          if(!data.name) throw new Error(`Faltan datos del personaje de ID: ${id}`);
         
            const driver ={
                image: data.image,
                name: data.name.forename && " " && data.name.surname,
                team: data.teams
            }
            return res.status(200).json(driver)}
       
    catch (error) {
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)
    }
}

    
module.exports ={getteams}