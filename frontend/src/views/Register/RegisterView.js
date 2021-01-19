import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { register } from "../../redux/actions/userActions";
import RegisterStyled from "./RegisterStyled";
import FormContainer from "../../components/FormContainer/FormContainer";

const RegisterView = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Hasła nie są jednakowe");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <RegisterStyled>
      {error && (
        <Message>
          {error}{" "}
          <span>
            <Link to="/">Wróć do strony głównej</Link>
          </span>
        </Message>
      )}
      {message && <Message>{message}</Message>}
      {loading ? (
        <Loader />
      ) : (
        <FormContainer>
          <h1 className="section-header">Rejestracja</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="imię i nazwisko"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <input
              type="password"
              placeholder="hasło"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
            <input
              type="password"
              placeholder="powtórz hasło"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            ></input>
            <button type="submit" variant="primary">
              <div className="slide" />
              <span>Zarejestruj się</span>
            </button>
          </form>
          <div className="goto-link">
            Masz już konto?
            <Link to="/zaloguj"> Zaloguj się</Link>
          </div>
        </FormContainer>
      )}
    </RegisterStyled>
  );
};

export default RegisterView;
