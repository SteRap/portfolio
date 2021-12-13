import React from "react";
import profileImg from "./Media/Profile_picture.jpg";

function Intro() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong> Stefano Rapino</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        full-stack developer
      </p>
      <img src={profileImg} alt="myself" className="intro__img" />
    </section>
  );
}
export default Intro;
