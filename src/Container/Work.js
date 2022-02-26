import React from "react";
import Portfolio from "../Components/PortfolioList";
import Carousel, { CarouselItem } from "../Components/Carousel";

function Work(props) {
  const work = Portfolio.map((work) => {
    return (
      <CarouselItem key={work.id}>
        <a
          onClick={() => {
            props.onRouteChange("portfolio");
          }}
          className="portfolio__item"
          href="#header"
        >
          <img
            src={work.img}
            alt={work.titleStrong}
            className="portfolio__img"
            onClick={() => {
              props.onChangeItem(work.id);
            }}
          />
        </a>
      </CarouselItem>
    );
  });

  return (
    <section className="my-work" id="work">
      <h2
        className="section__title section__title--work"
        data-aos="zoom-in-down"
      >
        My works
      </h2>
      <p
        className="section__subtitle section__subtitle--work"
        data-aos="zoom-in-down"
      >
        A selection of my works
      </p>

      <div className="portfolio" data-aos="zoom-in-up">
        <Carousel>{work}</Carousel>
      </div>
    </section>
  );
}

export default Work;
