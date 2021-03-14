import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import DatePicker from "react-datepicker";
import { nextDates, stringifyDate } from "../../helpers/dates";
import "react-datepicker/dist/react-datepicker.css";

import HeaderLinks from "./HeaderLinks";
import EventsBlock from "./EventsBlock";
import EventDetails from "../../components/EventDetails";
import Icon from "../../components/Icon/Icon";

const Index = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState();
  const calendarEl = useRef();

  let { competition } = useParams();

  const [selectedEvent, setSelectedEvent] = useState({});
  const [selectedEventId, setSelectedEventId] = useState();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/events`, {
        params: { competition, date },
        headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
      });
      setData(res.data);
    })();
  }, [competition, date]);

  useEffect(() => {
    if (!selectedEventId) {
      return;
    }
    (async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/events/${selectedEventId}`,
        {
          headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
        }
      );
      setSelectedEvent(res.data.event);
    })();
  }, [selectedEventId]);

  return (
    <div className="font-roboto  md:w-9/12 md:m-auto bg-brand-primary-100 shadow-2xl rounded border border-gray-300">
      <HeaderLinks competition={competition} />
      <section className="events flex flex-wrap justify-between shadow-2xl">
        <section
          id="event-list"
          className="w-full md:w-2/3  border-r border-gray-300"
        >
          <DateSelector date={date} setDate={setDate} />
          <EventsBlock data={data} setSelectedEventId={setSelectedEventId} />
        </section>

        <section id="event-details" className="w-full md:w-1/3 hidden md:block">
          <EventDetails event={selectedEvent} />
        </section>
      </section>
    </div>
  );
};

const DateSelector = ({ setDate, date }) => {
  return (
    <div className="bg-gray-300 py-1 px-5 uppercase text-gray-100 flex space-x-3 items-center justify-between md:justify-start  md:space-x-5 overflow-hidden">
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

export default Index;
