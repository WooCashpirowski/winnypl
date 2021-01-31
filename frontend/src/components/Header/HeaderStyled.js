import styled from "styled-components";

export const HeaderStyled = styled.header`
  .toggler {
    display: none;
  }
  .profile-info {
    position: absolute;
    top: 5px;
    color: white;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    font-weight: lighter;
    text-align: center;
    a {
      color: white;
      font-weight: 300;
    }
    .dropdown {
      display: inline-block;
      button {
        font-weight: 300;
        color: white;
        border: none;
        background: none;
        cursor: pointer;
      }
      .dropdown-menu {
        text-align: left;
        background: white;
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-bottom: none;
        transform: translate(-17px, 25px) !important;
        a {
          display: block;
          color: var(--dark);
          padding: 0.2rem 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease;
          &:hover {
            background: var(--red);
            color: white;
          }
        }
      }
    }
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
        width: 200px;
        margin-top: 1rem;
        margin-left: 2rem;
        transition: all 0.2s ease;

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
            .logout {
              width: 24px;
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
        font-weight: lighter;
        &.logout {
          cursor: pointer;
          font-size: 1.2rem;
        }
      }
    }
  }
  @media (max-width: 768px) {
    position: relative;
    z-index: 3;
    position: fixed;
    width: 100%;
    .profile-info {
      display: none;
    }
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
      outline: none;
      transition: all 0.2s ease;
      &.small {
        z-index: 100;
        /* top: 2px; */
        transform: translateY(-20px);
      }
    }
    nav {
      flex-direction: column;
      .navbar {
        flex-direction: column;
        width: 100%;
        margin-left: -100%;
        margin-top: -8px;
        z-index: -1;
        opacity: 0;
        transition: all 0.5s ease;
        background: linear-gradient(270deg, #260000 0%, #cf3142 100%);
        color: white;
        min-height: 100vh;
        &.active {
          min-height: 100vh;
          margin-left: 0;
          opacity: 1;
          z-index: 1;
        }
        .nav-links {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          flex: 1;
          .nav-link {
            margin-left: 0;
            padding: 1rem;
            color: var(--light-pink);
          }
        }
        .user-nav {
          flex: 1;
          .user-nav-links {
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            padding-top: 1rem;
            margin-bottom: 2rem;
            background: var(--dark-red);
            .nav-link {
              margin: 0;
              padding: 0 1.4rem;
              font-size: 32px;
              color: var(--light-pink);
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
          margin: 0.5rem 0 0;
          width: 200px;
        }
      }
      transition: all 0.5s ease;
      &.small {
        /* transform: translateY(-50px); */
        height: 50px;
        .logo {
          img {
            margin-top: 0.2rem;
            width: 100px;
          }
        }
      }
    }
  }
`;
