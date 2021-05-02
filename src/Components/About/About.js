import React from "react";
import Portfolio from "../../Image/1619937442654.jpg";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about-section container">
      <h1 className="pt-5 pb-2 text-danger"> About </h1>
      <div className="d-flex row pt-5">
        <div className="col-md-5 ">
          <img src={Portfolio} className="img-fluid" />
        </div>
        <div className="col-md-5">
          <h1 className="text-md-start about-head"> Abdur Rahman Abdullah</h1>
          <h5 className=" text-md-start para">
            I am an enthusiastic web Developer. Eager to learn about all the
            amazing thins I can do with the power of programming. <br />
            <br />
            <br />
            My custom-built website is fast loading, accessible, and easy to
            manage. I am very excited that you have come to visit my personal
            website. You can check out some of my projects and the stuff I like
            to tackle. I tried to bring some soul into it as well, hope it
            worked.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default About;
