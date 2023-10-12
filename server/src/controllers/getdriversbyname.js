/* 📍 GET | /drivers/name?="..."
Esta ruta debe obtener los primeros 15 drivers que se encuentren con la palabra recibida por query.
Debe poder buscarlo independientemente de mayúsculas o minúsculas.
Si no existe el driver, debe mostrar un mensaje adecuado.
Debe buscar tanto los de la API como los de la base de datos.*/

const axios = require('axios');
const URL = `http://localhost:5000/drivers`;
const{Driver} = require('../db.js')


const getDriverByName = async (req, res) => {
  try {
    console.log('Entró al controlador getDriverByName');

    const { name } = req.query;
    if (!name) {
      return res.status(400).json({ error: 'Por favor, proporciona un nombre en la consulta.' });
    }

    // Obtener datos de la API
    const apiResponse = await axios.get(`${URL}`);
    const apiDrivers = apiResponse.data || [];

    // Obtener datos de la base de datos
    const databaseDrivers = await Driver.findAll();

    // Filtrar los conductores de la API que coinciden con el nombre (sin distinción entre mayúsculas y minúsculas)
    const matchingDriversAPI = apiDrivers.filter((driver) => {
      const forename = driver.name.forename || '';
      const surname = driver.name.surname || '';
      return (forename + ' ' + surname).toLowerCase().includes(name.toLowerCase());
    });

    // Filtrar los conductores de la base de datos que coinciden con el nombre (sin distinción entre mayúsculas y minúsculas)
    const matchingDriversDB = databaseDrivers.filter((driver) => {
      return driver.name.toLowerCase().includes(name.toLowerCase());
    });

    // Combinar datos de la API y la base de datos
    const matchingDrivers = [...matchingDriversAPI, ...matchingDriversDB];

    // Tomar los primeros 15 conductores que coinciden
    const first15MatchingDrivers = matchingDrivers.slice(0, 15);

    if (first15MatchingDrivers.length === 0) {
      return res.status(404).json({ error: `No se encontraron conductores con el nombre: ${name}` });
    }

    const driversName = first15MatchingDrivers.map((driver) => ({
      image: driver.image || '../Images/Defaultimage.png',
      name: `${driver.name.forename} ${driver.name.surname}`,
      team: driver.teams || [], 
    }));

    return res.status(200).json(driversName);
  } catch (error) {
    console.error('Error en getDriverByName:', error);
    return res.status(500).send('Error en el servidor');
  }
};

module.exports = { getDriverByName };
