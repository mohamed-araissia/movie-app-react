import React, { useState } from "react";

const Search = (props) => {
  const [keyword, setKeyword] = useState("");

  const handleSearchInputChanges = (e) => {
    setKeyword(e.target.value);
  };

  const resetInputField = () => {
    setKeyword("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(keyword);
    resetInputField();
  };
  return (
    <form className="search">
      <input value={keyword} onChange={handleSearchInputChanges} type="text" />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};
export default Search;
