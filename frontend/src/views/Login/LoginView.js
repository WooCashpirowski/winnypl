import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { login } from "../../redux/actions/userActions";
import LoginStyled from "./LoginStyled";
import FormContainer from "../../components/FormContainer/FormContainer";

const LoginView = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <LoginStyled>
      {error && (
        <Message>
          {error}{" "}
          <span>
            <Link to="/">Wróć do strony głównej</Link>
          </span>
        </Message>
      )}
      {loading ? (
        <Loader />
      ) : (
        <FormContainer>
          <h1 className="section-header">Logowanie</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
            ></input>
            <input
              type="password"
              placeholder="hasło"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            ></input>
            <button type="submit" variant="primary">
              <div className="slide" />
              <span>Zaloguj się</span>
            </button>
          </form>
          <div className="goto-link">
            Pierwszy raz u nas?
            <Link to="/rejestracja"> Zarejestruj się</Link>
          </div>
        </FormContainer>
      )}
    </LoginStyled>
  );
};

export default LoginView;
