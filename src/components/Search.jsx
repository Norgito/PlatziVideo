import React from "react";

import "../assets/styles/components/Search.scss";

const Search = () => {

  return (
    <section className="main">
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <div className="espacio">
      </div>
      <input type="text" className="input_search" placeholder="Buscar..." />
    </section>
  );
};

export default Search;



