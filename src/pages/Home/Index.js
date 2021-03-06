import React, { useState, useEffect } from "react";
import axios from "axios";

import HeaderLinks from "./HeaderLinks";
import EventsBlock from "./EventsBlock";
import EventDetails from "../../components/EventDetails";
import Icon from "../../components/Icon/Icon";

const Index = () => {
  const [data, setData] = useState([]);
  const [competition, setCompetition] = useState();

  const [selectedEvent, setSelectedEvent] = useState({
    uid: "3456UISS",
    top_odds: {
      home: 1.25,
      draw: 3.05,
      away: 2.33,
    },
    home_form: ["W", "D", "L", "W", "D"],
    away_form: ["W", "W", "L", "W", "W"],
    odds: [
      { bookmaker: "nairabet", home: 1.35, away: 2.32, draw: 3.05 },
      { bookmaker: "merrybet", home: 1.25, away: 2.33, draw: 3.28 },
      { bookmaker: "naijabet", home: 1.25, away: 2.45, draw: 3.33 },
      { bookmaker: "sportybet", home: 1.35, away: 2.32, draw: 3.21 },
      { bookmaker: "bet9ja", home: 1.11, away: 2.33, draw: 3.98 },
      { bookmaker: "betking", home: 1.25, away: 2.25, draw: 3.34 },
    ],
  });

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/events`, {
        headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
      });
      setData(res.data);
    })();

    return () => {
      // cleanup;
    };
  }, []);

  useEffect(() => {
    if (!competition) {
      return;
    }
    (async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/events?competition=${competition}`,
        {
          headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
        }
      );
      setData(res.data);
    })();
  }, [competition]);

  return (
    <div className="font-roboto  md:w-9/12 md:m-auto bg-brand-primary-100 shadow-2xl rounded border border-gray-300">
      <HeaderLinks setCompetition={setCompetition} competition={competition} />
      <section className="events flex flex-wrap justify-between shadow-2xl">
        <section
          id="event-list"
          className="w-full md:w-2/3  border-r border-gray-300"
        >
          <div className="bg-gray-300 py-2 px-5 uppercase text-gray-100 flex space-x-4">
            <div className="flex py-1.5 px-3 rounded-3xl text-xxs tracking-wide whitespace-nowrap items-center space-x-2 border  border-gray-100">
              <span>
                <Icon name="icon-today" />
              </span>
              <span>Today</span>
            </div>

            <div className="flex py-1.5 px-3 rounded-3xl text-xxs tracking-wide whitespace-nowrap items-center space-x-2 border  border-gray-100">
              <span>
                <Icon name="icon-calendar" />
              </span>
              <span>Select</span>
            </div>
          </div>
          <EventsBlock data={data} />
        </section>

        <section id="event-details" className="w-full md:w-1/3 hidden md:block">
          <EventDetails event={selectedEvent} />
        </section>
      </section>
    </div>
  );
};

export default Index;
