import React from "react";

const SearchBar = ({ query, setQuery }) => {
  const searchBar = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <input
        onChange={searchBar}
        type={query}
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
    </div>
  );
};

export default SearchBar;
