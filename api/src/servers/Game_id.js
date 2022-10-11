const { Videogame, Genre } = require("../db.js");
const axios = require("axios");
require('dotenv').config()
const { API_KEY } = process.env;
const url_api = "https://api.rawg.io/api/games";
//* https://api.rawg.io/api/games/3328?key=1fdada09a1ba470984c5234110f3638f

//! ------------------

// const data_ID_api = async (req, res) => {
//   const { id } = req.params;

//   let id_of_API = {};

//   const id_BY_api = await axios.get(`${url_api}/${id}?key=${API_KEY}`);
//   console.log('IDS DE API:', id_BY_api.data);
  
//   id_of_API["id"] = id_BY_api.data.id;
//   id_of_API.image = id_BY_api.data.background_image;
//   id_of_API["name"] = id_BY_api.data.name;
//   id_of_API.genres = id_BY_api.data.genres.map((genero) => genero.name);
//   id_of_API["description"] = id_BY_api.data.description_raw;
//   id_of_API.released = id_BY_api.data.released;
//   id_of_API["rating"] = id_BY_api.data.rating;
//   id_of_API.platforms = id_BY_api.data.platforms.map((el) => el.platform.name);
//   console.log('OBJETO DEL ID API:', id_of_API);
//   return res.json(id_of_API);
// };

//! ------------- Se busca un VIDEO-GAME por el ID, tanto de la DB como de la API -----------------

const get_BY_id = async (req, res) => {
  const { id } = req.params;
  try {
    if (id.includes("-")) {
      let id_DB = await Videogame.findByPk(id, {
        include: {
          model: Genre,
          attributes: ["name"],
          through: { attributes: [], },
        },
      });
      return res.json(id_DB);
    } 
    else {
      // return await data_ID_api(req, res);

      const videogame = await axios.get(`${url_api}/${id}?key=${API_KEY}`);

      //* DSTRUCTURANDO EL OBJETO
      const { name, background_image, released, rating, platforms, genres, description_raw } = await videogame.data;
      console.log('MIS IMAGENES DESDE EL BACK:', background_image)

      const game = {
        id,
        name,
        image: background_image,
        released,
        rating,
        platforms: platforms.map((el) => el.platform.name),
        genres: genres.map((el) => el.name),
        description: description_raw,
      };
      res.json(game);
    }
  } catch (error) {
    res.status(404).json(`Error en: (${error}), ID no encontrado`);
  }
};

//! ---------- Se ELIMINA un VIDEO-GAME segun su ID de la DB ---------------

const delete_game = async (req, res) => {
  const { id } = req.params;
  try {
    if (id.includes("-")) {
      let delete_game_DB = await Videogame.destroy({
        where: { id, },
      });
      res.send({ msg: 'The game created in DB has been deleted'});
    }
  } catch (error) {
    res.send(`Hubo un ERROR al eliminar el GAME por: (${error})`);
  }
};

//! ---------- Se ACTUALIZA el VIDEO-GAME segun si ID de la DB ---------------

const update = async (req, res) => {
  const { id } = req.params;
  const videogame = req.body;

  try {
    let game = await Videogame.update(videogame, {
      where: {
        id,
      }
    });
    res.json({ cambiado: 'Se actualizo el juego correctamente', });
  } catch (error) {
    res.send(`No se pudo actualizar el juego por: (${error}).`);
  }
};

module.exports = { get_BY_id, delete_game, update };
