import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  filter_created,
  get_all_games,
  order_BY_name,
  order_BY_rating,
  get_genres,
  filter_genres,
} from "../../redux/actions";
//*             3               1            2
import CardVideoGame from "../Card_Video_Game/CardVideoGame";
import Paginado from "./Paginado";
import Filters from "../Filters/Filters";

export default function Home() {
  const dispatch = useDispatch();

  //! Me traigo de REDUCER solo el ESTADO original de los juegos
  //*       100
  const all_games = useSelector((state) => state.video_game);

  //* PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamePerPage] = useState(15);
  //*           15      =      1      *       15
  const index_last_game = currentPage * videogamePerPage;
  //*          0         =      15         -       15
  const index_first_game = index_last_game - videogamePerPage;
  //*                  useSelector()           0                15
  const current_games = all_games.slice(index_first_game, index_last_game);
  const [, setOrder] = useState("");

  //* "paginado" va ayudar para el renderizado
  const paginado = (number_pages) => {
    setCurrentPage(number_pages);
  };

  useEffect(() => {
    dispatch(get_all_games());
    dispatch(get_genres());
  }, [dispatch]);

  const handle_click = (e) => {
    e.preventDefault();
    dispatch(get_all_games());
  };

  const handle_order_BY_name = (e) => {
    //* FUNCIONA
    e.preventDefault();
    dispatch(order_BY_name(e.target.value)); //! Es el payload
    setCurrentPage(1); //* Setea la pagina en la Primera
    setOrder(e.target.value);
  };

  function handle_filter_created(e) {
    //* FUNCIONA
    e.preventDefault();
    dispatch(filter_created(e.target.value)); //! Es el payload
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  const handle_order_BY_rating = (e) => {
    //* FUNCIONA
    e.preventDefault();
    dispatch(order_BY_rating(e.target.value)); //! Es el payload
    setCurrentPage(1);
    setOrder(e.target.value);
  };

  const handle_filter_genres = (e) => {
    //* FUNCIONA
    e.preventDefault();
    dispatch(filter_genres(e.target.value)); //! Es el payload
    setCurrentPage(1);
    setOrder(e.target.value);
  };

  return (
    <div>
      <Link to={"/created_video_games"}>Crear Video Juego</Link>
      <div>
        <button onClick={(e) => handle_click(e)}>
          RECARGAR TODOS LOS VIDEO JUEGOS
        </button>
      </div>
      <div>
        <Filters
          handle_order_BY_name={handle_order_BY_name}
          handle_filter_created={handle_filter_created}
          handle_order_BY_rating={handle_order_BY_rating}
          handle_filter_genres={handle_filter_genres}
        />
      </div>
      <div>
        <Paginado
          videogamePerPage={videogamePerPage}
          all_games={all_games.length}
          paginado={paginado}
        />
      </div>
      {current_games.length >= 1 ? (
        current_games.map((el) => {
          return (
            <div key={el.id} >
              <CardVideoGame
                key={el.id}
                id={el.id}
                name={el.name}
                image={el.image}
                genres={el.genres}
                rating={el.rating}
              />
            </div>
          );
        })
      ) : (
        <img
          src="https://img1.picmix.com/output/stamp/normal/8/5/2/9/509258_fb107.gif"
          alt="Img not found"
          width="350px"
        />
      )}
    </div>
  );
}
