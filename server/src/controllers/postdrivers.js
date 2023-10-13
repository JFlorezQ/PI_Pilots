/* 📍 POST | /drivers
Esta ruta recibirá todos los datos necesarios para crear un driver y relacionarlo con sus teams solicitados.
Toda la información debe ser recibida por body.
Debe crear un driver en la base de datos, y este debe estar relacionado con sus teams indicados (al menos uno). */

const{Driver, Team} = require('../db.js')


const postDrivers = async (req,res) => {
    try {
              const { name, description, image, nationality, dob, teams } = req.body;
          
             
              // Crea el conductor en la base de datos
              const newDriver = await Driver.create({
                forename: name.forename,
                surname: name.surname, 
                description: description, 
                image: image,
                nationality: nationality, 
                dob: dob
              });
        

        //a partir del dato enviado en el body, recuperamos la PK del equipo
 // Buscar la clave primaria (id) del equipo
 const nombreEquipoBuscado = teams; // Reemplaza con el nombre que estás buscando

 Team.findOne({
   where: {
     name: nombreEquipoBuscado,
   },
 })
   .then((equipoEncontrado) => {
     if (equipoEncontrado) {
       const foreingKey = equipoEncontrado.id;
       console.log(foreingKey);

       // Relaciona el conductor con los equipos proporcionados
       newDriver.addTeam(foreingKey);}})

   

        
              return res.status(201).json({ message: 'Conductor creado con éxito' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
        }}


module.exports = {
    postDrivers
}



