import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const navigate = useNavigate();
  const { picture, name, price, description } = service;
  return (
    <Col md={6} lg={4}>
      <Card className="mb-4 service-container">
        <Card.Body className="h-100">
          <div className="img-container">
            <img className="img-fluid" src={picture} alt={name} />
          </div>
          <div className="service-info">
            <h3 className="text-muted">{name}</h3>
            <p>{description}</p>
            <h2 className="primary-color">
              ${price}
              <small>/per month.</small>
            </h2>
            <button
              onClick={() => navigate("/checkout")}
              className="service-btn"
              type="button"
            >
              Get Service
            </button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
