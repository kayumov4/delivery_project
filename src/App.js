import "./styles/style.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Category from "./components/Category";
import Content from "./components/Content";
import Restaurants from "./components/Restaurants";
import restaurant1 from "./images/restaurant1.jpg";
import restaurant2 from "./images/restaurant2.jpg";
import restaurant3 from "./images/restaurant3.jpg";

const App = () => {
  return (
    <div className="app_container">
      <Header />
      <Main />
      <Category />
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
