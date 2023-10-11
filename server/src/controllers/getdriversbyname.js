/* 📍 GET | /drivers/name?="..."
Esta ruta debe obtener los primeros 15 drivers que se encuentren con la palabra recibida por query.
Debe poder buscarlo independientemente de mayúsculas o minúsculas.
Si no existe el driver, debe mostrar un mensaje adecuado.
Debe buscar tanto los de la API como los de la base de datos.*/
const axios = require('axios');
const URL = `http://localhost:5000/drivers`;

const getDriverByName = async (req, res) => {
    try {
        
         console.log('Entró al controlador getDriverByName'); // Agregar registros
        
        const { name } = req.query;
        if (!name) {
            return res.status(400).json({ error: 'Por favor, proporciona un nombre en la consulta.' });
        }

        const { data } = await axios.get(URL);

        if (!data || data.length === 0) {
            return res.status(404).json({ error: `No se encontraron conductores` });
        }

        // Filtrar los conductores que coinciden con el nombre (sin distinción entre mayúsculas y minúsculas)
        const matchingDrivers = data.filter((driver) => {
            return driver.name.forename.toLowerCase().includes(name.toLowerCase());
        });

        // Tomar los primeros 15 conductores que coinciden
        const first15MatchingDrivers = matchingDrivers.slice(0, 15);

        if (first15MatchingDrivers.length === 0) {
            return res.status(404).json({ error: `No se encontraron conductores con el nombre: ${name}` });
        }

        const driversName = first15MatchingDrivers.map((driver) => ({
            image: driver.image || 'imagen-por-defecto.jpg', // Reemplaza con la ruta de tu imagen por defecto
            name: driver.name.forename,
            team: driver.teams,
        }));

        return res.status(200).json(driversName);
    } catch (error) {
        console.error('Error en getDriverByName:', error)
        if (error.response) {
            return res.status(500).send(error.response.data.error);
        } else {
            return res.status(500).send(error.message);
        }
    }
};

module.exports = { getDriverByName };
