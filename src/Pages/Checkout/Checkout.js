import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading/Loading";
import "./Checkout.css";
const Checkout = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [id]);
  const service = services.find((service) => service._id === id);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    toast.info("Thank your for your booking", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container className="my-5 d-flex justify-content-between flex-column flex-md-row mx-auto">
          <div className="checkout-product">
            <h4 className="d-flex justify-content-around mb-3">
              <span>{service?.name}</span>
              <span>${service?.price}</span>
            </h4>
            <div className="checkout-img-container">
              <img className="img-fluid " src={service?.picture} alt="" />
            </div>
            <div>
              <InputGroup className="my-3">
                <InputGroup.Text id="basic-addon1">
                  Suggest a price
                </InputGroup.Text>
                <FormControl
                  placeholder="price"
                  aria-label="price"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <p className="my-2">{service?.description}</p>
          </div>
          <div className="checkout-details-container">
            <h4>Payment Detils</h4>
            <small>
              Complete your purchase by providing your payment detils.
            </small>
            <form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your Name" />
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Your Full Address</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
              <button className="btn btn-primary d-block w-100">Submit</button>
            </form>
          </div>
        </Container>
      )}
    </>
  );
};

export default Checkout;
