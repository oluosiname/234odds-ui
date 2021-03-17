import React, { useRef } from "react";
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
import Icon from "../../components/Icon/Icon";
import { nextDates, stringifyDate } from "../../helpers/dates";

const DateFilter = ({ date, setDate }) => {
  const calendarEl = useRef();

  return (
    <div className="flex w-100 md:w-3/5 justify-between md:justify-start space-x-3 md:space-x-5">
      <span
        className={`cursor-pointer text-xxs tracking-wide whitespace-nowrap  ${
          date && stringifyDate(date) === stringifyDate(new Date())
            ? "text-blue-100 font-bold"
            : ""
        }`}
        onClick={() => setDate(new Date())}
      >
        Today
      </span>
      {nextDates().map((d) => {
        return (
          <span
            className={`cursor-pointer text-xxs tracking-wide whitespace-nowrap  ${
              date && stringifyDate(date) === stringifyDate(d)
                ? "text-blue-100 font-bold"
                : ""
            }`}
            onClick={() => setDate(new Date(d))}
          >
            {stringifyDate(d, {
              month: "short",
              day: "numeric",
            })}
          </span>
        );
      })}

      <span className="cursor-pointer" onClick={() => setDate(null)}>
        <Icon name="icon-undo" size="0.75rem" />
      </span>
    </div>
  );
};

DateFilter.propTypes = {};

export default DateFilter;
