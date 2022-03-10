import React from "react";
import person from "../images/person2.svg";
import timer from "../images/timer.svg";
import deliver from "../images/deliver.svg";
import store from "../images/store.svg";

const Content = () => {
  return (
    <div className="content">
      <div className="content_container">
        <div className="content_left">
          <img src={person} alt="" />
        </div>
        <div className="content_right">
          <h1>
            <span>Stay</span> at home, we will <br /> Provide{" "}
            <span>good food</span>
          </h1>
          <h2>
            We provide tasty food and superfast delivery at <br /> your home.
            Let’s use our services right now and <br /> get discounts of up to
            50%.
          </h2>
          <div className="content_info">
            <div className="content_info_1">
              <img src={timer} alt="" />
              <p>fasted delivery in 30 Minutes</p>
            </div>
            <div className="content_info_2">
              <img src={deliver} alt="" />
              <p>300+ delivery men</p>
            </div>
            <div className="content_info_3">
              <img src={store} alt="" />
              <p>500+ restaurant & cafe shop</p>
            </div>
            <button>See More</button>
            <button>See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
