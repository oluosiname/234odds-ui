import React from "react";
import sportybet from "../assets/images/sportybet.png";
import nairabet from "../assets/images/nairabet.png";
import bet9ja from "../assets/images/bet9ja.png";
import naijabet from "../assets/images/naijabet.png";
import merrybet from "../assets/images/merrybet.svg";
import betking from "../assets/images/betking.svg";
import Icon from "./Icon/Icon";

const EventDetails = () => {
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
  return (
    <div className="md:sticky md:top-0  bg-brand-primary-100 w-full text-sm text-gray-100 font-roboto md:px-8 h-screen">
      <div className="bg-gray-300 py-3 px-5 uppercase text-gray-100 flex justify-between  space-x-2">
        <TopOdds odds={1.25} bookmaker={"nairabet"} kind={"Home"} />
        <TopOdds odds={3.05} bookmaker={"bet9ja"} kind={"draw"} />
        <TopOdds odds={4.22} bookmaker={"nairabet"} kind={"away"} />
      </div>
      <div className="flex flex-col  p-2  space-y-4">
        <h6 className="text-xs text-center">FORM</h6>
        <div className="flex space-x-1.5 items-center justify-center">
          <span className="mr-4">
            <Icon name={`icon-arsenal`} className="w-4" size="1.2rem" />
          </span>

          {["W", "D", "L", "W", "D"].map((o) => {
            return <FormOutcome outcome={o} />;
          })}
        </div>
        <div className="flex space-x-1.5 items-center justify-center">
          <span className="mr-4">
            <Icon name={`icon-manchester-city`} className="w-4" size="1.2rem" />
          </span>

          {["W", "W", "L", "W", "W"].map((o) => {
            return <FormOutcome outcome={o} />;
          })}
        </div>
      </div>
      <div className="flex p-2 items-center">
        <span className="w-1/3 text-gray-100 uppercase text-xs space-x-4">
          Bookmakers
        </span>
        <div className="w-2/3 flex space-x-8 justify-end">
          <span className="px-3 py-3">1</span>
          <span className="px-3 py-3">X</span>
          <span className="px-3 py-3">2</span>
        </div>
      </div>
      {Object.keys(bookmakers).map((bookmaker) => {
        return (
          <div className="flex p-1.5 items-center">
            <div className="w-1/3">
              <img
                src={bookmakers[bookmaker]}
                className={imageClassName(bookmaker)}
                alt={bookmaker}
              />
            </div>
            <div className="w-2/3 text-xs text-gray-100 space-x-3 flex text-white justify-end font-medium">
              <span className="bg-gray-300 flex rounded-md p-3">1.30</span>
              <span className="bg-gray-300 flex rounded-md p-3">3.44</span>
              <span className="bg-blue flex rounded-md p-3">2.75</span>
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
          <img src={nairabet} />
        </span>
      </div>
    </div>
  );
};

export default EventDetails;
