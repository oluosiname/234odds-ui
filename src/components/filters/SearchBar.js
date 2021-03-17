import React, { useRef } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

const SearchBar = ({ handleChange, search }) => {
  let inputRef = useRef();
  const handleClick = (e) => {
    if (search && search !== "") {
      handleChange("");
      inputRef.current.value = "";
    }
  };
  return (
    <>
      <input
        type="text"
        name="query"
        className="w-full rounded-full p-2.5 outline-none text-gray-100 bg-gray-200 text-xs tracking-wider placeholder-gray-100 px-4"
        placeholder="Search by team name..."
        onChange={(e) => handleChange(e.target.value)}
        ref={inputRef}
      />
      <div
        className="absolute top-1/4 inset-icon md:inset-icon-md md:top-1/4"
        onClick={handleClick}
      >
        <Icon name={`icon-${search && search !== "" ? "cancel" : "search"}`} />
      </div>
    </>
  );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  search: PropTypes.string,
};

export default SearchBar;
