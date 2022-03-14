import React from "react";
import "./styles.css";
import ConfigIcon from "../ConfigIcon";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <nav className="navigationHeader">
        <div className="session__logo">
          <img src="../../assets/deliverize-logo1.svg" alt="Deliverize"/>
          <img src="../../assets/deliverize-logo2.svg" alt="Deliverize"/>
        </div>
        <div className="delivery__address">
          <div>
            <p style={{color: "#ed3237", paddingLeft: "15px"}}><b>Entrega</b></p>
            <p style={{color: "#656363", paddingLeft: "15px"}}>R. Antônio Braune, 222</p>
          </div>
          <div style={{color: "#ed3237",
                      paddingLeft: "50px",
                      width: "20px",
                      height:"14px"
                      }}
          >
            <RiArrowDownSLine />
          </div>
          
        </div>
        <div>
          <input type="text" placeholder="Busque por estabelecimentos ou produtos"/>
        </div>
        <div className="profile__icons">
          <ConfigIcon>
            <BiUserCircle />
          </ConfigIcon>
          <p style={{paddingRight: "25px", marginLeft: "0px"}}>
            Entrar
          </p>
          <ConfigIcon>
            <MdOutlineLocalGroceryStore />
          </ConfigIcon>
          <p>
            Carrinho
          </p>
        </div>
      </nav>
    </>
  );
}

export default Header;