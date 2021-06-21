import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const handleChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <div className="search">
      <input
        onChange={(e) => handleChange(e.target.value)}
        value={text}
        placeholder="Search characters"
        type="text"
        autoFocus
      />
    </div>
  );
};

export default Search;
