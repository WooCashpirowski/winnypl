import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { login } from "../../redux/actions/userActions";
import LoginStyled from "./LoginStyled";
import FormContainer from "../../components/FormContainer/FormContainer";

const LoginView = ({ location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const handleSubmit = () => console.log("submit");

  return (
    <LoginStyled>
      <h1 className="section-header">Logowanie</h1>
      <div className="form-wrapper">
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Adres email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Wprowadź email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Hasło</Form.Label>
              <Form.Control
                type="password"
                placeholder="Wprowadź hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Zaloguj się
            </Button>
          </Form>
          <Row className="py-3">
            <Col>
              Jesteś tu pierwszy raz?
              <Link
                to={
                  redirect
                    ? `/rejestracja?redirect=${redirect}`
                    : "/rejestracja"
                }
              >
                Zarejestruj się
              </Link>
            </Col>
          </Row>
        </FormContainer>
      </div>
    </LoginStyled>
  );
};

export default LoginView;
