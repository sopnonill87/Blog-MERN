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
import { connect, useDispatch } from "react-redux";
import { logout } from "../../actions/authActions";

const SignOutLink = () => {
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    // console.log("logout handler");

    dispatch(logout());
  };
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

      <Nav.Link as={NavLink} onClick={logoutHandler} to="/">
        Logout
      </Nav.Link>
    </>
  );
};

export default connect(null, { logout })(SignOutLink);
