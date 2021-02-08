import styled from "styled-components";

const AccStyled = styled.div`
  display: none;
  margin-top: 0.5rem;
  .accordion__section {
    display: flex;
    flex-direction: column;
    .accordion {
      border: 2px solid var(--dark-red);
      color: var(--dark);
      background: none;
      cursor: pointer;
      padding: 16px;
      display: flex;
      align-items: center;
      outline: none;
      transition: all 0.6s ease;
      &:hover,
      &.active {
        background-color: var(--dark-pink);
        color: white;
        border: 2px solid var(--light-pink);
      }
      .accordion__title {
        font-weight: 500;
        font-size: 14px;
      }
      .accordion__icon {
        margin-left: auto;
        transition: transform 0.6s ease;
        &.rotate {
          transform: rotate(90deg);
        }
      }
    }
    .accordion__content {
      background-color: white;
      overflow: hidden;
      transition: max-height 0.6s ease;
      background: linear-gradient(45deg, var(--light-pink) 0%, white 75%);

      p {
        display: flex;
        justify-content: space-between;
        padding: 0.3rem 0;
      }
      button.delete-btn {
        font-size: 1.5rem;
        margin-top: 1rem;
        background: none;
        border: none;
        cursor: pointer;
      }
    }
    .accordion__text {
      font-weight: 400;
      font-size: 14px;
      padding: 16px 16px 8px;
    }
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

export default AccStyled;
