import React from "react";
import Portfolio from "./Portfolio";

function PortfolioItem(props) {
  return (
    <div id="portfolio">
      <section className="intro">
        <h1 className="section__title section__title--intro">
          The title <strong>of my project</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          A short subtitle
        </p>
        <img
          src={Portfolio[props.item].presentation}
          alt=""
          className="intro__img portfolio_item_img"
        />
        <a
          href={Portfolio[props.item].link}
          target="_blank"
          className="portfolio_item_link"
        >
          <button className="portfolio_item_btn">Visit website</button>
        </a>
      </section>

      <div className="portfolio-item-individual">
        <p>
          Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo
          molestiae eligendi sint culpa nobis voluptas sapiente voluptate,
          magnam ipsum eius earum?
        </p>
        <img src={Portfolio[props.item].img} alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et
          amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur
          incidunt?
        </p>
        <p>
          Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo
          molestiae eligendi sint culpa nobis voluptas sapiente voluptate,
          magnam ipsum eius earum?
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem;
