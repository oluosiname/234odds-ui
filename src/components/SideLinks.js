import React from "react";
import PropTypes from "prop-types";
import CloudImage from "./CloudImage";
import parameterize from "parameterize";

const SideLinks = (props) => {
  const countries = [
    "england",
    "italy",
    "spain",
    "germany",
    "france",
    "europe",
    "netherland",
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
    <li className="p-3 capitalize hover:text-blue-100 cursor-pointer flex space-x-6 ipad:space-x-3 items-center">
      <CloudImage name={parameterize(country)} className="h-4 w-4" />
      <span>{country}</span>
    </li>
  );
};

SideLink.propTypes = { country: PropTypes.string.isRequired };

export default SideLinks;
