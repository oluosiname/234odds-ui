import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-gray-100 text-center p-1 md:px-5 py-4 w-full md:w-3/4 m-auto bg-brand-primary-100 pt-5">
      <h6 className="text-sm mb-2 font-medium">
        Welcome To 234Odds - Compare Latest Football Betting Odds from Nigerian
        Bookmakers.
      </h6>
      <p className="text-xs">
        The number one destination for real time football betting odds comparing
        across Nigerian bookmakers. 234odds.com is the one stop destination for
        viewing betting odds for major football competitions like the English
        Premier League, UEFA champions league, Spanish Laliga, Europa League,
        Bundesliga, Serie A Ligue 1 and other compeitions. Compare odds from
        major Nigerian bookmakers like Nairabet, SportyBet, betking and Bet9ja
        before placing your bets.
      </p>
      <p className="text-xs mt-3">
        Links:{" "}
        <Link to={`/competitions/premier league`} className="underline mr-1">
          English Premier League
        </Link>{" "}
        <Link to={`/competitions/serie a`} className="underline mr-1">
          Serie A
        </Link>{" "}
        <Link to={`/competitions/la liga`} className="underline mr-1">
          Spanish LaLiga
        </Link>{" "}
        <Link to={`/competitions/champions league`} className="underline mr-1">
          Champions League
        </Link>{" "}
        <Link to={`/competitions/bundesliga`} className="underline mr-1">
          Bundesliga,
        </Link>
        <Link to={`/competitions/ligue 1`} className="underline mr-1">
          Ligue 1
        </Link>{" "}
      </p>
      <p className="text-xs mt-3 font-thin">
        © 2021 234Odds | All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
