import React from "react";
import Header from "../components/Header";
import "./styles.css";

const Product = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="snack__info">
          <img src="PicanhaBacon.svg" alt="Oferta Picanha Cheddar Bacon" />
          <h3 style={{color: "#4E4E4E", fontSize: "28px", lineHeight: "28px"}}>
            Oferta Picanha Cheddar Bacon
          </h3>
          <p style={{color: "#4E4E4E", fontSize: "20px", lineHeight: "24px"}}>
            Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, <br/>
            queijo cheddar, molho cheddar e pão mix de gergelim.
          </p>
          <div style={{display:"flex"}}>
          <p style={{color: "#DC6E05", fontSize: "32px", lineHeight: "38.4px"}}>
            R$31,99
          </p>
          <p style={{color: "#4E4E4E", fontSize: "32px", lineHeight: "38.4px", paddingLeft: "15px"}}>
            R$34,99
          </p>
          </div>
          
        </div>
        <div className="additional__orders">
          <div className="retangle">
            <p style={{color: "#4E4E4E", lineHeight: "16px", fontSize: "14px", fontWeight: "500"}}>
              Adicionar ingredientes
            </p>
            <p style={{color: "#E49700", lineHeight: "20px", fontSize: "12px", fontWeight: "400"}}>
              Até 8 ingredientes
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
            <p style={{color: "#4E4E4E", lineHeight: "16px", fontSize: "14px", fontWeight: "500"}}>
              Precisa de talher?
            </p>
          </div>
          <div>
            <a href="/">+</a> 0 <a href="/">-</a>
          </div>
          <div>
            <button>Adicionar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
