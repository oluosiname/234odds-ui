import React from "react";
import parameterize from "parameterize";
import Icon from "./Icon/Icon";

const HeaderLinks = () => {
  const leagues = [
    "Premier league",
    "La Liga",
    "Serie A",
    "Ligue One",
    "Bundesliga",
    "Champions League",
    "Europa League",
  ];

  return (
    <section className="flex space-x-4 text-white bg-brand-primary-100 text-xs px-3 py-3 pt-3.5 max-w-full overflow-x-scroll md:space-x-8">
      {leagues.map((league) => {
        return (
          <div className="flex py-3 px-3 bg-gray-200 rounded-3xl uppercase text-xxs font-medium md:text-xs tracking-wide whitespace-nowrap items-center space-x-2">
            <Icon
              name={`icon-${parameterize(league)}`}
              className="w-4"
              color="#ffffff"
            />
            <span>{league}</span>
          </div>
        );
      })}
    </section>
  );
};

export default HeaderLinks;
