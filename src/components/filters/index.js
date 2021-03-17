import React from "react";
import PropTypes from "prop-types";

import SearchBar from "../../components/filters/SearchBar";
import "react-datepicker/dist/react-datepicker.css";
import DateFilter from "./DateFilter";
import Icon from "../Icon/Icon";

const Index = ({ setDate, date, handleChange }) => {
  return (
    <div className="bg-gray-300 py-2 px-3 uppercase text-gray-100 flex items-center justify-between md:justify-start  md:space-x-5 overflow-hidden flex flex-wrap md:flex-nowrap">
      <div className="flex w-100 w-full md:w-3/5 justify-between md:justify-start space-x-3 md:space-x-5">
        <DateFilter setDate={setDate} date={date} />
      </div>
      <div className="w-full md:w-2/5 my-1.5 md:m-0 text-xxs relative">
        <SearchBar handleChange={handleChange} />
        <div className="absolute top-1/4 inset-icon">
          <Icon name="icon-search" />
        </div>
      </div>
    </div>
  );
};

Index.propTypes = {
  setDate: PropTypes.func.isRequired,
  date: PropTypes.object,
  handleChange: PropTypes.func,
};

export default Index;
