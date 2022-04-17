import React from "react";
import { Container, Form } from "react-bootstrap";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImg from "../../Assets/Images/login-signup/login.jpg";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between flex-column flex-md-row">
        <div className="img-continer">
          <img className="img-fluid" src={loginImg} alt="" />
        </div>
        <div className="form-container">
          <h2 className="text-center primary-color pb-2">Log In</h2>
          <Form>
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
            <button className="sign-login-btn">Log In</button>
          </Form>
          <p style={{ cursor: "pointer" }} className="text-end my-2 fw-bold">
            Forget your password?
          </p>
          <SocialLogin />
          <p>
            New user to Dexter fitness?{" "}
            <Link style={{ textDecoration: "none" }} to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
