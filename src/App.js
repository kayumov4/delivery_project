import "./styles/style.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Category from "./components/Category";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="app_container">
      <Header />
      <Main />
      <Category />
      <Content />
    </div>
  );
};

export default App;
