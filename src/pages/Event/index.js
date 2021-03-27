import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EventDetails from "../../components/EventDetails";
import { getEvent } from "../../redux/events/events-reducer";

const Index = () => {
  let { eventId } = useParams();

  const dispatch = useDispatch(); //this hook gives us dispatch method
  const { event } = useSelector(({ eventsReducer }) => eventsReducer);

  useEffect(() => {
    dispatch(getEvent(eventId));
  }, [eventId, dispatch]);

  return <EventDetails event={event} />;
};

export default Index;
