import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import HeaderLinks from "./HeaderLinks";
import EventsBlock from "./EventsBlock";
import EventDetails from "../../components/EventDetails";
import Filters from "../../components/filters";
import { stringifyDate } from "../../helpers/dates";

const Index = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState();

  let { competition } = useParams();

  const [selectedEvent, setSelectedEvent] = useState({});
  const [selectedEventId, setSelectedEventId] = useState();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/events`, {
        params: { competition, date: stringifyDate(date) },
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

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <div className="font-roboto  md:w-9/12 md:m-auto bg-brand-primary-100 shadow-2xl rounded border border-gray-300">
      <HeaderLinks competition={competition} />
      <section className="events flex flex-wrap justify-between shadow-2xl">
        <section
          id="event-list"
          className="w-full md:w-2/3  border-r border-gray-300"
        >
          <Filters date={date} setDate={setDate} handleChange={handleChange} />
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
