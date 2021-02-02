import styled from "styled-components";

const UserStyled = styled.section`
  min-height: calc(100vh - 100px);
  .form {
    background: var(--bg-color);
    padding: 1rem;
    margin: 1rem auto 0;
    max-width: 600px;
    h4 {
      margin-bottom: 1rem;
      color: green;
    }
    form {
      display: flex;
      flex-direction: column;
      label {
        position: relative;
        p {
          position: absolute;
          font-size: 14px;
          z-index: 1;
          top: -8px;
          font-weight: lighter;
        }
        input {
          padding: 0.7rem;
          margin: 0.7rem 0;
          border: none;
          outline: none;
          position: relative;
          width: 100%;
          &:focus {
            border-bottom: 2px inset var(--red);
            padding-bottom: calc(0.7rem - 2px);
            &::placeholder {
              color: transparent;
            }
          }
          &:after {
            position: absolute;
            width: 100%;
            height: 100%;
          }
        }
        &.check {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          background: white;
          padding: 0.2rem 0.7rem;
          margin-top: 7px;
          margin-bottom: 8px;
          input {
            display: inline-block;
            width: 14px;
            margin-left: 8px;
            outline: none;
            &:focus {
              outline: 2px solid var(--red);
              outline-style: ;
            }
          }
        }
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
          transform: translateX(-100%);
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
            transform: translateX(0);
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
    p.warning {
      color: red;
      background: var(--light-pink);
    }
  }

  @media (max-width: 768px) {
    .form {
      z-index: 0;
    }
  }
`;

export default UserStyled;
