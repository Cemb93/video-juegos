const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    //* Fecha de lanzamiento
    released: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.FLOAT,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      // type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: [],
      allowNull: false,
    },
    //! Informacion Adicional
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://www.xtrafondos.com/wallpaper/3840x2160/6406-parado-en-el-borde-de-dos-mundos.html",
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    timestamps: false,
  });
};
