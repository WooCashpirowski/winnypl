import React from "react";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps";
import SummaryStyled from "./SummaryStyled";

const SummaryView = () => {
  return (
    <SummaryStyled>
      <h2 className="section-header">Podsumowanie</h2>
      <CheckoutSteps step1 step2 step3 step4 />
    </SummaryStyled>
  );
};

export default SummaryView;
