import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="service-container container-fluid">
      <div class="d-flex row   mx-auto">
        <h1 style={{ color: "#f24455" }}>Services</h1>
        <div class="col-md-4  service-card">
          <div class="face face1">
            <div class="content">
              <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
              <h3>Design</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                A web designer works on the appearance, layout, and, in some
                cases, content of a website. Appearance, for instance, relates
                to the colors, font, and images used.
              </p>
              <a
                href="https://www.interaction-design.org/literature/topics/web-design"
                target="_blank"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 service-card">
          <div class="face face1">
            <div class="content">
              <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
              <h3>Code</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                Coding, sometimes called computer programming, is how we
                communicate with computers. Code tells a computer what actions
                to take
              </p>
              <a href="https://grasshopper.app/why-coding/">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 service-card">
          <div class="face face1">
            <div class="content">
              <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
              <h3>Launch</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                The amount of space allocated on a server to a website depends
                on the type of hosting. The main types of hosting are shared,
                dedicated.The level of management provided and the additional
                services on offer.
              </p>
              <a
                href="https://www.namecheap.com/hosting/what-is-web-hosting-definition/"
                target="_blank"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
