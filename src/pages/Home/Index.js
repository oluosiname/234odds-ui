import React from "react";

import HeaderLinks from "./HeaderLinks";
import EventsBlock from "./EventsBlock";
import EventDetails from "../../components/EventDetails";
import Icon from "../../components/Icon/Icon";

const Index = () => {
  const events = [
    {
      id: 2,
      home_team: "Manchester United",
      away_team: "Brighton",
      home_odds: 2.72,
      away_odds: 3.26,
      draw_odds: 1.61,
      kickoff: "18:00",
    },
    {
      id: 3,
      home_team: "Liverpool",
      away_team: "Burnley",
      home_odds: 1.11,
      away_odds: 1.95,
      draw_odds: 3.05,
      kickoff: "12:55",
    },
    {
      id: 4,
      home_team: "Aston Villa",
      away_team: "West Ham",
      home_odds: 3.03,
      away_odds: 3.86,
      draw_odds: 1.54,
      kickoff: "16:55",
    },
    {
      id: 5,
      home_team: "Manchester United",
      away_team: "Brighton",
      home_odds: 2.28,
      away_odds: 1.75,
      draw_odds: 1.87,
      kickoff: "13:30",
    },
    {
      id: 6,
      home_team: "Crystal Palace",
      away_team: "Aston Villa",
      home_odds: 3.55,
      away_odds: 4.01,
      draw_odds: 1.45,
      kickoff: "12:00",
    },
    {
      id: 7,
      home_team: "Southampton",
      away_team: "West Brom",
      home_odds: 2.65,
      away_odds: 1.95,
      draw_odds: 4.01,
      kickoff: "12:48",
    },
    {
      id: 8,
      home_team: "Chelsea",
      away_team: "Leicester",
      home_odds: 2.02,
      away_odds: 2.02,
      draw_odds: 3.26,
      kickoff: "16:30",
    },
    {
      id: 9,
      home_team: "Liverpool",
      away_team: "Wolves",
      home_odds: 1.88,
      away_odds: 2.63,
      draw_odds: 4.01,
      kickoff: "11:59",
    },
    {
      id: 10,
      home_team: "Southampton",
      away_team: "West Brom",
      home_odds: 2.09,
      away_odds: 3.28,
      draw_odds: 1.79,
      kickoff: "12:50",
    },
    {
      id: 12,
      home_team: "Manchester City",
      away_team: "Newcastle",
      home_odds: 3.74,
      away_odds: 3.95,
      draw_odds: 2.58,
      kickoff: "18:22",
    },
    {
      id: 13,
      home_team: "Aston Villa",
      away_team: "Newcastle",
      home_odds: 4.01,
      away_odds: 2.56,
      draw_odds: 3.17,
      kickoff: "9:14",
    },
    {
      id: 14,
      home_team: "Tottenham",
      away_team: "Leeds",
      home_odds: 1.16,
      away_odds: 2.77,
      draw_odds: 4.11,
      kickoff: "2:01",
    },
    {
      id: 15,
      home_team: "Sheffield United",
      away_team: "Burnley",
      home_odds: 3.33,
      away_odds: 3.64,
      draw_odds: 3.13,
      kickoff: "11:10",
    },
    {
      id: 16,
      home_team: "Newcastle",
      away_team: "Fulham",
      home_odds: 3.87,
      away_odds: 1.95,
      draw_odds: 4.17,
      kickoff: "15:54",
    },
    {
      id: 17,
      home_team: "Arsenal",
      away_team: "Aston Villa",
      home_odds: 1.28,
      away_odds: 1.33,
      draw_odds: 1.61,
      kickoff: "11:15",
    },
    {
      id: 18,
      home_team: "Leeds",
      away_team: "Everton",
      home_odds: 4.12,
      away_odds: 2.33,
      draw_odds: 1.41,
      kickoff: "11:00",
    },
    {
      id: 19,
      home_team: "Everton",
      away_team: "Liverpool",
      home_odds: 2.04,
      away_odds: 1.38,
      draw_odds: 2.89,
      kickoff: "12:40",
    },
    {
      id: 20,
      home_team: "Manchester City",
      away_team: "Fulham",
      home_odds: 3.79,
      away_odds: 3.75,
      draw_odds: 3.14,
      kickoff: "18:40",
    },
  ];

  return (
    <div className="font-roboto  md:w-9/12 md:m-auto bg-brand-primary-100 shadow-2xl rounded border border-gray-300">
      <HeaderLinks />
      <section className="events flex flex-wrap justify-between shadow-2xl">
        <section
          id="event-list"
          className="w-full md:w-2/3  border-r border-gray-300"
        >
          <div className="bg-gray-300 py-3 px-5 uppercase text-gray-100 flex space-x-4">
            <div className="flex py-2 px-3 rounded-3xl text-xxs tracking-wide whitespace-nowrap items-center space-x-2 border  border-gray-100">
              <span>Today</span>
            </div>
            <div className="flex py-2 px-3 rounded-3xl text-xxs tracking-wide whitespace-nowrap items-center space-x-2 border  border-gray-100">
              <span>Mar 24</span>
            </div>
            <div className="flex py-2 px-3 rounded-3xl text-xxs tracking-wide whitespace-nowrap items-center space-x-2 border  border-gray-100">
              <span>Mar 25</span>
            </div>
            <div className="flex py-2 px-3 rounded-3xl text-xxs tracking-wide whitespace-nowrap items-center space-x-2 border  border-gray-100">
              <span>Mar 26</span>
            </div>
          </div>
          <EventsBlock events={events} />
        </section>

        <section id="event-details" className="w-full md:w-1/3 hidden md:block">
          <EventDetails />
        </section>
      </section>
    </div>
    // <div className="font-roboto  md:w-9/12 md:m-auto bg-brand-primary-100 shadow-2xl rounded overflow-hidden border border-gray-300">
    //   <HeaderLinks />
    //   <section className="events flex flex-wrap justify-between shadow-2xl">
    //     <section
    //       id="event-list"
    //       className="w-full md:w-2/3  border-r border-gray-300"
    //     >
    //       <div className="bg-gray-300 py-3 px-5 uppercase text-gray-100 flex space-x-4">
    //         <div className="flex py-2 px-3 rounded-3xl text-xxs tracking-wide whitespace-nowrap items-center space-x-2 border  border-gray-100">
    //           <span>Today</span>
    //         </div>
    //         <div className="flex py-2 px-3 rounded-3xl text-xxs tracking-wide whitespace-nowrap items-center space-x-2 border  border-gray-100">
    //           <span>Mar 24</span>
    //         </div>
    //         <div className="flex py-2 px-3 rounded-3xl text-xxs tracking-wide whitespace-nowrap items-center space-x-2 border  border-gray-100">
    //           <span>Mar 25</span>
    //         </div>
    //         <div className="flex py-2 px-3 rounded-3xl text-xxs tracking-wide whitespace-nowrap items-center space-x-2 border  border-gray-100">
    //           <span>Mar 26</span>
    //         </div>
    //       </div>
    //       <EventsBlock events={events} />
    //     </section>
    //     <section id="event-details" className="w-full md:w-1/3 hidden md:block">
    //       <EventDetails />
    //     </section>
    //   </section>
    // </div>
  );
};

export default Index;
