import styled from "styled-components";

const Search = styled.div`
  margin-bottom: 0.7rem;
  form {
    display: flex;
    position: relative;
    overflow: hidden;
    width: 280px;
    input {
      &:focus {
        &::placeholder {
          color: transparent;
        }
      }
    }
    button {
      background: none;
      border: none;
      outline: none;
      position: absolute;
      right: 5px;
      top: 4px;
      font-size: 1.2rem;
      color: #666;
    }
  }
`;

export default Search;
