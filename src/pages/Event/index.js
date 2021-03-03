import React from "react";
import { useParams } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import sportybet from "../../assets/images/sportybet.png";
import nairabet from "../../assets/images/nairabet.png";
import bet9ja from "../../assets/images/bet9ja.png";
import bet9ja2 from "../../assets/images/bet9ja2.png";
import naijabet from "../../assets/images/naijabet.png";
import merrybet from "../../assets/images/merrybet.svg";
import betking from "../../assets/images/betking.svg";

const Index = () => {
  let eventId = useParams();
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
      return "w-10";
    }
    return "w-20";
  }
  return (
    <div className="bg-brand-primary-100 w-full text-sm text-gray-100 font-roboto">
      <div className="flex p-2 items-center">
        <span className="w-1/3 text-gray-100 uppercase text-xs space-x-4">
          Bookmakers
        </span>
        <div className="w-2/3 flex space-x-8 justify-end">
          <span className="px-3 py-3 md:px-10">1</span>
          <span className="px-3 py-3 md:px-10">X</span>
          <span className="px-3 py-3 md:px-10">2</span>
        </div>
      </div>
      {Object.keys(bookmakers).map((bookmaker) => {
        return (
          <div className="flex p-2 items-center">
            <div className="w-1/3">
              <img
                src={bookmakers[bookmaker]}
                className={imageClassName(bookmaker)}
                alt={bookmaker}
              />
            </div>
            <div className="w-2/3 text-xs text-gray-100 space-x-2 flex text-white justify-end font-medium">
              <span className="bg-gray-300 flex rounded-md p-3 md:px-10">
                1.30
              </span>
              <span className="bg-gray-300 flex rounded-md p-3 md:px-10">
                3.44
              </span>
              <span className="bg-blue flex rounded-md p-3 md:px-10">2.75</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
