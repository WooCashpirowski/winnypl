import React, { useEffect, useState } from "react";
import Users from "./UsersListStyled";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import { IoPersonRemoveOutline } from "react-icons/io5";
import { listUsers, deleteUser } from "../../redux/actions/userActions";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";

const UsersListView = ({ history }) => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.userList);
  const { success: successDel } = useSelector((state) => state.userDelete);
  const { userInfo } = useSelector((state) => state.userLogin);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/zaloguj");
    }
    if (successDel) {
      setMessage("Użytkownik usunięty");
      setTimeout(() => setMessage(""), 2000);
    }
  }, [dispatch, history, userInfo, successDel]);

  const handleDeleteUser = (id) => {
    if (window.confirm("Potwierdź usunięcie użytkownika")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Users>
          <h2 className="section-header">Użytkownicy</h2>
          <div className="users-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>IMIĘ</th>
                  <th>EMAIL</th>
                  <th>ADMIN</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{users.indexOf(user) + 1}</td>
                    <td>{user.name}</td>
                    <td>
                      <a href={`mailto:${user.email}`}>{user.email}</a>
                    </td>
                    <td>{user.isAdmin ? <FcCheckmark /> : <FcCancel />}</td>
                    <td>
                      <Link to={`/uzytkownicy/${user._id}/edycja`}>
                        <FiEdit />
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDeleteUser(user._id)}
                        disabled={userInfo._id === user._id}
                      >
                        <IoPersonRemoveOutline />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={successDel && message ? "info" : ""}>{message}</p>
          </div>
        </Users>
      )}
    </>
  );
};

export default UsersListView;
