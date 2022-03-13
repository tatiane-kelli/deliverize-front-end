import React from "react";
import Header from "../components/header";
//import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import "./styles.css";

const Product = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="snack__info">
          <img src="PicanhaBacon.svg" alt="Oferta Picanha Cheddar Bacon" />
          <h3>
            Oferta Picanha Cheddar Bacon
          </h3>
          <p style={{color: "#4E4E4E", fontSize: "20px", lineHeight: "24px"}}>
            Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, <br/>
            queijo cheddar, molho cheddar e pão mix de gergelim.
          </p>
          <div id="prices">
          <p style={{color: "#DC6E05"}}>
            R$31,99
          </p>
          <p style={{color: "#4E4E4E",
                    paddingLeft: "15px",
                    textDecoration: "line-through"}}
          >
            R$34,95
          </p>
          </div>
          
        </div>
        <div className="additional__orders">
          <div className="retangle">
            <p id="add__ingredients">
              Adicionar ingredientes
            </p>
            <p id="max-ingredients">
              Até 8 ingredientes.
            </p>
          </div>
          <div className="extra__ingredient">
            <p className="extra__item">Queijo cheddar</p>
            <p className="price">+R$4,99</p>
          </div>
          <div className="yellow-line"/>
          <div className="extra__ingredient">
            <p className="extra__item">Cebola crispy</p>
            <p className="price">+R$1,50</p>
          </div>
          <div className="yellow-line"/>
          <div className="extra__ingredient">
            <p className="extra__item">Molho cheddar</p>
            <p className="price">+R$3,50</p>
          </div>
          <div className="yellow-line"/>
          <div className="extra__ingredient">
            <p className="extra__item">Molho de picanha</p>
            <p className="price">+R$3,50</p>
          </div>
          <div className="yellow-line"/>
          <div className="retangle">
            <p id="cutlery">
              Precisa de Talher?
            </p>
          </div>
          <div className="board__footer">
            <button>Adicionar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
