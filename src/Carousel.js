import React from "react";
import { useSwipeable } from "react-swipeable";
import "./Carousel.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [screenSize, setScreenSize] = React.useState(0);

  React.useLayoutEffect(() => {
    function updateSize() {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  console.log("screen", screenSize);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 2000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const transformStyle =
    screenSize >= 800
      ? `translateX(-${activeIndex * 33.3}%)`
      : `translateX(-${activeIndex * 100}%)`;

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="inner" style={{ transform: transformStyle }}>
        {React.Children.map(children, (child, index) => {
          if (screenSize > 800) {
            return React.cloneElement(child, { width: "33.3%" });
          } else if (screenSize <= 800) {
            return React.cloneElement(child, { width: "100%" });
          }
        })}
      </div>
      <div className="indicators">
        <button onClick={() => updateIndex(activeIndex - 1)}></button>

        <button className="active"></button>

        <button onClick={() => updateIndex(activeIndex + 1)}></button>
      </div>
    </div>
  );
};

export default Carousel;
