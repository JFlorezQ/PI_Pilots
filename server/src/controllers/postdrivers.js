/* 📍 POST | /drivers
Esta ruta recibirá todos los datos necesarios para crear un driver y relacionarlo con sus teams solicitados.
Toda la información debe ser recibida por body.
Debe crear un driver en la base de datos, y este debe estar relacionado con sus teams indicados (al menos uno). */






const postDrivers = (req,res) =>{
    try {
        const character = req.body
    const characterFound= myFavorites.find(fav => fav.id === character.id);
    if(characterFound) throw Error('el personaje ya existe en favoritos')
    myFavorites.push(character);
    return res.status(200).json(myFavorites);}
        
     catch (error) {
      return res.status(404).send(error.message)
}}

module.exports = {
    postFav,
    deleteFav
}
