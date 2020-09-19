import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Form, Button, Nav } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { register } from "../../actions/authActions";

const Registration = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [isLoading, setIsLoading] = React.useState(false);
  const [hasPasswordError, setHasPasswordError] = useState(false);

  const registerHandler = (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      setHasPasswordError(true);
    }
    //console.log("after register form submit:", name, email, password);
    const newUser = {
      name,
      email,
      password,
    };

    dispatch(register(newUser));
    history.push("/");
  };

  return (
    <div>
      <Container
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ced4da",
          borderRadius: ".25rem",
        }}
      >
        <h3>Register to the blog platform</h3>

        {hasPasswordError ? (
          <p className="alert alert-danger">
            Password and confirm password didn't match
          </p>
        ) : null}

        <Form onSubmit={registerHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="Name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

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

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirm-password"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            Already have an account? Please login{" "}
            <Nav.Link as={NavLink} to="/login" className="register-link">
              Here
            </Nav.Link>
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Registration;
