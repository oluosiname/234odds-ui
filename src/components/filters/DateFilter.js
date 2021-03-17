import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
import Icon from "../../components/Icon/Icon";
import { nextDates, stringifyDate } from "../../helpers/dates";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";
const DateFilter = ({ date, setDate }) => {
  const calendarEl = useRef();
  const [isSelectingDate, setIsSelectingDate] = useState(false);

  const toggleCalendar = () => {
    console.log(calendarEl.current, calendarEl.current.state.open);
    calendarEl.current.setOpen(!isSelectingDate);
    setIsSelectingDate((prev) => !prev);
  };

  const handleDateChange = (value) => {
    setDate(value);
    setIsSelectingDate(false);
  };

  // console.log(calendarEl.current, calendarEl.current.state.open);

  return (
    <>
      <div className="flex w-100 justify-start space-x-1 items-center flex-col md:flex-row text-xxs">
        <div>
          <Icon
            name="icon-calendars"
            onClick={toggleCalendar}
            stroke={`${!!date ? "#129AB7" : "#c5c5c5"}`}
            stroke-width="15"
            fill={`${!!date ? "#129AB7" : "#c5c5c5"}`}
          />
          <DatePicker
            onChange={handleDateChange}
            value={stringifyDate(date)}
            ref={calendarEl}
            minDate={new Date()}
            className="hidden"
          />
        </div>
        <span
          className={`text-xxs tracking-wide whitespace-nowrap text-blue-100 font-bold ${
            !!date ? "" : " hidden"
          }`}
        >
          {stringifyDate(date, {
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>
      <span
        className={`cursor-pointer ${!!date ? "" : " hidden"}`}
        onClick={() => setDate(null)}
      >
        <Icon name="icon-undo" size="0.9rem" />
      </span>
    </>
  );
};

DateFilter.propTypes = {};

export default DateFilter;
