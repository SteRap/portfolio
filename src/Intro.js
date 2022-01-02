import React from "react";
import profileImg from "./Media/Profile_picture.jpg";

function Intro() {
  return (
    <section className="intro" id="home">
      <h1
        className="section__title section__title--intro"
        data-aos="zoom-in-down"
        data-aos-duration="2000"
      >
        Hi, I am <strong> Stefano Rapino</strong>
      </h1>
      <p
        className="section__subtitle section__subtitle--intro"
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-duration="2000"
      >
        <span>full-stack developer</span>
      </p>
      <img
        src={profileImg}
        alt="myself"
        className="intro__img"
        data-aos="fade-right"
        data-aos-duration="2000"
      />
    </section>
  );
}
export default Intro;
