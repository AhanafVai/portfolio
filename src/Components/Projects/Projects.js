import React from "react";
import Swift from "../../Image/Swift-delivery.PNG";
import Store from "../../Image/Store.PNG";
import Movie from "../../Image/Movie-Max.PNG";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="project-section ">
      <div className=" container ">
        <h1 className="pt-5  pb-5 text-start">Projects Sample</h1>
        <div
          style={{ height: "600px" }}
          className="d-flex row align-items-center"
        >
          {/* cards */}
          <div className="col-md-4 pb-3">
            <div class="property-card ">
              <a href="https://lucid-easley-50562e.netlify.app" target="blank">
                <div class="property-image">
                  <img
                    src={Swift}
                    style={{
                      width: "700px",
                      position: "absolute",
                      left: 0,
                      right: 20,
                      top: 0,
                    }}
                  />
                </div>
              </a>
              <div class="property-description">
                <h5> Swift Delivery </h5>
                <h4 className="pt-5 text-success">Live Preview</h4>
              </div>
            </div>
          </div>
          {/* cards End */}
          {/* cards */}
          <div className="col-md-4 pb-3">
            <div class="property-card ">
              <a href="https://keen-jepsen-b112ea.netlify.app" target="blank">
                <div class="property-image">
                  <img
                    src={Movie}
                    style={{
                      width: "700px",
                      position: "absolute",
                      left: 0,
                      right: 20,
                      top: 0,
                    }}
                  />
                </div>
              </a>
              <div class="property-description">
                <h5> Movie Max </h5>
                <h4 className="pt-5 text-success">Live Preview</h4>
              </div>
            </div>
          </div>
          {/* cards End */}
          {/* cards */}
          <div className="col-md-4 pb-3">
            <div class="property-card ">
              <a href="https://nervous-gates-f659a5.netlify.app" target="blank">
                <div class="property-image">
                  <img
                    src={Store}
                    style={{
                      width: "700px",
                      position: "absolute",
                      left: 0,
                      right: 20,
                      top: 0,
                    }}
                  />
                </div>
              </a>
              <div class="property-description">
                <h5> Premium store </h5>
                <h4 className="pt-5 text-success">Live Preview</h4>
              </div>
            </div>
          </div>
          {/* cards End */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
