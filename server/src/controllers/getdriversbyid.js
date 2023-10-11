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

const getDriverById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios.get(`${URL}/${id}`);

        if (!data.name) {
            throw new Error(`Faltan datos del conductor con ID: ${id}`);
        }
        
        const driver = {
            id: data.id,
            name: data.name.forename,
            surname: data.name.surname,
            nationality: data.nationality,
            description: data.description,
            image: data.image,
            dob: data.dob,
            teams: data.teams
        };

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

