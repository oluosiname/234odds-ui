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

  return (
    <section className=" md:flex hidden text-xs px-3 py-3 pt-3.5 max-w-full overflow-x-scroll portrait:overflow-x-scroll ipad:overflow-x-scroll lg:overflow-x-hidden text-white bg-brand-primary-100 justify-between md:space-x-2">
      <Link to="/">
        <HeaderPill
          competition={"All"}
          selectedCompetition={selectedCompetition}
          icon="icon-all"
        />
      </Link>
      {competitions.map((competition) => {
        return (
          <Link to={`/competitions/${competition}`} key={competition}>
            <HeaderPill
              competition={competition}
              selectedCompetition={selectedCompetition}
            />
          </Link>
        );
      })}
    </section>
  );
};

const HeaderPill = ({ competition, selectedCompetition, icon = null }) => {
  function isSelected(competition) {
    if (competition === "All" && !selectedCompetition) {
      return true;
    }
    return selectedCompetition === competition;
  }

  return (
    <div
      className={`flex py-2 px-5 rounded-3xl uppercase text-xxs font-medium tracking-wide whitespace-nowrap items-center bg-gray-200 space-x-4 cursor-pointer  ${
        isSelected(competition) ? "border  border-blue-100" : ""
      }`}
    >
      {icon && <Icon name={icon} className="w-4" color="#ffffff" />}
      {!icon && (
        <CloudImage
          name={parameterize(competition)}
          className="w-4 h-5 max-w-none object-contain"
        />
      )}

      <span>{competition}</span>
    </div>
  );
};

export default HeaderLinks;
