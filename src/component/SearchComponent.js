import React from "react";

const Search = () => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden"></span>
    </label>
    <input type="text" id="header-search" name="s" />
    <button type="submit">Search</button>
  </form>
);

export default Search;
