import styled from "styled-components";

const CartStyled = styled.section`
  min-height: calc(100vh - 100px);
  .cart-wrapper {
    display: flex;
    .products {
      flex: 3;
      display: flex;
      flex-direction: column;
      margin-right: 1rem;
      .product-row {
        display: flex;
        margin: 0.5rem 0;
        padding: 0.5rem 0 1rem;
        align-items: center;
        border-bottom: 1px solid rgba(100, 100, 100, 0.5);
        .image {
          overflow: hidden;
          height: 120px;
          width: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          border: 2px solid rgba(235, 236, 237, 0.5);
          img {
            height: 100%;
          }
        }
        .name {
          flex: 3;
          padding: 1rem;
          font-size: 14px;
        }
        .price {
          flex: 2;
          padding: 1rem;
          font-size: 12px;
        }
        .qty {
          flex: 2;
          select {
            padding: 0.5rem 1rem 0.5rem 0.5rem;
          }
        }
        .remove {
          flex: 1;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0;
          margin-top: 5px;
          background: none;
          color: var(--dark-red);
        }
      }
    }
    .summary {
      flex: 1;
      padding: 1rem;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
      height: 100%;
      button {
        display: inline-block;
        width: 100%;
        border: none;
        padding: 0.5rem;
        margin: 0.5rem 0;
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
      a {
        position: relative;
        transition: all 0.2s ease;
        display: inline-block;
        &:before {
          content: "";
          position: absolute;
          height: 100%;
          width: 0;
          border-bottom: 1px solid var(--dark-red);
          transition: all 0.2s ease;
          z-index: 1;
        }
        &:hover {
          color: var(--dark-red);
          ::before {
            width: 100%;
          }
        }
      }
    }
  }
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 768px) {
    .cart-wrapper {
      flex-direction: column-reverse;
      .products {
        margin-right: 0;
        .product-row {
          .image {
            height: 60px;
            width: 50px;
            border-radius: 5px;
            img {
              height: 100%;
            }
          }
          .qty {
            select {
              padding: 0.2rem 0.4rem;
            }
          }
        }
      }
      .summary {
        button {
          width: 160px;
        }
        a {
          margin: 0.5rem 0;
          display: block;
          width: 128px;
        }
      }
    }
  }
`;

export default CartStyled;
