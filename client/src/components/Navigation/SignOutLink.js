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

const SignOutLink = () => {
  return (
    <>
      <Nav.Link as={NavLink} to="/">
        Home
      </Nav.Link>

      <Nav.Link as={NavLink} to="/categories">
        Categories
      </Nav.Link>

      <Nav.Link as={NavLink} to="/dashboard">
        Dashboard
      </Nav.Link>

      <Nav.Link href="#pricing">Logout</Nav.Link>
    </>
  );
};

export default SignOutLink;
