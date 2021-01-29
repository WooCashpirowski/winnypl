import styled from "styled-components";

const Products = styled.section`
  min-height: calc(100vh - 100px);
  .button-wrapper {
    display: flex;
    justify-content: space-between;
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
    }
  }
  .table {
    width: 100%;
    font-size: 13px;
    thead {
      tr {
        th {
          border-bottom: 1px dashed black;
          padding: 0.5rem 0;
          text-align: left;
          font-weight: 500;
          font-size: 12px;
        }
      }
    }
    tbody {
      tr {
        td {
          border-bottom: 1px dotted #aaa;
          padding: 0.5rem 0 0.5rem 0.5rem;
          text-align: left;
          a {
            position: relative;
            transition: all 0.2s ease;
            &::before {
              content: "";
              position: absolute;
              height: 100%;
              width: 0;
              border-bottom: 1px solid var(--dark-red);
              transition: all 0.2s ease;
            }
            &:hover {
              color: var(--dark-red);
              ::before {
                width: 100%;
              }
            }
          }
          button {
            padding: 0;
            background: none;
            border: none;
            color: var(--red);
            margin-left: 2rem;
            cursor: pointer;
            transition: all 0.2s ease;
            &:hover {
              transform: scale(1.02);
              color: var(--dark-red);
            }
            &:disabled {
              display: none;
            }
          }
          &:nth-of-type(2) {
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
        }
      }
    }
  }
  p.info,
  p.warning {
    text-align: center;
    padding: 0.2rem 0;
    font-size: 12px;
  }
  p.info {
    color: green;
    background: lightgreen;
  }
  p.warning {
    color: red;
    background: var(--light-pink);
  }
`;

export default Products;
