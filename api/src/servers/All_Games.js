const axios = require("axios");
require('dotenv').config()
//* Se invoca la configuracion ".config()" para que reconozca la variable de entorno => API_KEY
//! .env => es donde estan todas las variables de entorno

const { API_KEY } = process.env;
const url_api = 'https://api.rawg.io/api/games';
const info_DB = require('./Games_DB');
//! POR NOMBRE
//* https://api.rawg.io/api/games?search=Grand-Theft-Auto-V&key=1fdada09a1ba470984c5234110f3638f
//! POR PAGINA
//* https://api.rawg.io/api/games?key=1fdada09a1ba470984c5234110f3638f&page_size=100

const get_info_api = async (req, res) => {
  let { name } = req.query;

  let save_all_games = [];

  try {
    let game_DB = await info_DB.game_DB();
    
    let games_API = await axios(`${url_api}?search=${name}&key=${API_KEY}`);

    //* Aca me aguardo los GAMES de la API con la información necesaria
    let games_of_api = [];
    games_API.data.results.map(game => {
      let platforms_arr = [];
      if (!(game.platforms === null)) {
        platforms_arr = game.platforms.map(el => el.platform.name,);
      }
      games_of_api.push({
        id: game.id,
        name: game.name,
        released: game.released,
        image: game.background_image,
        rating: game.rating,
        platforms: platforms_arr,
        genres: game.genres.map(genero => genero.name),
      });
    });
    console.log('JUEGOS API:', games_of_api.length);

    save_all_games = game_DB.concat(games_of_api);
    console.log('JUEGOS DB + API:', save_all_games.length)
    if (name) {
      let filter_name = save_all_games.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
      console.log('USANDO TOLOWERCASE:', filter_name.length)
      
      let first_names = [];
      for (let i = 0; i < filter_name.length; i++) {
        first_names.push(filter_name[i]);
        if (first_names.length === 15) {
          first_names = first_names;
          console.log('DESPUES DEL PUSH:', first_names.length)
          first_names.length ? res.json(first_names) : res.send("No existe el Video Juego que buscas.");
        }
      }
    } else {
      //* Se guardan las Paginas en este arreglo
      let pages_of_api = [];
      for (let i = 1; i < 6; i++) {
        pages_of_api.push(await axios.get(`${url_api}?key=${API_KEY}&page=${i}`));
      }
      //* Se RE-UTILIZA la variable para la info necesaria
      let game_of_api = await Promise.all(pages_of_api.map(page => page.data.results.map(game => {
        return {
          id: game.id,
          name: game.name,
          released: game.released,
          image: game.background_image,
          rating: game.rating,
          platforms: game.platforms.map(el => el.platform.name,),
          genres: game.genres.map(genero => genero.name),
        };
      }))).catch(error => console.log(`Error en mi PromiseAll por: (${error})`));
      save_all_games = game_DB.concat(game_of_api).flat(Infinity);
      console.log('TODOS LOS JUEGOS:', save_all_games.length);
      res.json(save_all_games);
    }    
  } catch (error) {
    res.send(`Se presentó un error en la ruta principal por: (${error})`);
  }
}

module.exports = { get_info_api }