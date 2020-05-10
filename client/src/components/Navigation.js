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

export default function Navigation() {
  return (
    <div>
      <Navbar expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h2>React Learning</h2>
          </Navbar.Brand>

          <Nav className="mr-auto">
            <SignInLink />
            {/* <SignOutLink /> */}
          </Nav>

          <Search />
        </Container>
      </Navbar>
    </div>
  );
}
