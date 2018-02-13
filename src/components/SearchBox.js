import React from 'react';

const SearchBox = ({ searchChange, placeholder }) => {
  return (
    <div className="mt3 measure center pa2">
      <input
        className="input-reset ba b--black-20 pa2 mb2 db w-100"
        type="search"
        placeholder={ placeholder || "Search the Star Wars Universe" }
        onChange={ searchChange }
        style={{ fontFamily: 'DISTANT GALAXY' }}
      />
    </div>
  );
};

export default SearchBox;
