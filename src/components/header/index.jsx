import React from "react";
import "./styles.css";
import ConfigIcon from "../ConfigIcon";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import ImgLogo1 from "../../assets/deliverize-logo1.svg";
import ImgLogo2 from "../../assets/deliverize-logo2.svg";

const Header = () => {
  return (
    <>
      <nav className="navigationHeader">
        <div className="session__logo">
          <img src={ImgLogo1} alt="Deliverize"/>
          <img src={ImgLogo2} alt="Deliverize"/>
        </div>
        <div className="session__address">
          <div className="delivery__address">
            <div >
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