import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "../Search_Bar/SearchBar";

export default function Filters({ handle_filter_created, handle_order_BY_name, handle_order_BY_rating, handle_filter_genres, }) {
  const all_genres = useSelector((state) => state.genres);

  return (
    <div>
      <div>
        <SearchBar />
      </div>

      <div>
        <select onChange={(e) => handle_filter_created(e)}>
          <option>Games</option>
          <option value="All">All</option>
          <option value="Created">Created</option>
          <option value="Api">Api</option>
        </select>

        <select onChange={(e) => handle_order_BY_name(e)}>
          <option>Order Name</option>
          <option value="Ascendente">A - Z</option>
          <option value="Descendente">Z - A</option>
        </select>

        <select onChange={(e) => handle_order_BY_rating(e)}>
          <option>Rating</option>
          <option value="Top">Rating Top</option>
          <option value="Low">Rating Low</option>
        </select>

        <select onChange={(e) => handle_filter_genres(e)}>
          <option>Genres</option>
          <option value="All">All</option>
          {
            all_genres.length >= 1 && all_genres.map(genre => {
              return (
                <option key={genre.name} value={genre.name}>{genre.name}</option>
              )
            })
          }
        </select>
      </div>
    </div>
  );
}
