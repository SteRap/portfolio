import React from "react";

function Services() {
  return (
    <section className="my-services" id="services">
      <h2
        className="section__title section__title--services"
        data-aos="fade-down"
      >
        What I do
      </h2>
      <div className="services">
        <div className="service" data-aos="fade-right" data-aos-offset="350">
          <h3>Design + Development</h3>
          <p>
            I can develop web applications from scratch. Tailoring a
            great-looking UI inline with your business' mission and core values,
            and optimizing your users' experience, I deliver products that
            customers really love.
          </p>
        </div>

        <div className="service" data-aos="zoom-in" data-aos-offset="350">
          <h3>Applications + Games</h3>
          <p>
            I enjoy coding web applications and games which are served by
            logical schemes and triggered by users' interactions. In my projects
            I always prioritize ease of use, and gamification elements to engage
            the users.
          </p>
        </div>

        <div className="service" data-aos="fade-left" data-aos-offset="350">
          <h3>Find + Improve Solutions</h3>
          <p>
            I seek creative and innovative solutions to solve complex problems.
            I advocate for lateral thinking, because a boundary is just the
            original edge of something else.
          </p>
        </div>
      </div>

      <a href="#work" className="btn" data-aos="fade-up" data-aos-offset="50">
        My Work
      </a>
    </section>
  );
}
export default Services;
