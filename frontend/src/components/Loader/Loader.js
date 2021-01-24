import React from "react";
import LoaderStyled from "./LoaderStyled";
import loader1 from "../../assets/img/loader-1.gif";

const Loader = () => {
  return (
    <LoaderStyled>
      <div className="loader">
        <img src={loader1} alt="loader" />
      </div>
    </LoaderStyled>
  );
};

export default Loader;
