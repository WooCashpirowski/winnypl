import styled from "styled-components";

const Reviews = styled.div`
  width: 60%;
  padding: 1rem;
  position: relative;
  h3,
  h4 {
    margin-bottom: 0.5rem;
  }

  p.info {
    margin-bottom: 0.5rem;
  }

  .review {
    padding: 0.5rem 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin-bottom: 1rem;
    strong {
      display: block;
      font-size: 14px;
      margin-bottom: 0.3rem;
    }
    div {
      margin-left: 0.5rem;
    }
    p {
      font-size: 13px;

      &:first-of-type {
        margin-top: 0.5rem;
      }
    }
  }

  select {
    padding: 0.2rem;
    margin-bottom: 0.5rem;
    border: 1px solid var(--pink);
    border-radius: 0;
    &:focus {
      outline: 1px solid var(--dark-red);
    }
  }

  textarea {
    resize: none;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--pink);
    border-radius: 0;
    &:focus {
      outline: 1px solid var(--dark-red);
    }
  }

  button {
    width: 120px;
    border: none;
    padding: 0.2rem;
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
    &:disabled {
      pointer-events: none;
      opacity: 0.6;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export default Reviews;
