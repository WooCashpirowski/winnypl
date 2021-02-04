import styled from "styled-components";

const Reviews = styled.div`
  width: 60%;
  padding: 1rem;

  textarea {
    resize: none;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export default Reviews;
