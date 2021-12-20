import React from "react";

function Services() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Design + Development</h3>
          <p>
            I can develop web applications from scratch. Tailoring a
            great-looking UI inline with your business' mission and core values,
            and optimizing your users' experience, I deliver products that
            customers really love.
          </p>
        </div>

        <div className="service">
          <h3>Applications + Games</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="service">
          <h3>Find + Improve Solutions</h3>
          <p>
            I seek innovative and creative solutions to solve complex problems.
            I advocate for lateral thinking, because a boundary is just the
            original edge of something else.
          </p>
        </div>
      </div>

      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
}
export default Services;
