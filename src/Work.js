import React from "react";
import Portfolio from "./Portfolio";

function Work(props) {
  const work = Portfolio.map((work) => {
    return (
      <a
        onClick={() => {
          props.onRouteChange("portfolio");
        }}
        className="portfolio__item"
        href="#header"
        key={work.id}
      >
        <img
          src={work.img}
          alt=""
          className="portfolio__img"
          onClick={() => {
            props.onChangeItem(work.id);
          }}
        />
      </a>
    );
  });

  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my work
      </p>

      <div className="portfolio">{work}</div>
    </section>
  );
}
export default Work;
