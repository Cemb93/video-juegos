import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { create_game, get_genres } from "../../redux/actions";
import { validation } from "./Form_Validation.js";

export default function CreateVideoGame() {
  const dispatch = useDispatch();
  const history = useHistory();
  const genres = useSelector((state) => state.genres);
  const [errors, setErrors] = useState({});

  const platforms_api = [
    "PC",
    "PlayStation 5",
    "PlayStation 4",
    "PlayStation 3",
    "Xbox One",
    "Xbox Series S/X",
    "Xbox 360",
    "Xbox",
    "Nintendo Switch",
    "Nintendo 3DS",
    "Nintendo DS",
    "Nintendo DSi",
    "iOS",
    "Android",
    "macOS",
    "Linux",
  ];

  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: [],
    image: "",
    genres: [],
  });

  function handlerChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handler_select_platforms(e) {
    setInput({
      ...input,
      platforms: input.platforms.includes(e.target.value)
        ? input.platforms
        : [...input.platforms, e.target.value],
    });
  }

  function handler_delete_platforms(elemento) {
    setInput({
      ...input,
      platforms: input.platforms.filter((platform) => platform !== elemento),
    });
  }

  function handler_select_genres(e) {
    setInput({
      ...input,
      genres: input.genres.includes(e.target.value)
        ? input.genres
        : [...input.genres, e.target.value],
    });
  }

  function handler_delete_genres(elemento) {
    setInput({
      ...input,
      genres: input.genres.filter((genre) => genre !== elemento),
    });
  }

  function handlerSubmit(e) {
    e.preventDefault();
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );

    if (Object.keys(errors).length === 0) {
      dispatch(create_game(input));
      alert("Has creado un nuevo Video Juego!!! 🤩");

      //* Seteo todo el input desde CERO
      setInput({
        name: "",
        description: "",
        released: "",
        rating: "",
        platforms: [],
        image: "",
        genres: [],
      });
      history.push("/home");
    } else {
      alert("No has creado ningun Video Juego 🤨");
    }
  }

  useEffect(() => {
    dispatch(get_genres());
  }, [dispatch]);

  return (
    <div>
      <h1>Create un Video Juego</h1>

      <form onSubmit={(e) => handlerSubmit(e)}>
        <div>
          <label>
            Name: <br></br>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Videogame"
            value={input.name}
            onChange={(e) => handlerChange(e)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <br></br>

        <div>
          <label>
            Description: <br></br>
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="Enter a description"
            value={input.description}
            onChange={(e) => handlerChange(e)}
          />
          {errors.description && <p>{errors.description}</p>}
        </div>

        <br></br>

        <div>
          <label>
            Image: <br></br>
          </label>
          <input
            type="text"
            name="image"
            placeholder="Img URL"
            value={input.image}
            onChange={(e) => handlerChange(e)}
          />
        </div>

        <br />

        <div>
          <label>
            Released: <br></br>
          </label>
          <input
            type="date"
            name="released"
            value={input.released}
            onChange={(e) => handlerChange(e)}
          />
          {errors.released && <p>{errors.released}</p>}
        </div>

        <br></br>

        <div>
          <label>
            Platforms: <br></br>
          </label>
          <select onChange={(e) => handler_select_platforms(e)}>
            <option>Elije mínimo una Plataforma</option>
            {platforms_api.map((platform, index) => (
              <option key={index} value={platform}>
                {platform}
              </option>
            ))}
          </select>
          {input.platforms.map((el, index) => (
            <div key={index}>
              <p>{el}</p>
              <button onClick={() => handler_delete_platforms(el)}>X</button>
            </div>
          ))}
          {errors.platforms && <p>{errors.platforms}</p>}
        </div>

        <div>
          <label>
            Rating: <br></br>
          </label>
          <input
            type="number"
            name="rating"
            placeholder="0.00 - 5.00"
            step={0.01}
            min={0.0}
            max={5}
            value={input.rating}
            onChange={(e) => handlerChange(e)}
          />
        </div>

        <br></br>

        <div>
          <label>
            Genres: <br></br>
          </label>
          <select onChange={(e) => handler_select_genres(e)}>
            <option>Elije mínimo un Genero</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.name}>
                {genre.name}
              </option>
            ))}
          </select>
          {input.genres.map((el, index) => (
            <div key={index}>
              <p>{el}</p>
              <button onClick={() => handler_delete_genres(el)}>X</button>
            </div>
          ))}
        </div>

        <button type="submit">Crear Video Juego</button>
        <br />
        <Link to={"/home"}>
          <button>Regresar</button>
        </Link>
      </form>
    </div>
  );
}
