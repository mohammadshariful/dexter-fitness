import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";
import auth from "../../../Firebase/Firebase.init";
import CustomLink from "../CustomLink/CustomLink";
const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img style={{ width: "150px" }} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto justify-content-center align-items-center">
            <CustomLink to="/blogs">Blogs</CustomLink>
            {user ? (
              <CustomLink to="/login" onClick={() => signOut(auth)}>
                Sign Out
              </CustomLink>
            ) : (
              <CustomLink to="/login">SignIn</CustomLink>
            )}
            <CustomLink to="/signup">Sign Up</CustomLink>
            <CustomLink to="/about">About</CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
