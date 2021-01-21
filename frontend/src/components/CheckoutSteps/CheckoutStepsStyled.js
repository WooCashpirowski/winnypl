import styled from "styled-components";

const BreadCrumbs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 1rem auto;
  p {
    color: #999;
    pointer-events: none;
    &.black {
      color: black;
    }
  }
`;

export default BreadCrumbs;
