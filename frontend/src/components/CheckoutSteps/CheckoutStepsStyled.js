import styled from "styled-components";

const BreadCrumbs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 1rem auto;
  font-size: 12px;
  font-weight: 300;
  p {
    color: #999;
    pointer-events: none;
    font-size: 12px;
    &.black {
      color: black;
    }
  }
  @media (max-width: 768px) {
    margin-top: 3rem;
  } ;
`;

export default BreadCrumbs;
