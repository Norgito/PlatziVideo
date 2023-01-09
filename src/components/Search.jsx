import React from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { searchRequest } from "../actions";
import "../assets/styles/components/Search.scss";

const Search = ({ isHome }) => {
  const dispatch = useDispatch();
  const inputStyle = classNames("input", {
    isHome,
  });

  const handleSearch = (e) => {
    dispatch(searchRequest(e.target.value));
  }

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <div className="espacio"></div>
      <input type="text" className={inputStyle} placeholder="Buscar..." onChange={handleSearch} />
    </section>
  );
};

export default Search;
