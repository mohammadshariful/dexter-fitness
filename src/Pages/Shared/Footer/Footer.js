import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BsArrowBarRight,
  BsFacebook,
  BsGoogle,
  BsPhone,
  BsTwitter,
} from "react-icons/bs";
import { FaArrowRight, FaEnvelope, FaSearchLocation } from "react-icons/fa";
import FooterGymImg1 from "../../../Assets/Images/footer-gym-img1.jpg";
import FooterGymImg2 from "../../../Assets/Images/footer-gym-img2.jpg";
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
                I have provided this services.If you want to know more please
                contact us.
              </p>
              <p>
                <span>Free Consultation</span>
                <BsArrowBarRight />
              </p>
            </div>
          </Col>
          <Col lg={3} className="mb-2">
            <div className="bg-dark text-white">
              <h3>Recent Posts</h3>
              <Row>
                <Col>
                  <div className="d-flex mb-2">
                    <img className="gym-img" src={FooterGymImg1} alt="" />
                    <div className="ms-2">
                      <h6>What's the Right Asswt Allocation For Investors?</h6>
                      <small className="text-muted">
                        Feb 4,2020/3 Comments
                      </small>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex">
                    <img className="gym-img" src={FooterGymImg2} alt="" />
                    <div className="ms-2">
                      <h6>How Return Assumption Affect Investor Behavior?</h6>
                      <small className="text-muted">
                        March 20,2020/9 Comments
                      </small>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={3}>
            <div className="bg-dark text-white">
              <h3>Quick Link</h3>
              <Row>
                <Col>
                  <ul className="list-unstyled">
                    <li>
                      <FaArrowRight className="primary-color" />
                      <span className="ms-2">Home</span>
                    </li>
                    <li>
                      <FaArrowRight className="primary-color" />
                      <span className="ms-2">Services</span>
                    </li>
                    <li>
                      <FaArrowRight className="primary-color" />
                      <span className="ms-2">Cases</span>
                    </li>
                    <li>
                      <FaArrowRight className="primary-color" />
                      <span className="ms-2">Blog</span>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul className="list-unstyled">
                    <li>
                      <FaArrowRight className="primary-color" />
                      <span className="ms-2">About us</span>
                    </li>
                    <li>
                      <FaArrowRight className="primary-color" />
                      <span className="ms-2">Contacts</span>
                    </li>
                    <li>
                      <FaArrowRight className="primary-color" />
                      <span className="ms-2">Appointment</span>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={3}>
            <div className=" bg-dark text-white">
              <h3>Contact</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <BsPhone className="primary-color" />
                  <span className="ms-2">0123456789</span>
                </li>
                <li className="mb-2">
                  <FaEnvelope className="primary-color" />
                  <span className="ms-2">abc@gmail.com</span>
                </li>
                <li className="mb-2">
                  <FaSearchLocation className="primary-color" />
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
