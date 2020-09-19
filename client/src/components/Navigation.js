import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Search from "./Search";
import SignInLink from "./Navigation/SignInLink";
import SignOutLink from "./Navigation/SignOutLink";

const Navigation = ({ isAuthenticated }) => {
  console.log("user check:", isAuthenticated);

  return (
    <div>
      <Navbar expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h2>React Learning</h2>
          </Navbar.Brand>

          <Nav className="mr-auto">
            {isAuthenticated ? <SignOutLink /> : <SignInLink />}
          </Nav>

          <Search />
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
