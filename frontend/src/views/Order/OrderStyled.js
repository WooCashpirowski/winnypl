import styled from "styled-components";

const OrderStyled = styled.section`
  min-height: calc(100vh - 100px);
  .order-wrapper {
    display: flex;
    align-items: flex-start;
    h3 {
      border-bottom: 1px dashed var(--dark-red);
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;
    }
    .order-blocks {
      flex: 4;
      .order-block {
        padding: 1rem;
        background: #fff;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
        margin-bottom: 0.5rem;
        p.warning {
          color: red;
          background: var(--light-pink);
        }
        p.success {
          color: green;
          background: lightgreen;
        }
        p.warning,
        p.success {
          padding: 0.5rem;
          margin-top: 0.5rem;
          font-size: 12px;
          font-weight: 300;
        }
        .item-block {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(0, 0, 0, 0.15);
          margin: 0 1rem;
          a {
            display: flex;
            align-items: center;
            img {
              height: 50px;
            }
          }
          .item-calc {
            font-size: 14px;
          }
        }
      }
    }
    .summary-block {
      flex: 2;
      margin-left: 0.5rem;
      padding: 1rem;
      background: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
      p {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 400;
        padding: 1rem 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      }
      button {
        border: none;
        padding: 0.2rem;
        margin-top: 1rem;
        border: 1px solid var(--dark-red);
        font-size: 12px;
        color: var(--dark-secondary);
        cursor: pointer;
        position: relative;
        overflow: hidden;
        background: none;
        .slide {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          transform: translateY(-100%);
          background: var(--dark-red);
          transition: all 0.2s ease-Out;
        }
        span {
          position: relative;
          transition: all 0.3s ease-Out;
        }
        &:hover,
        &:focus {
          outline: none;
          .slide {
            transform: translateY(0);
          }
          span {
            color: white;
          }
        }
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      .order-blocks,
      .summary-block {
        flex: 1;
        margin: 0 auto;
        width: 100%;
      }
    }
  }
`;

export default OrderStyled;
