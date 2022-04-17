import React, { useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import signUpImg from "../../Assets/Images/login-signup/siignup.jpg";
import auth from "../../Firebase/Firebase.init";
import useStateHandle from "../../Hooks/useStateHandle";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import "./SignUp.css";
const SignUp = () => {
  const navigate = useNavigate();
  const {
    name,
    email,
    password,
    confirmPassword,
    handleName,
    handleEmail,
    handlePassword,
    handleConfirmPassword,
  } = useStateHandle();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;
    await createUserWithEmailAndPassword(emailValue, passwordValue);
    await toast.success("new user created");
  };
  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between flex-column flex-md-row">
        <div className="img-continer">
          <img className="img-fluid" src={signUpImg} alt="" />
        </div>
        <div className="form-container">
          <h2 className="text-center primary-color pb-2">Create an Account</h2>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3 form-group" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                onBlur={handleName}
                type="text"
                placeholder="Enter Name"
                required
              />
              <div className="icon">
                <FaUser />
              </div>
            </Form.Group>
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
            {email?.error && <p className="error">{email.error}</p>}
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
            {password?.error && <p className="error">{password.error}</p>}
            <Form.Group
              className="mb-3 form-group"
              controlId="formBasicConfrimPassword"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                onBlur={handleConfirmPassword}
                type="password"
                placeholder="Confrim Password"
                required
              />
              <div className="icon">
                <FaLock />
              </div>
            </Form.Group>
            {confirmPassword?.error && (
              <p className="error">{confirmPassword.error}</p>
            )}
            {error && <p className="error">{error.message}</p>}
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
