import React from "react";
import profileImg from "./Media/profile_3.jpg";

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p data-aos="zoom-in-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
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
