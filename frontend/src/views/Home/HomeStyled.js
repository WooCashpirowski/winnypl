import styled from "styled-components";

export const HomeStyled = styled.section`
  min-height: calc(100vh - 100px);
  .section.featured {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-items: center;
    grid-gap: 1rem;
  }
`;
