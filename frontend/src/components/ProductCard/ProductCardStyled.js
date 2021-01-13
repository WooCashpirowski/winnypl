import styled from "styled-components";

const ProductCardStyled = styled.div`
  text-align: center;
  width: 200px;
  height: 350px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  background: white;
  img {
    width: 200px;
    transition: all 0.5s ease;
    z-index: -1;
  }
  h3 {
    font-weight: 500;
    font-size: 1rem;
    z-index: 2;
  }
  p {
    font-size: 0.8rem;
    z-index: 2;
    &.price {
      font-weight: 500;
      font-size: 1rem;
    }
  }
  &::before {
    content: "";
    position: absolute;
    width: 120px;
    height: 120px;
    bottom: -60px;
    right: -60px;
    border-radius: 50%;
    background: var(--dark-red-secondary);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
  .rating {
    position: absolute;
    bottom: 8px;
    left: 8px;
    font-size: 0.7rem;
  }
  .add-to-cart {
    position: absolute;
    width: 24px;
    height: 24px;
    font-size: 24px;
    bottom: 12px;
    right: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    color: white;
    &:hover {
      color: var(--light-pink);
      transform: scale(1);
    }
  }
  &:hover {
    background: #ebeced;
    img {
      transform: scale(1.2) translateY(-30px);
    }
  }
`;

export default ProductCardStyled;
