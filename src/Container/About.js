import React from "react";
import profileImg from "../Media/profile_3.jpg";

function About() {
  return (
    <section className="about-me" id="about">
      <h2
        className="section__title section__title--about"
        data-aos="fade-down-right"
      >
        Who I am
      </h2>
      <p
        className="section__subtitle section__subtitle--about"
        data-aos="fade-up-right"
      >
        Full-stack developer that codes for the Planet
      </p>
      <div className="about-me__body">
        <p data-aos="zoom-in-up">
          My name is Stefano, but everybody calls me <strong>Pisol</strong>{" "}
          ("Pi" = &#960;, "sol" = &#9788; - <i>"sun" from italian</i>).
          <br></br>
          As many Millenials, myself too is deeply concern about the future of
          our wonderful Planet which is threaten by climate change. Due to its
          anthropic origin, I am firmly convinced that is our duty to prevent
          the catastrophe.
          <br></br>
          Therefore, I spent the last five years studying and working to take
          part of{" "}
          <strong>
            <i>the Green Revolution.</i>
          </strong>
        </p>

        <p data-aos="zoom-in-up">
          I have a{" "}
          <strong>business, managerial and economic background.</strong> I held
          a MSc in International Business and Management along with a bachelor
          in Economic and Business.
          <br></br> During my last employment, I was the{" "}
          <strong>Product Owner</strong> in a team that was developping AI
          powered software which goals were to analyze, manage and reduce fuel
          consumption and CO2e emissions in the Transport Industry.
        </p>
        <p data-aos="zoom-in-up">
          Long story short, I realised that: <strong>1. Technology</strong> is
          our biggest ally agaist climate change, <strong>2. Coding</strong> is
          the best application of my innate abilities, <strong>3. Fun</strong>{" "}
          is guaranteed.
        </p>
        <p data-aos="zoom-in-up"></p>
      </div>
      <img
        src={profileImg}
        alt="myself2"
        className="about-me__img"
        data-aos="fade-left"
      />
    </section>
  );
}

export default About;
