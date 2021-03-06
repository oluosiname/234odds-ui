import React from "react";
import parameterize from "parameterize";
import Icon from "../../components/Icon/Icon";

const HeaderLinks = ({ setCompetition, competition: selectedCompetition }) => {
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
    <section className="flex space-x-2  text-xs px-3 py-3 pt-3.5 max-w-full overflow-x-scroll md:overflow-x-hidden md:space-x-8 text-white bg-brand-primary-100 ">
      {competitions.map((competition) => {
        return (
          <div
            className={`flex py-2 px-3 rounded-3xl uppercase text-xxs font-medium md:text-xs tracking-wide whitespace-nowrap items-center bg-gray-200 space-x-2 ${
              isSelected(competition) ? "border  border-blue" : ""
            }`}
            key={competition}
            onClick={() => setCompetition(competition)}
          >
            <Icon
              name={`icon-${parameterize(competition)}`}
              className="w-4"
              color="#ffffff"
            />
            <span>{competition}</span>
          </div>
        );
      })}
    </section>
  );
};

export default HeaderLinks;
