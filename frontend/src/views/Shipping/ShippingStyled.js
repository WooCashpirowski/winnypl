import styled from "styled-components";

const ShippingStyled = styled.section`
  min-height: calc(100vh - 100px);
  @media (max-width: 768px) {
    .section-header {
      display: none;
    }
  }
`;

export default ShippingStyled;
