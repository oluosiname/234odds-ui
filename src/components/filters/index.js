import React from "react";
import PropTypes from "prop-types";

import SearchBar from "../../components/filters/SearchBar";
import "react-datepicker/dist/react-datepicker.css";
import DateFilter from "./DateFilter";

const Index = ({ setDate, date, handleChange }) => {
  return (
    <div className="bg-gray-300 py-2 px-5 uppercase text-gray-100 flex items-center justify-between md:justify-start  md:space-x-5 overflow-hidden flex">
      <DateFilter />
      <div className="md:w-2/5">
        <SearchBar handleChange={handleChange} />
      </div>
    </div>
  );
};

Index.propTypes = {
  setDate: PropTypes.func.isRequired,
  date: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Index;
