import styled from "styled-components";

const LoaderStyled = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .loader {
    height: 150px;
    width: 150px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 152px;
    }
  }
`;

export default LoaderStyled;
