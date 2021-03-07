import React from "react";
import parameterize from "parameterize";

import Icon from "../../components/Icon/Icon";
import EventLine from "./EventLine";

const EventsBlock = ({ data }) => {
  return (
    <div className="events-block">
      {data.map(({ competition, events }) => {
        return (
          <div key={competition}>
            <div className=" bg-gray-200 text-gray-100 uppercase text-xs align-middle p-2 px-5 flex items-center space-x-4">
              <Icon
                name={`icon-${parameterize(competition)}`}
                className="w-4"
                color="#ffffff"
              />
              <span className="uppercase">{competition}</span>
            </div>
            {events.map(({ day, day_events }) => {
              return (
                <div key={day}>
                  <div className="flex bg-gray-300 p-1 px-5">
                    <div className="w-3/5 text-xs text-gray-100">{day}</div>
                    <div className="w-2/5 text-xs text-gray-100 space-x-3 flex justify-end">
                      <span className="w-full flex justify-center">Home</span>
                      <span className=" w-full flex justify-center">Draw</span>
                      <span className="w-full flex justify-center">Away</span>
                    </div>
                  </div>
                  {day_events.map((event) => {
                    return (
                      <EventLine event={event} key={event.uid.toString()} />
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default EventsBlock;
