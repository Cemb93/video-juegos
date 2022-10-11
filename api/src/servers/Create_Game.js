const { Videogame, Genre } = require("../db.js");

const post_character = async (req, res,) => {
  const { name, description, released, image, rating, platforms, genres } = req.body;

  try {
    if (name && description && platforms.length > 0) {
      let new_game = await Videogame.create({ name, description, released, image, rating, platforms });
      // console.log('NUEVO JUEGO:', new_game.__proto__);
      let generos_DB = await Genre.findAll({ where: { name: genres } });
      // console.log('GENEROS DB:', generos_DB)
      await new_game.addGenre(generos_DB);
      // console.log('GENERO AÑADIDO:', new_game);
      res.json(new_game);
    } else {
      res.send('No has agregado los datos que son obligatorios para la creación de tu video juego');
    }
  } catch (error) {
    res.send(`No se pudo crear correctamente el GAME por: (${error})`);
  }
}

module.exports = { post_character }