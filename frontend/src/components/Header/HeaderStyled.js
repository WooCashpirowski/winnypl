import styled from 'styled-components';

export const HeaderStyled = styled.header`
  .toggler {
    display: none;
  }
  nav {
    width: 100%;
    height: 100px;
    background: linear-gradient(270deg, #260000 0%, #cf3142 100%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      flex: 2;
      z-index: 1;
      img {
        width: 250px;
        margin-top: 2rem;
        margin-left: 2rem;
        @media (max-width: 375px) {
          width: 200px;
        }
      }
    }
    .navbar {
      flex: 10;
      display: flex;
      height: 100%;
      .nav-links {
        flex: 7;
        display: flex;
        padding: 1rem;
        align-items: flex-end;
        justify-content: flex-end;
        letter-spacing: 2px;
        .nav-link {
          margin-left: 1.5rem;
          &:hover {
            color: #fff;
          }
        }
      }
      .user-nav {
        flex: 3;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 1rem;
        .user-nav-links {
          display: flex;
          width: 100%;
          justify-content: flex-end;
          align-items: center;
          padding: 0.5rem;
          margin-bottom: 0.5rem;
          .nav-link {
            margin-left: 1rem;
            &:hover {
              color: #fff;
            }
          }
        }
        input {
          width: 100%;
          padding: 0.2rem;
        }
      }
      .nav-link {
        color: var(--light-pink);
        text-decoration: none;
      }
    }
  }
  @media (max-width: 960px) {
    position: relative;
    .toggler {
      display: block;
      position: absolute;
      top: 1rem;
      right: 1rem;
      color: var(--light-pink);
      font-size: 3rem;
      background: none;
      border: none;
      cursor: pointer;
    }
    nav {
      flex-direction: column;
      .navbar {
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 100px;
        left: -100%;
        opacity: 0;
        transition: all 0.3s ease;
        background: var(--light-pink);
        height: calc(100vh - 100px);
        &.active {
          left: 0;
          opacity: 1;
          z-index: 0;
        }
        .nav-links {
          flex: 10;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          .nav-link {
            margin-left: 0;
            padding: 1rem;
            color: var(--dark);
          }
        }
        .user-nav {
          flex: 10;
          .user-nav-links {
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 1rem;
            margin-bottom: 0;
            .nav-link {
              margin: 1rem 0 0;
              padding: 1rem 2rem;
              font-size: 24px;
              color: var(--dark);
              &:first-child {
                background: var(--pink);
              }
            }
          }
          input {
            display: none;
          }
        }
      }
      .logo {
        flex: 12;
        img {
          margin: 1rem 0 0;
        }
      }
    }
  }
`;
