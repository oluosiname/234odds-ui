import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import DatePicker from "react-datepicker";
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

  function stringifyDate(value) {
    return new Intl.DateTimeFormat("en-US").format(value);
  }

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
          <div className="bg-gray-300 py-2 px-5 uppercase text-gray-100 flex space-x-3 items-center">
            <div
              className={`cursor-pointer flex py-1.5 px-3 rounded-3xl text-xxs tracking-wide whitespace-nowrap items-center space-x-2 border  border-gray-100 ${
                date && stringifyDate(date) === stringifyDate(new Date())
                  ? "border  border-blue-100"
                  : ""
              }`}
              onClick={() => setDate(new Date())}
            >
              <span>
                <Icon name="icon-today" />
              </span>
              <span>Today</span>
            </div>

            <div
              className={`cursor-pointer flex py-1.5 px-3 rounded-3xl text-xxs tracking-wide whitespace-nowrap items-center space-x-2 border  border-gray-100 ${
                date && stringifyDate(date) !== stringifyDate(new Date())
                  ? "border  border-blue-100"
                  : ""
              }`}
              onClick={() => calendarEl.current.setOpen(true)}
            >
              <span>
                <Icon name="icon-calendar" />
              </span>
              <span>
                {date && date !== stringifyDate(new Date())
                  ? stringifyDate(date)
                  : "Select"}
              </span>
            </div>
            <DatePicker
              selected={date ? new Date(date) : new Date()}
              onChange={(date) => setDate(date)}
              ref={calendarEl}
              className="hidden"
            />

            <span className="cursor-pointer" onClick={() => setDate(null)}>
              <Icon name="icon-undo" />
            </span>
          </div>
          <EventsBlock data={data} setSelectedEventId={setSelectedEventId} />
        </section>

        <section id="event-details" className="w-full md:w-1/3 hidden md:block">
          <EventDetails event={selectedEvent} />
        </section>
      </section>
    </div>
  );
};

export default Index;
