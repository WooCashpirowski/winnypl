import styled from "styled-components";

const SummaryStyled = styled.section`
  min-height: calc(100vh - 100px);
  .order-wrapper {
    padding: 1rem 2rem;
    display: flex;
    align-items: flex-start;
    .order-blocks {
      flex: 4;
      .order-block {
        padding: 0.5rem;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        margin-bottom: 0.5rem;
        h4 {
          margin-bottom: 0.5rem;
          border-bottom: 1px dashed var(--red);
          padding-bottom: 0.2rem;
          font-weight: 300;
        }
        p {
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          a {
            color: var(--red);
            font-size: 12px;
            &:hover {
              color: var(--dark-red);
            }
          }
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
      padding: 0.5rem 1rem;
      background: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
      h3 {
        border-bottom: 1px solid var(--dark-red);
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
      }
      p {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 400;
        padding: 1rem 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      }
      button {
        display: inline-block;
        width: 100%;
        border: none;
        padding: 0.4rem;
        margin-top: 0.5rem;
        border: 2px solid var(--dark-red);
        font-size: 16px;
        color: var(--dark-secondary);
        cursor: pointer;
        position: relative;
        overflow: hidden;
        .slide {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          transform: translateY(-100%);
          background: var(--dark-red);
          transition: all 0.3s ease-Out;
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
        &:disabled {
          pointer-events: none;
          opacity: 0.7;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .section-header {
      display: none;
    }
    .order-wrapper {
      flex-direction: column-reverse;
      .order-blocks,
      .summary-block {
        flex: 1;
        width: 100%;
      }
      .summary-block {
        margin: 0 0 0.5rem 0;
      }
    }
  }
  @media (max-width: 560px) {
    .order-wrapper {
      padding: 1rem 0.5rem;
    }
  }
`;

export default SummaryStyled;
