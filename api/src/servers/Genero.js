const { Genre } = require("../db.js");
const axios = require("axios");
const { API_KEY } = process.env;
const url_api = 'https://api.rawg.io/api/genres';

//* https://api.rawg.io/api/genres?key=8ccfbb79fdb94583832dc05638e5f6ef

const generos_api = async (_req, res) => {
  try {
    const data_API = await axios(`${url_api}?key=${API_KEY}`);
    //* Aca me guardo la INFO que necesito de la API
    let generos_API = data_API.data.results.map((genero) => {
      return {
        id: genero.id,
        name: genero.name,
      };
    }).sort((a, b) => a.id - b.id); //! Aca inicialmente da 19

    //* Aca me guardo la INFO de mi DB
    //! NOTA: Mientras se carga la DB inicialmente da CERO
    let genero_DB = await Genre.findAll();

    let genero = [];
    //* Aca inicialmente entra, por que no tiene nada
    if (!genero_DB.length) {
      //* Junto la INFO tanto de mi API como de mi DB
      genero = await Genre.bulkCreate(generos_API);
      return res.json(genero);
    }     

    res.json(generos_API);
  } catch (error) {
    res.send(`Hubo un error con los generos por: (${error})`);
  }
}

module.exports = { generos_api };