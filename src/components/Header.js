import React from "react";
import "./styles.css";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <nav className="navigationHeader">
        <div className="session__logo">
          <h2>logo</h2>
        </div>
        <div className="delivery__address" style={{background: "#ffffff", width: "230px", height: "48px"}}>
          <p style={{color: "#ed3237"}}><b>Entrega</b></p>
          <p style={{color: "#656363"}}>R. Antônio Braune, 222</p>
          <RiArrowDownSLine />
        </div>
        <div>
          <input type="text" placeholder="Busque por estabelecimentos ou produtos"/>
        </div>
        <div className="profile__icons" style={{color: "#ed3237"}}>
          <BiUserCircle />
          Entrar
          <MdOutlineLocalGroceryStore />
          Carrinho
        </div>
      </nav>
    </>
  );
}

export default Header;