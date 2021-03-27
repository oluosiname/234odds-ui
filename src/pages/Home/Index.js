import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getNews } from "../../redux/news/news-reducer";
import { getEvents, getEvent } from "../../redux/events/events-reducer";

import HeaderLinks from "./HeaderLinks";
import EventsBlock from "./EventsBlock";
import EventDetails from "../../components/EventDetails";
import Filters from "../../components/filters";
import { stringifyDate } from "../../helpers/dates";
import NewsItem from "../../components/NewsItem";
import SideLinks from "../../components/SideLinks";

const Index = () => {
  const [date, setDate] = useState();

  const [search, setSearch] = useState();

  let { competition } = useParams();
  let { country } = useParams();

  const [selectedEventId, setSelectedEventId] = useState();

  const dispatch = useDispatch(); //this hook gives us dispatch method
  const { news } = useSelector(({ newsReducer }) => newsReducer);
  const { events } = useSelector(({ eventsReducer }) => eventsReducer);
  const { event: selectedEvent } = useSelector(
    ({ eventsReducer }) => eventsReducer
  );

  useEffect(() => {
    if (!selectedEventId) {
      return;
    }
    dispatch(getEvent(selectedEventId));
  }, [selectedEventId, dispatch]);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getEvents({ competition, search, country, date: stringifyDate(date) })
    );
  }, [dispatch, competition, search, country, date]);

  const handleChange = (value) => {
    if (value && value.length > 2) {
      setSearch(value);
    }

    if (value.length === 0) {
      setSearch(null);
    }
  };

  return (
    <div className="font-roboto  ipad:w-full lg:w-9/12 md:m-auto bg-brand-primary-100 shadow-2xl rounded border border-gray-300 rounded-b-none">
      <HeaderLinks competition={competition} />
      <section className="events flex flex-wrap justify-between shadow-2xl">
        <section
          id="country-list"
          className="md:w-1/6  border-r border-gray-300 hidden md:block border-b border-brand-primary-200"
        >
          <SideLinks />
        </section>
        <section
          id="event-list"
          className="w-full md:w-3/6  border-r border-gray-300 min-h-loading"
        >
          <Filters
            date={date}
            setDate={setDate}
            handleChange={handleChange}
            search={search}
          />
          <EventsBlock data={events} setSelectedEventId={setSelectedEventId} />
        </section>

        <section
          id="event-details"
          className="w-full md:w-2/6 hidden md:block border-b border-brand-primary-200"
        >
          <EventDetails event={selectedEvent} />
          <ul className="bg-brand-primary-100 w-full text-sm text-gray-100 font-roboto md:px-8 h-screen">
            {news.map((article) => {
              return (
                <li key={article.headline} className="mb-8">
                  <NewsItem article={article} />
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </div>
  );
};

export default Index;
