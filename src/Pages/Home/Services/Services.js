import React from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const array = [1, 2, 3, 4, 5, 6];
  return (
    <Container>
      <h2 className="section-title text-center">Services</h2>
      <Row className="justify-content-center align-items-center my-5">
        {array.map((arr, index) => (
          <Service key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default Services;
