/* 📍 GET | /teams
Obtiene un arreglo con todos los teams existentes de la API.
En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los teams que encuentres en la API.
Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo).
Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí. */
const axios = require('axios');
const{Team} = require('../db.js')
const URL = `http://localhost:5000/drivers`

const getteams = async (req, res) => {
  try {

    const count = await Team.count();

    //si la base de datos se encuentra vacía traemos los datos de la API

    if(count== 0){
        const { data } = await axios(URL);

    if (!data) {
      throw new Error('Faltan datos de la API');
    }

    console.log('Ya recuperó datos de la API');

    // Obtener todos los equipos de todos los conductores en un solo arreglo, para esto se utiliza data que vuelve nuestros datos en un solo elemento (arreglo)
    const teams = data.reduce((allTeams, driver) => { 

    // Debemos verificar que exista la propiedad Teams en el conductor
      if (driver.teams !== undefined) {

        // si existe esta propiedad, por cada conductor se crea un arreglo de teams separando las palabras por coma y borrando el espacio
        // esto porque los teams vienen como strings
        const teamsSeparated = driver.teams.split(',').map((team) => team.trim());
        console.log(teamsSeparated);

        // se concatenan todos los arrays de los equipos de cada conductor en el array creado para data que se llama allTeams
        allTeams = allTeams.concat(teamsSeparated); 
      }

      if(!allTeams) throw new Error ("Falló el convertir los equipos a array")


      return allTeams;
    }, []);

    // Eliminar duplicados utilizando un conjunto (Set) (pues este no permite repetidos) y luego convertirlo nuevamente en un arreglo
    const uniqueTeams = Array.from(new Set(teams));
    console.log(uniqueTeams.length)

    if(!uniqueTeams) throw new Error ("Falló al eliminar los repetidos")

    console.log("ya obtuvo el arreglo de equipos unicos")
  


    //Ahora se deben enviar los equipos a la base de datos

    // Inserta el arreglo de equipos en la base de datos
    //se mapea uniqueteams para obtener los nombres de los equipos
    await Team.bulkCreate(uniqueTeams.map((teamName) => ({ name: teamName }))
    );
         
     console.log('Equipos insertados en la base de datos.')}
    
    
    // Se recuperan los datos de la base de datos

     // Consultar los datos del modelo Team en su propiedad nombre

     const databaseTeams = await Team.findAll()

    
    return res.status(200).json(databaseTeams); 

  } catch (error) {
    if (error.response) {
      return res.status(500).send(error.response.data.error);
    } else {
      return res.status(404).send(error.message);
    }
  }
};

module.exports = { getteams };

