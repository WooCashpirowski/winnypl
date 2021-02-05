import React from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <Pages>
        <Pagination>
          {[...Array(pages).keys()].map((x) => (
            <Link
              key={x + 1}
              to={
                !isAdmin
                  ? keyword
                    ? `/szukaj/${keyword}/strona/${x + 1}`
                    : `/strona/${x + 1}`
                  : `/admin/produkty/${x + 1}`
              }
            >
              <div className={page === x + 1 ? "pageNo active" : "pageNo"}>
                {x + 1}
              </div>
            </Link>
          ))}
        </Pagination>
      </Pages>
    )
  );
};

const Pages = styled.div`
  .pagination {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 1rem;
    .pageNo {
      padding: 0.5rem;
      margin: 4px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
      width: 32px;
      text-align: center;
      background: var(--light-pink);
      transition: all 0.2s ease;
      &:hover {
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
        background: #fff;
      }
      &.active {
        font-weight: bold;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
        background: #fff;
      }
    }
  }
`;

export default Paginate;
