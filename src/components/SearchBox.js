import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="mt3 measure center pa2">
      <input
        className="input-reset ba b--black-20 pa2 mb2 db w-100 br3"
        type="search"
        placeholder="Search the Star Wars Universe..."
        onChange={ searchChange }
      />
    </div>
  );
};

export default SearchBox;
