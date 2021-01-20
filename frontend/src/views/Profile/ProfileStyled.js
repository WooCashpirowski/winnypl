import styled from "styled-components";

const ProfileStyled = styled.section`
  min-height: calc(100vh - 100px);
  .my-account-wrapper {
    display: flex;
    h3 {
      margin-bottom: 2rem;
    }
    .form {
      flex: 1;
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
            z-index: 100;
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
        }
        button {
          display: inline-block;
          width: 100%;
          border: none;
          padding: 0.4rem;
          margin-top: 0.5rem;
          /* background: var(--light-pink); */
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
    }
    .my-orders {
      flex: 2;
      margin-left: 2rem;
    }
  }
`;

export default ProfileStyled;
