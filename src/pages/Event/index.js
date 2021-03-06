import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import EventDetails from "../../components/EventDetails";

const Index = () => {
  let { eventId } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/events/${eventId}`
      );
      setEvent(res.data.event);
    })();

    return () => {
      // cleanup;
    };
  }, [eventId]);

  return <EventDetails event={event} />;
};

export default Index;
