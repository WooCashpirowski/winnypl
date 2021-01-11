import styled from "styled-components";
import ProductView from "./ProductView";

const ProductStyled = styled.section`
  .product-wrapper {
    display: flex;
    align-items: flex-start;
    .image-section {
      flex: 4;
      img {
        width: 100%;
      }
    }
    .middle-section {
      flex: 5;
      padding-right: 2rem;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .add-to-cart-section {
      flex: 3;
      p {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
        border: 1px solid var(--dark-secondary);
        &:first-child {
          border-bottom: none;
        }
        span {
          font-weight: 500;
        }
      }
      button {
        display: inline-block;
        width: 100%;
        border: none;
        padding: 0.5rem;
        margin-top: 0.5rem;
        background: var(--dark-red);
        color: white;
        font-size: 16px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        .slide {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          transform: translateX(-100%);
          background: var(--light-pink);
          transition: all 0.3s ease-Out;
        }
        span {
          position: relative;
          transition: all 0.3s ease-Out;
        }
        &:hover {
          .slide {
            transform: translateX(0);
          }
          span {
            color: var(--dark-secondary);
          }
        }
      }
    }
  }
`;

export default ProductStyled;
