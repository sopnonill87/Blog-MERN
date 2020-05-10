import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SignInLink = () => {
  return (
    <>
      <Nav.Link as={NavLink} to="/">
        Home
      </Nav.Link>
      <Nav.Link as={NavLink} to="/categories">
        Categories
      </Nav.Link>
      <Nav.Link as={NavLink} to="/about">
        About
      </Nav.Link>
      <Nav.Link as={NavLink} to="/login">
        Login
      </Nav.Link>
    </>
  );
};

export default SignInLink;
