import React from "react";
import arrow_product from "../images/arrow_product.svg";

function Restaurants({ title, image, time }) {
  return (
    <div className="restaurant">
        <div className="restaurant_con">
      <div className="product_com">
        <a href="#">
          <img src={image} alt="" />
        </a>
        <h3>{title}</h3>
        <div className="product_info">
          <p>{time}</p>
          <button>
            <img src={arrow_product} alt="" />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Restaurants;
