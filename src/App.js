import "./styles/style.scss";
import "./styles/Header.scss";
import "./styles/Category.scss";
import "./styles/Content.scss";
import "./styles/Main.scss";
import "./ComponentStyles/MenuComponent.scss";
import "./ComponentStyles/RestaurantComponent.scss";
import "./styles/Content.scss";




import Header from "./components/Header";
import Main from "./components/Main";
import Category from "./components/Category";
import Content from "./components/Content";
import MenuComponent from "./components/MenuComponent";
import Restaurants from "./components/Restaurants";



import restaurant1 from "./images/restaurant1.jpg";
import restaurant2 from "./images/restaurant2.jpg";
import restaurant3 from "./images/restaurant3.jpg";
import gamburger1 from "./images/gamburger1.svg";
import gamburger3 from "./images/gamburger3.svg";
import gamburger4 from "./images/gamburger4.svg";
import gamburger5 from "./images/gamburger5.svg";
import star from "./images/star_full.svg";

const App = () => {
  return (
    <div className="app_container">
      <Header />
      <Main />
      <Category />

      <div className="menu_component">
        <MenuComponent 
        image={gamburger1} 
        ranking={star}
        title="Cheeseburger With Salad"
        />
        <MenuComponent 
        image={gamburger3} 
        ranking={star}
        title="Cheeseburger With Salad"
        />
        <MenuComponent 
        image={gamburger5} 
        ranking={star}
        title="Cheeseburger With Salad"
        />
        <MenuComponent 
        image={gamburger1} 
        ranking={star}
        title="Cheeseburger With Salad"
        />
        <MenuComponent 
        image={gamburger4} 
        ranking={star}
        title="Cheeseburger With Salad"
        />
      </div>
      
      <Content />
      

      <div className="restaurants_component">
        <h1>Top Food <span>restaurant</span></h1>
        <div className="restaurants_top">
          <Restaurants
            image={restaurant1} 
            title="Blaze Pizza"
            time="11.00 AM - 10.00 PM" 
          />
          <Restaurants 
            image={restaurant2} 
            title="Pizza Ranch"
            time="11.00 AM - 10.00 PM" 
          />
          <Restaurants 
            image={restaurant3} 
            title="	Dion’s Pizza Hut"
            time="11.00 AM - 10.00 PM" 
          />
        </div>
        <div className="restaurants_bottom">
          <Restaurants
            image={restaurant1} 
            title="Royel Burger"
            time="11.00 AM - 10.00 PM" 
          />
          <Restaurants 
            image={restaurant2} 
            title="KFC Restaurant"
            time="11.00 AM - 10.00 PM" 
          />
          <Restaurants 
            image={restaurant3} 
            title="Star Food"
            time="11.00 AM - 10.00 PM" 
          />
        </div>
      </div>
    </div>
  );
};

export default App;
