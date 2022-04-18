import React from "react";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <Container className="mb-5">
      <h2 className="text-center section-title">Contact Me</h2>
      <div className="contact-form-area  d-flex justify-content-between flex-column flex-md-row mt-4">
        <div className="form-area">
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
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
            <Form.Group className="mb-3" controlId="suject">
              <Form.Label>Subjcet</Form.Label>
              <Form.Control placeholder="subject" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <FormControl as="textarea" aria-label="With textarea" />
            </Form.Group>
            <button className="btn btn-primary d-block w-50 mx-auto">
              Send
            </button>
          </form>
        </div>
        <div className="map-area">
          <div className="map-container">
            <iframe
              className="map"
              title="my google map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14526.74021374626!2d90.65901102327881!3d24.461709969379605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1650020504939!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
