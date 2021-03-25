import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getNews } from "../../redux/news/news-reducer";

import axios from "axios";

import HeaderLinks from "./HeaderLinks";
import EventsBlock from "./EventsBlock";
import EventDetails from "../../components/EventDetails";
import Filters from "../../components/filters";
import { stringifyDate } from "../../helpers/dates";
import NewsItem from "../../components/NewsItem";
import SideLinks from "../../components/SideLinks";

const Index = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState();

  const [search, setSearch] = useState();

  let { competition } = useParams();
  let { country } = useParams();

  const [selectedEvent, setSelectedEvent] = useState({});
  const [selectedEventId, setSelectedEventId] = useState();

  const dispatch = useDispatch(); //this hook gives us dispatch method
  const { news } = useSelector(({ newsReducer }) => newsReducer);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/events`, {
        params: { competition, search, country, date: stringifyDate(date) },
        headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
      });
      setData(res.data);
    })();
  }, [competition, date, search, country]);

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

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const handleChange = (value) => {
    if (value && value.length > 2) {
      setSearch(value);
    }

    if (value.length === 0) {
      setSearch(null);
    }
  };

  return (
    <div className="font-roboto  ipad:w-full lg:w-9/12 md:m-auto bg-brand-primary-100 shadow-2xl rounded border border-gray-300">
      <HeaderLinks competition={competition} />
      <section className="events flex flex-wrap justify-between shadow-2xl">
        <section
          id="country-list"
          className="md:w-1/6  border-r border-gray-300 hidden md:block"
        >
          <SideLinks />
        </section>
        <section
          id="event-list"
          className="w-full md:w-3/6  border-r border-gray-300"
        >
          <Filters
            date={date}
            setDate={setDate}
            handleChange={handleChange}
            search={search}
          />
          <EventsBlock data={data} setSelectedEventId={setSelectedEventId} />
        </section>

        <section id="event-details" className="w-full md:w-2/6 hidden md:block">
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
      <footer className=" text-white text-center p-1 md:px-5">
        <h6 className="text-sm mb-2 font-medium">
          Welcome To 234Odds - Compare Latest Football Betting Odds from
          Nigerian Bookmakers.
        </h6>
        <p className="text-xs">
          The number one destination for real time football betting odds
          comparing across Nigerian bookmakers. 234odds.com is the one stop
          destination for viewing betting odds for major football competitions
          like the English premier league, UEFA champions league, Spanish
          Laliga, Europa League, Bundesliga, Serie A Ligue 1 and other
          compeitions. Compare odds from major Nigerian bookmakers like
          Nairabet, SportyBet, betking and Bet9ja before placing your bets.
        </p>
        <p className="text-xs mt-3">
          Links:{" "}
          <Link to={`/competitions/premier league`} className="underline mr-1">
            English premier League
          </Link>{" "}
          <Link to={`/competitions/serie a`} className="underline mr-1">
            Serie A
          </Link>{" "}
          <Link to={`/competitions/la liga`} className="underline mr-1">
            Spanish LaLiga
          </Link>{" "}
          <Link
            to={`/competitions/champions league`}
            className="underline mr-1"
          >
            Champions League
          </Link>{" "}
          <Link to={`/competitions/bundesliga`} className="underline mr-1">
            Bundesliga,
          </Link>
          <Link to={`/competitions/ligue 1`} className="underline mr-1">
            Ligue 1
          </Link>{" "}
        </p>
        <p className="text-xs mt-3 font-thin">© 2021 234Odds</p>
      </footer>
    </div>
  );
};

export default Index;
