import React from "react";
import styled from "styled-components";

const Accordion = ({ children }) => {
  return (
    <AccStyled>
      <>{children}</>
    </AccStyled>
  );
};

const AccStyled = styled.div``;

export default Accordion;
