import React from "react";
import Portfolio from "./Portfolio";

function PortfolioItem(props) {
  return (
    <div id="portfolio">
      <section className="intro">
        <h1 className="section__title section__title--intro">
          {Portfolio[props.item].titleSmall}
          <strong>{Portfolio[props.item].titleStrong}</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          {Portfolio[props.item].subtitle}
        </p>
        <div className="intro_img_container portfolio_item_img_container">
          <img
            src={Portfolio[props.item].presentation}
            alt=""
            className="portfolio_item_img"
          />
        </div>
        <a
          href={Portfolio[props.item].link}
          target="_blank"
          className="portfolio_item_link"
        >
          <button className="portfolio_item_btn btn">Visit website</button>
        </a>
      </section>

      <div className="portfolio-item-individual">
        <p
          dangerouslySetInnerHTML={{ __html: Portfolio[props.item].intro }}
        ></p>
        <img src={Portfolio[props.item].img} alt={Portfolio[props.item].titleStrong} />
        <p
          dangerouslySetInnerHTML={{
            __html: Portfolio[props.item].description,
          }}
        ></p>
      </div>
    </div>
  );
}

export default PortfolioItem;
