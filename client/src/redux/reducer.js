import {
  GET_ALL_GAMES,
  SEARCH_BY_NAME,
  GET_GENRES,
  CREATE_GAME,
  FILTER_CREATED,
  FILTER_GENRES,
  GET_DETAIL,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
} from "./actions";

const initial_state = { all_games: [], video_game: [], genres: [], detail: {} };

const reducers = (state = initial_state, action) => {
  switch (action.type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        video_game: action.payload,
        all_games: action.payload, //* ESTA ES LA COPIA Y NO SALE DEL REDUCER
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        video_game: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case CREATE_GAME:
      return {
        ...state,
      };
    case FILTER_CREATED: //* FUNCIONA
      let all_the_games = state.all_games;
      let filter_created =
        action.payload === "All"
          ? all_the_games
          : all_the_games.filter((el) =>
              action.payload === "Created" ? el.createdInDb : !el.createdInDb
            );
      return {
        ...state,
        video_game: filter_created,
      };
    case FILTER_GENRES: //* FUNCIONA
      const all_games_2 = state.all_games;
      const filter_genres =
        action.payload === "All"
          ? all_games_2
          : all_games_2.filter(
              (el) => el.genres && el.genres.includes(action.payload)
            );
      return {
        ...state,
        video_game: filter_genres,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case ORDER_BY_NAME: //* FUNCIONA
      let order_BY_name =
        action.payload === "Ascendente"
          ? state.video_game.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : state.video_game.sort((a, b) => {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              return 0;
            });
      return {
        ...state,
        video_game: order_BY_name,
      };
    case ORDER_BY_RATING: //* FUNCIONA
      let order_BY_rating =
        action.payload === "Low"
          ? state.video_game.sort(function (a, b) {
              if (a.rating > b.rating) return 1;
              if (b.rating > a.rating) return -1;
              return 0;
            })
          : state.video_game.sort(function (a, b) {
              if (a.rating > b.rating) return -1;
              if (b.rating > a.rating) return 1;
              return 0;
            });
      return {
        ...state,
        video_game: order_BY_rating,
      };
    default:
      return state;
  }
};

export default reducers;
