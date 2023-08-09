import axios from "axios";

export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const GET_DETAIL = "GET_DETAIL";
export const CREATE_GAME = "CREATE_GAME";
export const GET_GENRES = "GET_GENRES";
export const FILTER_CREATED = "FILTER_CREATED";
export const FILTER_GENRES = "FILTER_GENRES";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";

export const get_all_games = () => async (dispatch) => {
  try {
    let res = await axios(`/videogames`);
    return dispatch({
      type: GET_ALL_GAMES,
      payload: res.data,
    });
  } catch (error) {
    console.log(`No se pudo traer todo los juegos por: (${error})`);
  }
};

export const search_BY_name = (name) => async (dispatch) => {
  try {
    let res = await axios(`/videogames?name=${name}`);
    return dispatch({
      type: SEARCH_BY_NAME,
      payload: res.data,
    });
  } catch (error) {
    console.log(`No se pudo realizar la busqueda del nombre por: (${error})`);
  }
};

export const get_detail = (id) => async (dispatch) => {
  //! OJO, del archivo "Details.jsx" se imprime las "prop" para visualizar como llega el ID
  try {
    let res = await axios(`/videogames/${id}`);
    return dispatch({
      type: GET_DETAIL,
      payload: res.data,
    });
  } catch (error) {
    console.log(`No se puede visualizar el detalle de juego por: (${error})`);
  }
};

export const create_game = (post) => async (dispatch) => {
  try {
    let res = await axios.post(`/videogames`, post);
    return dispatch({
      type: CREATE_GAME,
      payload: res.data,
    });
  } catch (error) {
    console.log(`Hubo un error al tratar de crear un nuevo juegos por: (${error})`);
  }
};

export const get_genres = () => async (dispatch) => {
  try {
    let res = await axios(`/genres`);
    return dispatch({
      type: GET_GENRES,
      payload: res.data,
    });
  } catch (error) {
    console.log(`No se pudo obtener lo generos del juego por: (${error}).`);
  }
};

export const filter_genres = (value) => {
  return {
    type: FILTER_GENRES,
    payload: value,
  };
};

export const filter_created = (value) => {
  return {
    type: FILTER_CREATED,
    payload: value,
  };
};

export const order_BY_name = (value) => {
  return {
    type: ORDER_BY_NAME,
    payload: value,
  };
};

export const order_BY_rating = (value) => {
  return {
    type: ORDER_BY_RATING,
    payload: value,
  };
};
