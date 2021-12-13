import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Services from "./Services";
import About from "./About";
import Work from "./Work";
import Footer from "./Footer";
import PortfolioItem from "./PortfolioItem";

function App() {
  const [route, setRoute] = React.useState("home");
  const [item, setItem] = React.useState(1);

  function onRouteChange(route) {
    setRoute(route);
  }

  function onChangeItem(item) {
    setItem(item);
  }

  return (
    <div className="App">
      <Header onRouteChange={onRouteChange} />
      {route === "home" ? (
        <div>
          <Intro />
          <Services />
          <About />
          <Work onRouteChange={onRouteChange} onChangeItem={onChangeItem} />
        </div>
      ) : (
        <PortfolioItem item={item} />
      )}
      <Footer />
    </div>
  );
}

export default App;
