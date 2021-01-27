import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserDetails, updateUser } from "../../redux/actions/userActions";
import { USER_UPDATE_USER_RESET } from "../../redux/constants/userConstants";
import UserStyled from "./UserStyled";
import Loader from "../../components/Loader/Loader";
import FormContainer from "../../components/FormContainer/FormContainer";

const UserDetailsView = ({ match, history }) => {
  const userId = match.params.id;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const { loading, error, user } = useSelector((state) => state.userDetails);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = useSelector((state) => state.userUpdateUser);

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_USER_RESET });
      history.push("/admin/uzytkownicy");
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [dispatch, userId, user, successUpdate, history]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: userId, name, email, isAdmin }));
  };

  return (
    <>
      <UserStyled>
        <Link to="/admin/uzytkownicy">Wróć </Link>
        {error ||
          (errorUpdate && <p className="warning">{error || errorUpdate}</p>)}
        {loading || loadingUpdate ? (
          <Loader />
        ) : (
          <FormContainer>
            <h1 className="section-header">Edycja danych</h1>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                placeholder="nazwa użytkownika"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
              ></input>
              <label>
                Administrator{" "}
                <input
                  name="isAdmin"
                  type="checkbox"
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                />
              </label>
              <button type="submit" variant="primary">
                <div className="slide" />
                <span>Aktualizuj</span>
              </button>
            </form>
          </FormContainer>
        )}
      </UserStyled>
    </>
  );
};

export default UserDetailsView;
