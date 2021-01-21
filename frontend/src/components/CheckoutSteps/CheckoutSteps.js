import React from "react";
import { NavLink } from "react-router-dom";
import BreadCrumbs from "./CheckoutStepsStyled";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <BreadCrumbs>
      <div className="crumb">{step1 && <p className="black">Logowanie</p>}</div>
      <div className="crumb">
        {step2 ? <NavLink to="/dostawa">Dostawa</NavLink> : <p>Dostawa</p>}
      </div>
      <div className="crumb">
        {step3 ? <NavLink to="/platnosc">Płatność</NavLink> : <p>Płatność</p>}
      </div>
      <div className="crumb">
        {step4 ? (
          <NavLink to="/podsumowanie">Podsumowanie</NavLink>
        ) : (
          <p>Podsumowanie</p>
        )}
      </div>
    </BreadCrumbs>
  );
};

export default CheckoutSteps;
