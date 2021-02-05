import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Search from "./SearchBoxStyled";
import { BiSearch } from "react-icons/bi";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/szukaj/${keyword}`);
    } else {
      history.push("/");
    }
    setKeyword("");
  };

  return (
    <Search>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="wyszukaj produkt"
          value={keyword}
        />
        <button type="submit" disabled={!keyword}>
          <BiSearch />{" "}
        </button>
      </form>
    </Search>
  );
};

export default withRouter(SearchBox);
