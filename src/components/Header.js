import React from "react";
import logo from "../images/logo.svg";
import search from "../images/search.svg";
import basket from "../images/basket.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="h_left">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="h_right">
          <a href="#">
            <span>HOME</span>
          </a>
          <a href="#">Service</a>
          <a href="#">Top cities</a>
          <a href="#">Contract</a>
          <a href="#">
            <img src={search} alt="" />
          </a>
          <a href="#">
            <img src={basket} alt="" />
          </a>
          <a href="#" className="header_btn">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
