import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ 
  onChange, 
  onClick 
}) => (
  <>
    <input 
      onChange={onChange}
    />
    <button onClick={onClick}>
      Search
    </button>
  </>
);

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchBar;
