import React from "react";
import { useSwipeable } from "react-swipeable";
import "./Carousel.css";

export const CarouselItem = ({ children, width, active }) => {
  return (
    <div
      className={active ? "carousel-item active" : "carousel-item "}
      style={{
        width: width,
      }}
    >
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(true);
  const [screenSize, setScreenSize] = React.useState(0);

  React.useLayoutEffect(() => {
    function updateSize() {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

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
            return React.cloneElement(child, {
              width: "33.3%",
              active: child.key == activeIndex ? true : false,
            });
          } else if (screenSize <= 800) {
            return React.cloneElement(child, { width: "100%" });
          }
        })}
      </div>
      <div className="indicators">
        <div
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className="prev_next"
        >
          <i className="fas fa-arrow-left arrow"></i>
        </div>
        {React.Children.map(children, (child, index) => {
          return (
            <div
              className="dot"
              onClick={() => {
                updateIndex(index);
              }}
            >
              <i
                className={`${
                  index === activeIndex
                    ? "fas fa-circle active"
                    : "fas fa-circle"
                }`}
              ></i>
            </div>
          );
        })}
        <div>
          <i
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
            class="fas fa-arrow-right arrow"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
