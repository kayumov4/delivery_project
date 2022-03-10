import React from "react";
import scooter from "../images/scooter.svg";

const Main = () => {
  return (
    <div className="main">
      <div className="main_container">
        <div className="m_left">
          <h1>
            Super Fast <span>Food Delivery</span> Service
          </h1>
          <h2>
            We provide super fast-delivery service. Let’s use our <br />{" "}
            services right now and get discounts of up to 50%
          </h2>
          <a href="#" className="m_btn">
            Explore Food
          </a>
          <a href="#">Download App</a>
        </div>
        <div className="m_right">
          <a href="#">
            <img src={scooter} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
