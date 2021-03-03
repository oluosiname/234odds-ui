import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import EventDetails from "../../components/EventDetails";
import HeaderLinks from "../Home/HeaderLinks";

const Index = () => {
  let eventId = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    // (async () => {
    //   axios.get(`/api/v1/events/${eventId}`);
    // })();
    setEvent({
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
    return () => {
      // cleanup;
    };
  }, [eventId]);

  return (
    <>
      <HeaderLinks />
      <EventDetails event={event} />
    </>
  );
};

export default Index;
