import React from "react";
import PropTypes from "prop-types";
import CloudImage from "./CloudImage";
import parameterize from "parameterize";
import { useDispatch } from "react-redux";
import { CLOSE_MENU } from "../redux/app/app-reducer";
import { Link } from "react-router-dom";

const SideLinks = (props) => {
  const countries = [
    "england",
    "italy",
    "spain",
    "germany",
    "france",
    "europe",
    "netherlands",
    "nigeria",
    "belgium",
    "brazil",
    "russia",
    "USA",
    "south america",
    "north america",
    "scotland",
    "portugal",
    "asia",
    "international",
    "world",
    "africa",
  ];

  return (
    <ul className="text-white md:text-xs text-sm border-t md:border-0 border-gray-100 border-opacity-5">
      {countries.map((country) => {
        return <SideLink country={country} key={country} />;
      })}
    </ul>
  );
};

SideLinks.propTypes = {};

const SideLink = ({ country }) => {
  const dispatch = useDispatch();
  return (
    <li className="md:p-3 py-3 px-3 border-b border-gray-300 md:border-0 ">
      <Link
        to={`/country/${country}`}
        className="capitalize hover:text-blue-100 cursor-pointer flex space-x-6 ipad:space-x-2 items-center"
        onClick={() => dispatch({ type: CLOSE_MENU })}
      >
        <CloudImage name={parameterize(country)} className="h-5 w-5" />
        <span>{country}</span>
      </Link>
    </li>
  );
};

SideLink.propTypes = { country: PropTypes.string.isRequired };

export default SideLinks;
