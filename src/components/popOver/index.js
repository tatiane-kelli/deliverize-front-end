import React from "react";
import "./styles.css";

const Popover = () => {
  return (
    <div className="container">
      <div className="popover__title">
        <span>Adicionado com Sucesso</span>
      </div>
      <div className="popover__content">
        <h3>Oferta cheddar bacon</h3>
        <span>Ingredientes</span>
        <ul>
          <li>1 Carne 250gr</li>
          <li>2 Queijo cheddar</li>
          <li>1 Bacon</li>
          <li>Molho especial</li>
        </ul>
      </div>
    </div>
  );
}

export default Popover;