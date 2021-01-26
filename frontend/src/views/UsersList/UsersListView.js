import React, { useEffect } from "react";
import Users from "./UsersListStyled";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import { IoPersonRemoveOutline } from "react-icons/io5";
import { listUsers } from "../../redux/actions/userActions";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";

const UsersListView = ({ history }) => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.userList);
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/zaloguj");
    }
  }, [dispatch, history, userInfo]);

  const handleDeleteUser = (id) => console.log(`user ${id} deleted`);

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
                      <Link to={`/uzytkownicy/${user._id}`}>
                        <FiEdit />
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDeleteUser(user._id)}
                      >
                        <IoPersonRemoveOutline />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Users>
      )}
    </>
  );
};

export default UsersListView;
