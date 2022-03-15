import React from "react";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import "./styles.css";

const InputQuantity = ({
  handleIncrementItem, 
  handleDecrementItem,
  extraItemQuantity
}) => {
  return(
    <div className="extraItem_btn">
      <button 
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
      </button>
    </div>
);
}

export default InputQuantity;