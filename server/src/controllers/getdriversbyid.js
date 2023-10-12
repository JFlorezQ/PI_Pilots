/* GET | /drivers/:idDriver
Esta ruta obtiene el detalle de un driver específico. 
Es decir que devuelve un objeto con la información pedida en el detalle de un driver.
El driver es recibido por parámetro (ID).
Tiene que incluir los datos del/los team/s del driver al que está asociado.
Debe funcionar tanto para los drivers de la API como para los de la base de datos. 

deberá mostrar toda la información específica de un corredor:
ID.
Nombre.
Apellido.
Nacionalidad.
Imagen.
Descripción.
Fecha de Nacimiento.
Escuderías.*/

const axios = require('axios');
const URL = `http://localhost:5000/drivers`;
const{Driver} = require('../db.js')

const getDriverById = async (req, res) => {
  try {
    const { id } = req.params;

    const uuidRegExp = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

    let driver;
    
    //evalua si el id es un integro

    if (/^\d+$/.test(id)) {
      // Si el ID es un número, busca el conductor en la API
      const response = await axios.get(`${URL}/${id}`);

      if (!response.data.name) {
        throw new Error(`Faltan datos del conductor con ID: ${id}`);
      }
      // Si encuentra el id, la constante driver toma estos datos
      driver = {
        id: response.data.id,
        name: response.data.name.forename,
        surname: response.data.name.surname,
        nationality: response.data.nationality,
        description: response.data.description,
        image: response.data.image,
        dob: response.data.dob,
        teams: response.data.teams,
      };
    } else if (uuidRegExp.test(id)) {
      // Si el ID es un UUID, busca el conductor en la base de datos
      const driverFromDB = await Driver.findByPk(id);

      //Si no lo encuentra en la base de datos tira el error

      if (!driverFromDB) {
        throw new Error(`Faltan datos del conductor con ID: ${id}`);
      }

      //Si encuentra el id driver toma estos datos


      driver = {
        id: driverFromDB.id,
        name: driverFromDB.name,
        surname: driverFromDB.surname,
        nationality: driverFromDB.nationality,
        description: driverFromDB.description,
        image: driverFromDB.image,
        dob: driverFromDB.dob,
        teams: driverFromDB.teams,
      };
    }

    else { throw new Error(`${id} es un tipo de dato incorrecto`)}
    // de cualquier modo si no hay error retorna driver
 
    return res.status(200).json(driver);
 
} catch (error) {
    if (error.response) {
      return res.status(500).send(error.response.data.error);
    } else {
      return res.status(404).send(error.message);
    }
  }
};

module.exports = { getDriverById };
