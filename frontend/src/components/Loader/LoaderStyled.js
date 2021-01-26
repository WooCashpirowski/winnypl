import styled from "styled-components";

const LoaderStyled = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: var(--bg-color); */
  .loader {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 102px;
    }
  }
`;

export default LoaderStyled;
