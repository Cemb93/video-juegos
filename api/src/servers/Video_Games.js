const axios = require("axios");
require('dotenv').config()
//* Se invoca la configuracion ".config()" para que reconozca la variable de entorno => API_KEY
//! .env => es donde estan todas las variables de entorno

const { API_KEY } = process.env;
const url_api = "https://api.rawg.io/api/games";
const info_DB = require("./Games_DB");

const get_info_api = async function (req, res) {
  let { name } = req.query;
  //* Aca me guardo TODOS los juegos, tanto los del endpoint de busqueda como los creados
  let save_all_games = [];
  try {
    let game_DB = await info_DB.game_DB();
    console.log("EXPORTANTO SEARCH-NAME PARA LA QUERY:", game_DB.length);

    let games_API = await axios(`${url_api}?search=${name}&key=${API_KEY}`);

    //* Aca me aguardo los GAMES de la API con la información necesaria
    let games_of_api = [];
    games_API.data.results.map((game) => {
      let arr_plataforma = [];
      if (!(game.platforms === null)) {
        arr_plataforma = game.platforms.map((el) => el.platform.name);
      }
      
      games_of_api.push({
        id: game.id,
        name: game.name,
        released: game.released,
        image: game.background_image,
        rating: game.rating,
        platforms: arr_plataforma,
        genres: game.genres.map((genero) => genero.name),
      });
    });

    save_all_games = game_DB.concat(games_of_api);
    console.log("TODO ANTES DE QUERY:", save_all_games.length);

    if (name) {
      let filter_name = save_all_games.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      console.log("USANDO TOLOWERCASE:", filter_name.length);

      let first_names = [];
      for (let i = 0; i < filter_name.length; i++) {
        first_names.push(filter_name[i]);
        if (first_names.length === 15) {
          first_names = first_names;
          console.log("DESPUES DEL PUSH:", first_names.length);
        }
      }
      first_names.length
        ? res.json(first_names)
        : res.status(404).send("No existe el Video Juego.");
    } else {
      //* Se guardan las Paginas en este arreglo
      let pages_of_api = [];
      for (let i = 1; i < 2; i++) {
        pages_of_api.push(
          await axios.get(`${url_api}?key=${API_KEY}&page=${i}`)
        );
        // pages_of_api.push(await fetch(`${url_api}?key=${API_KEY}&page=${i}`).then(res => console.log('PAGE FETCH:', res)));
      }

      Promise.all(pages_of_api)
        .then((response) => {
          //* Aca me guardo el # cantidad de PAGINAS que quiera
          let pages = [];
          for (let i = 0; i < response.length; i++) {
            pages = pages.concat(response[i].data.results);
          }

          //* Aca me guardo los GAMES de la API con la INFO que necesito
          let juegos = [];
          pages.forEach((game) => {
            juegos.push({
              id: game.id,
              name: game.name,
              released: game.released,
              image: game.background_image,
              rating: game.rating,
              platforms: game.platforms.map((el) => el.platform.name),
              genres: game.genres.map((genero) => genero.name),
            });
          });
          save_all_games = [...juegos];
        })
        .catch((error) =>
          console.log(`Error en mi PromiseAll por: (${error})`)
        );

      //* Me traigo TODO lo que tengo en mi Base de Datos
      let game_DB = await info_DB.game_DB();
      console.log("EXPORTANTO SEARCH-NAME PARA LA GLOBAL:", game_DB.length);
      save_all_games = game_DB.concat(save_all_games);
      console.log("TOTAL DE OBJETOS:", save_all_games.length); //! RESULTADO
      res.json(save_all_games);
    }
  } catch (error) {
    res.send(`No se pudo renderizar los juegos por: (${error})`);
  }
};

module.exports = { get_info_api };
