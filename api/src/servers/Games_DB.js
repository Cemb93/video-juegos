const { Videogame, Genre } = require("../db.js");

const game_DB = async () => {
  try {
    let games_DB = await Videogame.findAll({
      include: {
        model: Genre,
        attributes: ["name"],
        through: { attributes: [], },
      },
    });
    //* Se cambia el formato para una mejor visualizacion
    games_DB = JSON.parse(JSON.stringify(games_DB));
    return games_DB;
  } catch (error) {
    console.log(`No hay ningun GAME en la DB por: (${error}).`);
  }
}

module.exports = { game_DB }