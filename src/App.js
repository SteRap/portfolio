import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Container/Header";
import Intro from "./Container/Intro";
import Services from "./Container/Services";
import About from "./Container/About";
import Work from "./Container/Work";
import Footer from "./Container/Footer";
import PortfolioItem from "./Components/PortfolioItem";
import Skills from "./Components/Skills";

function App() {
  const [route, setRoute] = React.useState("home");
  const [item, setItem] = React.useState(0);

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
    });
  }, [route]);

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
          <Skills />
        </div>
      ) : (
        <div>
          <PortfolioItem item={item} />
          <Work onRouteChange={onRouteChange} onChangeItem={onChangeItem} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
