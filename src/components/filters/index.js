import React from "react";
import PropTypes from "prop-types";

import SearchBar from "../../components/filters/SearchBar";
import DateFilter from "./DateFilter";

const Index = ({ setDate, date, handleChange, search }) => {
  return (
    <div className="bg-brand-primary-100 md:bg-gray-300 py-2 px-5 uppercase text-gray-100 flex items-center justify-between md:justify-start  md:space-x-5 overflow-hidden flex flex-wrap md:flex-nowrap">
      <div className="flex w-100 w-2/6 md:w-3/5 justify-start space-x-2 items-center">
        <DateFilter setDate={setDate} date={date} />
      </div>
      <div className="w-4/6 md:w-2/5  md:m-0 text-xxs relative">
        <SearchBar handleChange={handleChange} search={search} />
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
