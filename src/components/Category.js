import React from "react";
import burger from "../images/burger.svg";
import pizza from "../images/pizza.svg";
import sandwich from "../images/sandwich.svg";
import asian_food from "../images/asian_food.svg";
import setmenu from "../images/setmenu.svg";


const Category = () => {
  return (
    <div className="category">
      <div className="category_container">
        <h1>
          Our popular <span>Category</span>
        </h1>
        <div className="category_top">
          <button className="btn_1">
            <img src={burger} alt="" />
            <p>Burger uzbek burger</p>
          </button>
          <button className="btn_2">
            <img src={pizza} alt="" />
            <p>Pizza</p>
          </button>
          <button className="btn_3">
            <img src={sandwich} alt="" />
            <p>Sandwich</p>
          </button>
          <button className="btn_4">
            <img src={asian_food} alt="" />
            <p>Asian Food</p>
          </button>
          <button className="btn_5">
            <img src={setmenu} alt="" />
            <p>Set Menu</p>
          </button>
        </div>
        <button className="category_button">More Food</button>
      </div>
    </div>
  );
};

export default Category;
