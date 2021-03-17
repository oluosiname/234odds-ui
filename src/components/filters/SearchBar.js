import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ handleChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="w-full rounded-xl"
      placeholder="Search by team name"
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
