import styled from 'styled-components';

const BreadCrumbs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 1rem auto;
  p {
    color: #666;
    pointer-events: none;
  }
`;

export default BreadCrumbs;
