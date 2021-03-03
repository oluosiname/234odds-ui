import React from "react";
import Icon from "../../components/Icon/Icon";
import { Link } from "react-router-dom";

import parameterize from "parameterize";

const Event = ({ event }) => {
  return (
    <Link to={`/events/${event.id}`}>
      <div className="flex bg-brand-primary-100 p-4 px-5 border-b border-brand-primary-200 ">
        <div className="w-3/5 flex text-gray-100 text-xs">
          <div className="time w-1/4">{event.kickoff}</div>
          <div className="teams flex flex-col  w-3/4 justify-between">
            <div className="flex space-x-2">
              <span>
                <Icon
                  name={`icon-${parameterize(event.home_team)}`}
                  className="w-4"
                />
              </span>
              <span>{event.home_team}</span>
            </div>
            <div className="flex space-x-2">
              <span>
                <Icon
                  name={`icon-${parameterize(event.away_team)}`}
                  className="w-4"
                />
              </span>
              <span>{event.away_team}</span>
            </div>
          </div>
        </div>
        <div className="w-2/5 text-xs text-gray-100 space-x-2 flex text-white justify-end">
          <span className="bg-gray-300 flex rounded-md px-2 py-3">
            {event.home_odds}
          </span>
          <span className="bg-gray-300 flex rounded-md px-2 py-3">
            {event.draw_odds}
          </span>
          <span className="bg-gray-300 flex rounded-md px-2 py-3">
            {event.away_odds}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Event;
