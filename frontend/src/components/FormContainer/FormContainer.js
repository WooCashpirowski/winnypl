import React from "react";
import styled from "styled-components";

const FormContainer = ({ children }) => {
  return <FormStyled>{children}</FormStyled>;
};

const FormStyled = styled.div`
  width: 315px;
  margin: 2rem auto 0;
  padding: 1rem;
  background: var(--light-pink);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    input {
      padding: 0.7rem;
      margin: 0.5rem 0;
      border: none;
      outline: none;
      position: relative;
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
    button {
      display: inline-block;
      width: 100%;
      border: none;
      padding: 0.4rem;
      margin-top: 0.5rem;
      background: var(--light-pink);
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
  .goto-link {
    text-align: center;
    margin-top: 1rem;

    font-size: 14px;
    margin-bottom: 0.2rem;

    a {
      position: relative;
      transition: all 0.2s ease;
      &:after {
        content: "";
        position: absolute;
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        border-bottom: 2px solid var(--dark-red);
        transition: all 0.3s ease;
      }
      &:hover,
      &:focus {
        color: var(--dark-red);
        outline: none;
        &:after {
          width: 100%;
        }
      }
    }
  }
`;

export default FormContainer;
