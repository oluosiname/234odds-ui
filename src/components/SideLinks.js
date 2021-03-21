import React from "react";
import PropTypes from "prop-types";
import CloudImage from "./CloudImage";
import parameterize from "parameterize";
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
    <ul className="p-3 pt-0 text-white text-xs">
      {countries.map((country) => {
        return <SideLink country={country} key={country} />;
      })}
    </ul>
  );
};

SideLinks.propTypes = {};

const SideLink = ({ country }) => {
  return (
    <li className="p-3">
      <Link
        to={`/country/${country}`}
        className="capitalize hover:text-blue-100 cursor-pointer flex space-x-6 ipad:space-x-2 items-center"
      >
        <CloudImage name={parameterize(country)} className="h-4 w-4" />
        <span>{country}</span>
      </Link>
    </li>
  );
};

SideLink.propTypes = { country: PropTypes.string.isRequired };

export default SideLinks;
