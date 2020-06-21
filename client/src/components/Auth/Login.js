import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Container, Form, Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { login } from "../../actions/authActions";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    //console.log("user info:", user);

    dispatch(login(user));
  };

  return (
    <div>
      <Container
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ced4da",
          borderRadius: ".25rem",
        }}>
        <h3>Login to add post</h3>
        <Form onSubmit={loginHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
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

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  isAuthenticated: state.auth.isAuthenticated,
  hasErrors: state.posts.hasErrors,
});

export default connect(mapStateToProps, { login })(Login);
