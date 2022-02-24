import React from "react";
import PortfolioList from "./PortfolioList";

function PortfolioItem(props) {
  return (
    <div id="portfolio">
      <section className="intro">
        <h1 className="section__title section__title--intro">
          {PortfolioList[props.item].titleSmall}
          <strong>{PortfolioList[props.item].titleStrong}</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          {PortfolioList[props.item].subtitle}
        </p>
        <div className="intro_img_container portfolio_item_img_container">
          <img
            src={PortfolioList[props.item].presentation}
            alt=""
            className="portfolio_item_img"
          />
        </div>
        <a
          href={PortfolioList[props.item].link}
          target="_blank"
          rel="noreferrer"
          className="portfolio_item_link"
        >
          <button className="portfolio_item_btn btn">Visit website</button>
        </a>
      </section>

      <div className="portfolio-item-individual">
        <p
          dangerouslySetInnerHTML={{ __html: PortfolioList[props.item].intro }}
        ></p>
        <img
          src={PortfolioList[props.item].img}
          alt={PortfolioList[props.item].titleStrong}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: PortfolioList[props.item].description,
          }}
        ></p>
      </div>
    </div>
  );
}

export default PortfolioItem;
