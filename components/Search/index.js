import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const onInputChange = (value) => {
    setSearch(value);
    onSearch(value);
  };

  return (
    <div className="log__action">
      <h3 className="log__action-title">Action Logs</h3>
      <div className="log__search">
        <input
          type="text"
          placeholder="name"
          className="log__search-input"
          id="content__search input"
          value={search}
          onChange={(e) => onInputChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
