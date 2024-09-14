// src/Components/Login.js
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import apiHandler from "../utils/apiHandler"; // Import the API handler

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apiHandler("/users/login", "POST", {
        username,
        password,
      });

      // On successful login, call the login function and redirect
      login(response);
      navigate("/admin");
    } catch (err) {
      setError(err.message);
    }
  };
  const location = useLocation();

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (
      isLoggedIn &&
      location.pathname &&
      !location.pathname.includes("/admin")
    ) {
      console.log("location.pathname  => ", location.pathname);
      navigate("/admin/blogs");
    }
  }, [isLoggedIn]);
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <Col md={12}>
          <h2 className="text-center mb-4">Login</h2>
          {error && <p className="text-danger">{error}</p>}
          <Form onSubmit={handleSubmit} className="border p-4 rounded bg-light">
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
