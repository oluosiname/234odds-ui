import React from "react";
import parameterize from "parameterize";
import Icon from "../../components/Icon/Icon";
import { Link } from "react-router-dom";
import CloudImage from "../../components/CloudImage";

const HeaderLinks = ({ competition: selectedCompetition }) => {
  const competitions = [
    "Premier league",
    "La Liga",
    "Serie A",
    "Ligue 1",
    "Bundesliga",
    "Champions League",
    "Europa League",
  ];

  function isSelected(competition) {
    return selectedCompetition === competition;
  }

  return (
    <section className="flex space-x-2  text-xs px-3 py-3 pt-3.5 max-w-full overflow-x-scroll md:overflow-x-hidden md:space-x-3 text-white bg-brand-primary-100 ">
      <Link to="/">
        <div
          className={`flex py-2 px-3 rounded-3xl uppercase text-xxs font-medium md:text-xs tracking-wide whitespace-nowrap items-center bg-gray-200 space-x-2 cursor-pointer  ${
            selectedCompetition ? "" : "border  border-blue-100"
          }`}
        >
          <Icon name={`icon-world`} className="w-4" color="#ffffff" />
          <span>All</span>
        </div>
      </Link>
      {competitions.map((competition) => {
        return (
          <Link to={`/competitions/${competition}`} key={competition}>
            <div
              className={`flex py-2 px-3 rounded-3xl uppercase text-xxs font-medium md:text-xs tracking-wide whitespace-nowrap items-center bg-gray-200 space-x-2 cursor-pointer  ${
                isSelected(competition) ? "border  border-blue-100" : ""
              }`}
            >
              <CloudImage
                name={parameterize(competition)}
                className="w-4 h-5 max-w-none object-contain"
              />

              <span>{competition}</span>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default HeaderLinks;
