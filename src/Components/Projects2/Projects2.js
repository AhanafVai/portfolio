import React from "react";

import "./Projects2.css";

const Projects2 = () => {
  return (
    <div id="projects2" className="pt-5">
      <h1 className="text-md-start container">Projects sample</h1>

      {/* cards */}
      <div class="container mt-5">
        <div class="row">
          <div class="col-12">
            <article class="blog-card">
              <div class="blog-card__background">
                <div class="card__background--wrapper">
                  <div class="card__background--main card-bg-1">
                    <div class="card__background--layer"></div>
                  </div>
                </div>
              </div>
              <div class="blog-card__head">
                <span class="date__box">
                  <span class="date__day">10</span>
                  <span class="date__month">Feb</span>
                </span>
              </div>
              <div class="blog-card__info">
                <h5>Swift Delivery Services</h5>
                <p>
                  <a
                    href="https://github.com/AhanafVai/swift-Delivery-Client"
                    target="_blank"
                    class="icon-link mr-3"
                  >
                    <i class="fa fa-pencil-square-o"></i> Source Code
                  </a>
                </p>
                <h1>#Features</h1>
                <p>
                  Safe data storage. Limited access to sensitive information.
                  (Admin only) Easy to use. Responsive design. Sophisticated
                  service. fully dynamic. payment system.
                </p>
                <a
                  href="https://lucid-easley-50562e.netlify.app"
                  target="_blank"
                  class="btn-project btn-project--with-icon"
                >
                  <i class="btn-project-icon fa fa-long-arrow-right"></i>
                  Live Preview
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* card end */}
      {/* cards */}
      <div class="container mt-5">
        <div class="row">
          <div class="col-12">
            <article class="blog-card">
              <div class="blog-card__background">
                <div class="card__background--wrapper">
                  <div class="card__background--main card-bg-2">
                    <div class="card__background--layer"></div>
                  </div>
                </div>
              </div>
              <div class="blog-card__head">
                <span class="date__box">
                  <span class="date__day">14</span>
                  <span class="date__month">Apr</span>
                </span>
              </div>
              <div class="blog-card__info">
                <h5>Movie Max</h5>
                <p>
                  <a
                    href="https://github.com/AhanafVai/Movie-Max"
                    target="_blank"
                    class="icon-link mr-3"
                  >
                    <i class="fa fa-pencil-square-o"></i> Source Code
                  </a>
                </p>
                <h1>#Features</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eaque exercitationem impedit voluptatibus fuga necessitatibus
                  rem earum expedita sequi deleniti totam.
                </p>
                <a
                  href="https://keen-jepsen-b112ea.netlify.app"
                  target="_blank"
                  class="btn-project btn-project--with-icon"
                >
                  <i class="btn-project-icon fa fa-long-arrow-right"></i>
                  Live Preview
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* card end */}
      {/* cards */}
      <div class="container mt-5">
        <div class="row">
          <div class="col-12">
            <article class="blog-card">
              <div class="blog-card__background">
                <div class="card__background--wrapper">
                  <div class="card__background--main card-bg-3">
                    <div class="card__background--layer"></div>
                  </div>
                </div>
              </div>
              <div class="blog-card__head">
                <span class="date__box">
                  <span class="date__day">20</span>
                  <span class="date__month">Apr</span>
                </span>
              </div>
              <div class="blog-card__info">
                <h5>Premium Store</h5>
                <p>
                  <a
                    href="https://github.com/AhanafVai/Premium-Store-Client"
                    target="_blank"
                    class="icon-link mr-3"
                  >
                    <i class="fa fa-pencil-square-o"></i> Source Code
                  </a>
                </p>
                <h1>#Features</h1>
                <p>
                  Authentication system so you can sign in using google Manage
                  your store as an admin You can add and remove product from the
                  admin section The order section shows only product that you
                  have ordered so what are you waiting for go and take control
                  of your business with this app.
                </p>
                <a
                  href="https://nervous-gates-f659a5.netlify.app"
                  target="_blank"
                  class="btn-project btn-project--with-icon"
                >
                  <i class="btn-project-icon fa fa-long-arrow-right"></i>
                  Live Preview
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* card end */}
      <section class="detail-page">
        <div class="container mt-5"></div>
      </section>
    </div>
  );
};

export default Projects2;
