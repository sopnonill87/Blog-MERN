import React from "react";
import { Container, Form, Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Container style={{ marginTop: "20px" }}>
        <h3>Login to add post</h3>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            Don't register yet? Register{" "}
            <Nav.Link as={NavLink} to="/register" className="register-link">
              Here
            </Nav.Link>
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
