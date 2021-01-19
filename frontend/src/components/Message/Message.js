import React from "react";
import styled from "styled-components";

const Message = ({ children }) => {
  return <MessageStyled>{children}</MessageStyled>;
};

const MessageStyled = styled.h1`
  font-weight: 400;
  border-bottom: 2px solid var(--dark-red-secondary);
  padding: 1rem 0;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

export default Message;
