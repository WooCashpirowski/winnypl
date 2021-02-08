import styled from "styled-components";

const ProductStyled = styled.section`
  .product-wrapper {
    display: flex;
    align-items: flex-start;
    background: linear-gradient(
      90deg,
      #ffffff 42.9%,
      rgba(235, 236, 237, 0) 100%
    );
    padding: 1rem;
    .image-section {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 350px;
      overflow: hidden;
      flex: 4;
      margin: 0 1rem 0 0;
      padding: 0.5rem;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
      img {
        height: 100%;
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
        border-bottom: 1px solid var(--dark-secondary);
        span {
          font-weight: 500;
          select {
            width: 50px;
            padding-left: 8px;
          }
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
        &:disabled {
          pointer-events: none;
          opacity: 0.7;
        }
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      .image-section {
        width: 250px;
      }
      .middle-section {
        padding-right: 0;
        padding-bottom: 1rem;
      }
      .add-to-cart-section {
        width: 100%;
        margin-top: 1rem;
        button {
          width: 160px;
        }
      }
    }
    @media (max-width: 425px) {
      flex-direction: column;
      .image-section {
        width: 100%;
      }
    }
  }
`;

export default ProductStyled;
