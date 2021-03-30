import React from "react";
import parameterize from "parameterize";
import CloudImage from "./CloudImage";
import sportybet from "../assets/images/sportybet.png";
import nairabet from "../assets/images/nairabet.png";
import bet9ja from "../assets/images/bet9ja.png";
import naijabet from "../assets/images/naijabet.png";
import merrybet from "../assets/images/merrybet.svg";
import betking from "../assets/images/betking.svg";
import Icon from "./Icon/Icon";
import { Helmet } from "react-helmet";

const EventDetails = ({ event, setSelectedEventId }) => {
  const bookmakers = {
    nairabet: nairabet,
    bet9ja: bet9ja,
    sportybet: sportybet,
    // "surebet247",
    betking: betking,
    merrybet: merrybet,
    naijabet: naijabet,
  };

  function imageClassName(bookmaker) {
    if (bookmaker === "bet9ja") {
      return "w-16";
    }
    if (bookmaker === "betking") {
      return "w-8";
    }
    return "w-20";
  }

  if (!event.uid) {
    return (
      <div className="bg-brand-primary-100 w-full text-sm text-gray-100 font-roboto md:px-8 md:mb-10 ipad:px-1 border-gray-300 border-b pb-3 min-h-loading"></div>
    );
  }

  return (
    <div className="md:sticky md:top-0 bg-brand-primary-100 w-full text-sm text-gray-100 font-roboto md:px-8 md:mb-10 ipad:px-1 border-gray-300 border-b pb-3">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={`Compare betting odds from Nigerian bookmakers for ${event.home_team} vs ${event.home_team} in ${event.competition} before placing your bets to optimize your winnings`}
        />
        <title>{`${event.home_team} vs ${event.away_team} | Compare Nigerian Bookmaker Betting Odds on 234Odds.com `}</title>
      </Helmet>

      <header className="hidden md:flex pb-2  justify-end cursor-pointer">
        <Icon name="icon-close" onClick={() => setSelectedEventId(null)} />
      </header>
      <section className="px-5 bg-stadium">
        <div className="text-center py-3 text-xs">
          {" "}
          <span className="capitalize mr-2">{event.country}</span>/
          <span className="ml-2 capitalize">{event.competition}</span>{" "}
        </div>
        <section className="flex text-xs justify-between items-center py-3 ">
          <div className=" flex justify-between items-center flex-col space-y-2 w-1/3">
            <CloudImage
              name={parameterize(event.home_team)}
              className="h-14 w-14"
              width={"72"}
            />
            <span className="text-white text-center whitespace-nowrap">
              {event.home_team}
            </span>
          </div>

          <div className="text-center text-white w-1/3">
            {`${event.date}, ${event.kickoff}`}
          </div>
          <div className="flex flex-col justify-between items-center space-y-2 w-1/3">
            <CloudImage
              name={parameterize(event.away_team)}
              className="h-14 w-14"
              width={"72"}
            />
            <span className="text-white text-center whitespace-nowrap">
              {event.away_team}
            </span>
          </div>
        </section>
      </section>
      <div className="bg-gray-300 py-3 px-5 uppercase text-gray-100 flex justify-between  space-x-2">
        <TopOdds
          odds={event.top_odds.home}
          bookmaker={"nairabet"}
          kind={"Home"}
        />
        <TopOdds
          odds={event.top_odds.draw}
          bookmaker={"bet9ja"}
          kind={"draw"}
        />
        <TopOdds
          odds={event.top_odds.away}
          bookmaker={"nairabet"}
          kind={"away"}
        />
      </div>

      {/* home_form: ["W", "D", "L", "W", "D"],
      away_form: ["W", "W", "L", "W", "W"], */}
      {/* <div className="flex flex-col  p-2  space-y-4">
        <h6 className="text-xs text-center">FORM</h6>
        <div className="flex space-x-1.5 items-center justify-center">
          <span className="mr-4">
            <Icon name={`icon-arsenal`} className="w-4" size="1.2rem" />
          </span>

          {event.home_form.map((o) => {
            return <FormOutcome outcome={o} />;
          })}
        </div>
        <div className="flex space-x-1.5 items-center justify-center">
          <span className="mr-4">
            <Icon name={`icon-manchester-city`} className="w-4" size="1.2rem" />
          </span>

          {event.away_form.map((o) => {
            return <FormOutcome outcome={o} />;
          })}
        </div>
      </div> */}
      <div className="flex p-2 items-center">
        <span className="w-1/3 text-gray-100 uppercase text-xs space-x-4 ipad:space-x-1"></span>
        <div className="w-2/3 flex space-x-8 justify-end font-medium">
          <span className="px-3 py-3">1</span>
          <span className="px-3 py-3">X</span>
          <span className="px-3 py-3">2</span>
        </div>
      </div>
      {event.odds.map((bookmaker_odds, i) => {
        return (
          <div className="flex p-1.5 items-center" key={i.toString()}>
            <div className="w-1/3">
              <img
                src={bookmakers[bookmaker_odds.bookmaker]}
                className={imageClassName(bookmaker_odds.bookmaker)}
                alt={bookmaker_odds.bookmaker}
              />
            </div>
            <div className="w-2/3 text-xs text-gray-100 space-x-3 ipad:space-x-1 flex text-white justify-end font-medium">
              <span
                className={`${
                  event.top_odds.home === bookmaker_odds.home
                    ? "bg-blue-100"
                    : "bg-gray-300"
                } flex rounded-md p-3`}
              >
                {bookmaker_odds.home}
              </span>
              <span
                className={`${
                  event.top_odds.draw === bookmaker_odds.draw
                    ? "bg-blue-100"
                    : "bg-gray-300"
                } flex rounded-md p-3`}
              >
                {bookmaker_odds.draw}
              </span>
              <span
                className={`${
                  event.top_odds.away === bookmaker_odds.away
                    ? "bg-blue-100"
                    : "bg-gray-300"
                } flex rounded-md p-3`}
              >
                {bookmaker_odds.away}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const FormOutcome = ({ outcome }) => {
  function bg() {
    if (outcome === "W") {
      return "green";
    }
    if (outcome === "D") {
      return "gray-400";
    }
    if (outcome === "L") {
      return "red";
    }
  }
  return (
    <span
      className={`bg-${bg(
        outcome
      )} text-xxs w-5 h-5 text-white rounded-full flex items-center justify-evenly`}
    >
      {outcome}
    </span>
  );
};

const TopOdds = ({ odds, bookmaker, kind }) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="uppercase text-xxs text-center ">{kind}</div>
      <div className="flex  text-xs whitespace-nowrap items-center shadow font-medium text-white">
        <span className="h-8 px-3 flex items-center bg-gray-200  rounded-l-md">
          {odds}
        </span>
        <span className="h-8 px-2 flex  items-center bg-brand-primary-100  rounded-r-md ">
          <img src={nairabet} alt="bookmaker" />
        </span>
      </div>
    </div>
  );
};

export default EventDetails;
