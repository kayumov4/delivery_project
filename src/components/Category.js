import React from "react";
import burger from "../images/burger.svg";
import pizza from "../images/pizza.svg";
import sandwich from "../images/sandwich.svg";
import asian_food from "../images/asian_food.svg";
import setmenu from "../images/setmenu.svg";
import gamburger1 from "../images/gamburger1.svg";
import gamburger2 from "../images/gamburger2.svg";
import gamburger3 from "../images/gamburger3.svg";
import gamburger4 from "../images/gamburger4.svg";
import gamburger5 from "../images/gamburger5.svg";
import star from "../images/star_full.svg";

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
            <p>Burger</p>
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
        <div className="category_bottom">
          <div className="burger_1">
            <img src={gamburger1} alt="" />
            <img src={star} alt="" />
            <p>Cheeseburger With Salad</p>
            <h5>$18.00</h5>
            <button className="btn_6">Add to Cart</button>
          </div>
          <div className="burger_2">
            <img src={gamburger2} alt="" />
            <img src={star} alt="" />
            <p>Beef Burger</p>
            <h5>$18.00</h5>
            <button className="btn_7">Add to Cart</button>
          </div>
          <div className="burger_3">
            <img src={gamburger3} alt="" />
            <img src={star} alt="" />
            <p>Royel Cheeseburger</p>
            <h5>$16.00</h5>
            <button className="btn_8">Add to Cart</button>
          </div>
          <div className="burger_4">
            <img src={gamburger4} alt="" />
            <img src={star} alt="" />
            <p>Black Gambugrer </p>
            <h5>$14.00</h5>
            <button className="btn_9">Add to Cart</button>
          </div>
          <div className="burger_5">
            <img src={gamburger5} alt="" />
            <img src={star} alt="" />
            <p>Chicken Burger</p>
            <h5>$15.00</h5>
            <button className="btn_10">Add to Cart</button>
          </div>
        </div>
        <button className="category_button">More Food</button>
      </div>
    </div>
  );
};

export default Category;
