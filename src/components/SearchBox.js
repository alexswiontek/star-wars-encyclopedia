import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange, placeholder }) => (
  <div className="mt3 measure center pa2">
    <input
      className="distant-galaxy input-reset ba b--black-20 pa2 mb2 db w-100"
      type="search"
      placeholder={placeholder || 'Search the Star Wars Universe'}
      onChange={searchChange}
    />
  </div>
);

export default SearchBox;
