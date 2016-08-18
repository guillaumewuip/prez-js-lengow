
import React from 'react';

const Search = ({ placeholder, change }) => (
    <div>
        <input
            type="text"
            className="search-input"
            name="search"
            placeholder={placeholder}
            onChange={(e) => change(e.target.value)}
        />
    </div>
);

export default Search;
