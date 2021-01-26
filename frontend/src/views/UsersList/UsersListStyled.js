import styled from "styled-components";

const Users = styled.section`
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
          }
        }
      }
    }
  }
`;

export default Users;
