import React from "react";
import Icon from "../../components/Icon/Icon";
import Event from "./Event";

const EventsBlock = ({ events }) => {
  return (
    <div className="events-block">
      <div className=" bg-gray-200 text-gray-100 uppercase text-xs align-middle p-2 px-5 flex items-center space-x-4">
        {/* <Icon name="icon-england" className="w-4" /> */}
        <Icon name="icon-premier-league" className="w-4" />
        <span>PREMIER LEAGUE</span>
      </div>
      <div className="flex bg-gray-300 p-1 px-5">
        <div className="w-3/5 text-xs text-gray-100">Today</div>
        <div className="w-2/5 text-xs text-gray-100 space-x-3 flex justify-end">
          <span className="px-1">Home</span>
          <span className=" px-1">Draw</span>
          <span className="px-1">Away</span>
        </div>
      </div>
      {events.map((event) => {
        return <Event event={event} key={event.id.toString()} />;
      })}
    </div>
  );
};

export default EventsBlock;
