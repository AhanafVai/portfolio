import React from "react";
import "./Home.css";
import Resume from "../../File/Ahanaf's Resume 2.o.pdf";
import Typed from "react-typed";
import Particles from "react-particles-js";

const Home = () => {
  return (
    <div class="background">
      {/* nav */}
      <nav class="navbar navbar-expand-lg navbar-light px-5">
        <div class="container-fluid">
          <h2 style={{ color: "#ed9924" }} class="navbar-brand" href="#">
            Ahanaf Abdullah
          </h2>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  style={{ color: "white" }}
                  class="nav-link active"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a style={{ color: "white" }} class="nav-link" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a
                  style={{ color: "white" }}
                  class="nav-link"
                  href="#projects2"
                >
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a style={{ color: "white" }} class="nav-link" href="#blogs">
                  Blogs
                </a>
              </li>
              <li class="nav-item">
                <a style={{ color: "white" }} class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* nav end */}

      <div class="layer ">
        <h1>Ahnaf Abdullah</h1>
        <Typed
          className="typed"
          strings={["Web Developer", "Front-End Developer"]}
          typeSpeed={40}
          backSpeed={40}
          loop
        />
        <div>
          <a
            href={Resume}
            download
            target="_blank"
            type="button"
            class="btn btn-outline-danger text-decoration-none"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
