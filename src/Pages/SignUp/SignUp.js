import React from "react";
import { Container, Form } from "react-bootstrap";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import signUpImg from "../../Assets/Images/login-signup/siignup.jpg";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import "./SignUp.css";
const SignUp = () => {
  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between flex-column flex-md-row">
        <div className="img-continer">
          <img className="img-fluid" src={signUpImg} alt="" />
        </div>
        <div className="form-container">
          <h2 className="text-center primary-color pb-2">Create an Account</h2>
          <Form>
            <Form.Group className="mb-3 form-group" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
              <div className="icon">
                <FaUser />
              </div>
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <div className="icon">
                <FaEnvelope />
              </div>
            </Form.Group>

            <Form.Group
              className="mb-3 form-group"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <div className="icon">
                <FaLock />
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3 form-group"
              controlId="formBasicConfrimPassword"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confrim Password" />
              <div className="icon">
                <FaLock />
              </div>
            </Form.Group>
            <button className="sign-login-btn">Sign Up</button>
          </Form>
          <SocialLogin />
          <p className="my-2">
            Already you have an account?
            <Link style={{ textDecoration: "none" }} to="/login">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
