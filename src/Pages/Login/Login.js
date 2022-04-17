import React, { useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginImg from "../../Assets/Images/login-signup/login.jpg";
import auth from "../../Firebase/Firebase.init";
import useStateHandle from "../../Hooks/useStateHandle";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import "./Login.css";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { email, password, handleEmail, handlePassword } = useStateHandle();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  if (loading || sending) {
    return <Loading />;
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;
    signInWithEmailAndPassword(emailValue, passwordValue);
  };

  const forgetPasswordHandle = () => {
    const emailValue = email.value;
    if (emailValue) {
      sendPasswordResetEmail(emailValue);
      toast.success("Email sent");
    } else {
      toast.error("Please enter Email");
    }
  };

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between flex-column flex-md-row">
        <div className="img-continer">
          <img className="img-fluid" src={loginImg} alt="" />
        </div>
        <div className="form-container">
          <h2 className="text-center primary-color pb-2">Log In</h2>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onBlur={handleEmail}
                type="email"
                placeholder="Enter email"
                required
              />
              <div className="icon">
                <FaEnvelope />
              </div>
            </Form.Group>

            <Form.Group
              className="mb-3 form-group"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                onBlur={handlePassword}
                type="password"
                placeholder="Password"
                required
              />
              <div className="icon">
                <FaLock />
              </div>
            </Form.Group>
            {error && <p className="error">{error.message}</p>}
            <button className="sign-login-btn">Log In</button>
          </Form>
          <p
            onClick={forgetPasswordHandle}
            style={{ cursor: "pointer" }}
            className="text-end text-primary my-2 fw-bold"
          >
            Forget your password?
          </p>
          <SocialLogin />
          <p>
            New user to Dexter fitness?
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
