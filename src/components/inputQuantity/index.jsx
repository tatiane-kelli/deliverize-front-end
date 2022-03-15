import React from "react";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import "./styles.css";

const InputQuantity = ({
  functionIncrement, 
  functionDecrement,
  extraItemQuantity,
  foodQuantity,
  width,
  height
}) => {
  return(
    <div className="quantity__food" style={{width:{width}, height:{height}}}>
      <button 
        className="quantity__btn" 
        type="button" 
        onClick={{functionDecrement}}
      >
        <AiOutlineMinus fill="#ED3237"/>
      </button>
      <input type="number" readOnly value={foodQuantity || extraItemQuantity} />
      <button 
        className="quantity__btn" 
        type="button" 
        onClick={{functionIncrement}}
      >
        <AiOutlinePlus fill="#ED3237"/>
      </button>
    </div>
);
}

export default InputQuantity;