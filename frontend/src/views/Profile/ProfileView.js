import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileStyled from "./ProfileStyled";
import {
  getUserDetails,
  updateUserProfile,
} from "../../redux/actions/userActions";
import { USER_UPDATE_RESET } from "../../redux/constants/userConstants";
import Message from "../../components/Message/Message";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const ProfileView = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.userDetails);
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success } = useSelector((state) => state.userUpdate);

  useEffect(() => {
    if (!userInfo) {
      history.push("/zaloguj");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_RESET });
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [history, user, userInfo, dispatch, success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Hasła nie są tożsame");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <ProfileStyled>
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
        <>
          <h2 className="section-header">Moje konto</h2>
          <div className="my-account-wrapper">
            <div className="form">
              <h3>Dane użytkownika</h3>
              {success && <h4>Dane zostały zmienione!</h4>}
              <form onSubmit={handleSubmit}>
                <label>
                  <p>Imię i nazwisko</p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </label>
                <label>
                  <p>Adres email</p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </label>
                <label>
                  <p>Nowe hasło</p>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </label>
                <label>
                  <p>Powtórz nowe hasło</p>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  ></input>
                </label>
                <button
                  type="submit"
                  variant="primary"
                  disabled={!name && !email && !password && !confirmPassword}
                >
                  <div className="slide" />
                  <span>Zatwierdź</span>
                </button>
              </form>
            </div>
            <div className="my-orders">
              <h3>Moje zamówienia</h3>
            </div>
          </div>
        </>
      )}
    </ProfileStyled>
  );
};

export default ProfileView;
