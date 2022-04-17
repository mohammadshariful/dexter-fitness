import React from "react";
import { Container, Row } from "react-bootstrap";
import usePackage from "../../../Hooks/usePackage";
import Loading from "../../Shared/Loading/Loading";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const { packages, loading } = usePackage();
  return (
    <Container>
      <h2 className="section-title text-center">Services</h2>
      {loading ? (
        <Loading />
      ) : (
        <Row className="justify-content-center align-items-center my-4">
          {packages.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Services;
