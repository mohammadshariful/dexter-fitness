import React from "react";
import { Container } from "react-bootstrap";
import aboutImg from "../../Assets/Images/placeholderImg.jpeg";
import "./About.css";
const About = () => {
  return (
    <Container className="my-5">
      <div className="about-img-container mb-4">
        <img className="img-fluid" src={aboutImg} alt="" />
      </div>
      <h2 className="section-title text-center">About ME</h2>
      <div className="text-center">
        <h3>My Goal & How to Achievement</h3>
        <p className="w-75 mx-auto">
          I am Mohammad Shariful Islam. I learn something new to be too much
          too. One of my dreams is to become a Full stack web Developer.To
          implement my goal, I have currently enrolled at programming Hero web
          Development Course.Although I was very lazy, but the programming hero
          courses are now entering the day through the daily bread.I'm going to
          time. I will work in the next days and more hard work. At the end of
          the course, I would like to see myself a suitable developer and this
          is what I go to the target.
        </p>
      </div>
    </Container>
  );
};

export default About;
