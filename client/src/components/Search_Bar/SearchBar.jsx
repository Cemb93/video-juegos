import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { search_BY_name } from "../../redux/actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  // console.log('NOMBRE:', name)

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(search_BY_name(name));
    setName("");
    // if (!name.length) {
    //   alert("Please enter a game");
    // } else {
    // }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input
          type="text"
          value={name}
          placeholder="Search game ..."
          onChange={(e) => handleInputChange(e)}
        />
        <button type="submit" >Buscar</button>
      </div>
    </form>
  );
}
