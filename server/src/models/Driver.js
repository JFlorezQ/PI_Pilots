const { DataTypes } = require('sequelize');

// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Driver = sequelize.define('Driver', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    forename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [20, 256], // Asegura que la longitud esté entre 20 y 256 caracteres
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, { timestamps: false });

  return Driver;
};
