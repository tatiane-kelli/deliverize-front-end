import React, {useState, useCallback} from "react";
import Header from "../components/header";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import ImgSandwich from "../assets/PicanhaBacon.svg";
import "./styles.css";

const Product = ({food_quantity, extraItem_quantity}) => {
  const [extraItemQuantity, setExtraItemQuantity] = useState(extraItem_quantity);
  const [foodQuantity, setFoodQuantity] = useState(food_quantity);

  const handleIncrementItem = useCallback(() => {
    setExtraItemQuantity(extraItemQuantity + 1);
  }, [setExtraItemQuantity, extraItemQuantity]);

  const handleDecrementItem = useCallback(() => {
    setExtraItemQuantity(extraItemQuantity - 1);
  }, [setExtraItemQuantity, extraItemQuantity]);

  const handleIncrement = useCallback(() => {
    setFoodQuantity(foodQuantity + 1);
  }, [setFoodQuantity, foodQuantity]);

  const handleDecrement = useCallback(() => {
    setFoodQuantity(foodQuantity - 1);
  }, [setFoodQuantity, foodQuantity]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="snack__info">
          <img src={ImgSandwich} alt="Oferta Picanha Cheddar Bacon" />
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
            <div>
              <p className="extra__item">Queijo cheddar</p>
              <p className="price">+R$4,99</p>
            </div>
            <div className="extraItem_btn">
              {/* <button 
                className="itemQuantity__btn" 
                type="button" 
                onClick={() => handleDecrementItem}
              >
                <AiOutlineMinus fill="#ED3237"/>
              </button>
              <input type="number" readOnly value={extraItemQuantity} />
              <button 
                className="itemQuantity__btn" 
                type="button" 
                onClick={() => handleIncrementItem}
              >
                <AiOutlinePlus fill="#ED3237"/>
              </button> */}
            </div>
          </div>
          <div className="yellow-line"/>
          <div className="extra__ingredient">
            <div>
              <p className="extra__item">Cebola crispy</p>
              <p className="price">+R$1,50</p>
            </div>
            <div className="extraItem_btn">
              {/* <button 
                className="itemQuantity__btn" 
                type="button" 
                onClick={() => handleDecrementItem}
              >
                <AiOutlineMinus fill="#ED3237"/>
              </button>
              <input type="number" readOnly value={extraItemQuantity} />
              <button 
                className="itemQuantity__btn" 
                type="button" 
                onClick={() => handleIncrementItem}
              >
                <AiOutlinePlus fill="#ED3237"/>
              </button> */}
            </div>
          </div>
          <div className="yellow-line"/>
          <div className="extra__ingredient">
            <div>
              <p className="extra__item">Molho cheddar</p>
              <p className="price">+R$3,50</p>
            </div>
            <div className="extraItem_btn">
              {/* <button 
                className="itemQuantity__btn" 
                type="button" 
                onClick={() => handleDecrementItem}
              >
                <AiOutlineMinus fill="#ED3237"/>
              </button>
              <input type="number" readOnly value={extraItemQuantity} />
              <button 
                className="itemQuantity__btn" 
                type="button" 
                onClick={() => handleIncrementItem}
              >
                <AiOutlinePlus fill="#ED3237"/>
              </button> */}
            </div>
          </div>
          <div className="yellow-line"/>
          <div className="extra__ingredient">
            <div>
              <p className="extra__item">Molho de picanha</p>
              <p className="price">+R$3,50</p>
            </div>
            <div className="extraItem_btn">
              {/* <button 
                className="itemQuantity__btn" 
                type="button" 
                onClick={() => handleDecrementItem}
              >
                <AiOutlineMinus fill="#ED3237"/>
              </button>
              <input type="number" readOnly value={extraItemQuantity} />
              <button 
                className="itemQuantity__btn" 
                type="button" 
                onClick={() => handleIncrementItem}
              >
                <AiOutlinePlus fill="#ED3237"/>
              </button> */}
            </div>
          </div>
          <div className="yellow-line"/>
          <div className="retangle">
            <p id="cutlery">
              Precisa de Talher?
            </p>
          </div>
          <div className="board__footer">
            <div className="quantity__food">
              <button 
                className="quantity__btn" 
                type="button" 
                onClick={() => handleDecrement}
              >
                <AiOutlineMinus fill="#ED3237"/>
              </button>
              <input type="number" readOnly value={foodQuantity} />
              <button 
                className="quantity__btn" 
                type="button" 
                onClick={() => handleIncrement}
              >
                <AiOutlinePlus fill="#ED3237"/>
              </button>
            </div>
            <div className="add__food">
              <button className="btn__addFood">Adicionar</button>
            </div>
            
          </div>
        </div>

        <div className="popover" id="popover">
          <div className="popover__title">
            <span>Adicionado com Sucesso</span>
          </div>
          <div className="popover__content">
            <h3>Oferta cheddar bacon</h3>
            <span>Ingredientes</span>
            <ul>
              <li>{extraItemQuantity} Carne 250gr</li>
              <li>{extraItemQuantity} Queijo cheddar</li>
              <li>{extraItemQuantity} Bacon</li>
              <li>Molho especial</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
