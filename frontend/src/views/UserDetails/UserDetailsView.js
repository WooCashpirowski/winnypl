import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getUserDetails } from "../../redux/actions/userActions";
// import Loader from "../../components/Loader/Loader";

const UserDetailsView = ({ match }) => {
  // const dispatch = useDispatch();
  // const { loading, error, user } = useSelector((state) => state.userDetails);
  // const userId = match.params.id;
  // useEffect(() => {
  //   dispatch(getUserDetails(userId));
  // }, [dispatch, userId]);

  return (
    <>
      {/* {loading && <Loader />} */}
      <div>
        <code>{match.params.id}</code>
      </div>
    </>
  );
};

export default UserDetailsView;
