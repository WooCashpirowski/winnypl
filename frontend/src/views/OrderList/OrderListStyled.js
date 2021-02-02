import styled from "styled-components";

const Orders = styled.section`
  min-height: calc(100vh - 100px);
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
          .tooltip {
            position: relative;
            .tooltip-info {
              position: absolute;
              z-index: 1;
              visibility: hidden;
              background: var(--dark-red);
              color: white;
              padding: 0.2rem 0.5rem;
              font-size: 12px;
            }
            &:hover .tooltip-info {
              visibility: visible;
            }
          }
        }
      }
    }
  }
  p.info {
    text-align: center;
    color: green;
    background: lightgreen;
    padding: 0.2rem 0;
    font-size: 12px;
  }
`;

export default Orders;
