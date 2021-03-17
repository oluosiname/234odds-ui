import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ handleChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="w-full rounded-full p-2.5 outline-none text-gray-100 bg-gray-200 text-xs tracking-wider placeholder-gray-100 px-4"
      placeholder="Search by team name..."
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
