import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BsArrowBarRight,
  BsFacebook,
  BsGoogle,
  BsPhone,
  BsTwitter,
} from "react-icons/bs";
import { FaEnvelope, FaSearchLocation } from "react-icons/fa";
import Logo from "../../../Assets/Images/logo.png";
import "./Footer.css";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer-container bg-dark py-3">
      <Container>
        <Row className="justify-content-center align-items-center mt-5">
          <Col lg={3}>
            <div className=" bg-dark text-white">
              <img src={Logo} alt="" />
              <p>
                Our company leads the industry in wealth management. We provide
                independent RIA and broker services that are powered by over 20
                years of industry experience.
              </p>
              <p>
                <span>Free Consultation</span>
                <BsArrowBarRight />
              </p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="border bg-dark text-white">hello</div>
          </Col>
          <Col lg={3}>
            <div className="border bg-dark text-white">hello</div>
          </Col>
          <Col lg={3}>
            <div className=" bg-dark text-white">
              <h3>Contact</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <BsPhone />
                  <span className="ms-2">0123456789</span>
                </li>
                <li className="mb-2">
                  <FaEnvelope />
                  <span className="ms-2">abc@gmail.com</span>
                </li>
                <li className="mb-2">
                  <FaSearchLocation />
                  <span className="ms-2">Your address goes here.</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <hr className="bg-white" />
        <div className="d-flex justify-content-between align-items-center flex-column-reverse flex-md-row">
          <p className="fs-6 bg-dark text-white">
            <small>&copy;</small> {year}
            <span className="primary-color"> Dexter Fitness</span> Made With By
            <span className="primary-color"> Mohammad Shariful</span>
          </p>
          <div className="mb-2">
            <span className="text-white fs-5">Follow me</span>
            <BsFacebook className="social-icon" />
            <BsTwitter className=" social-icon" />
            <BsGoogle className="social-icon" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
