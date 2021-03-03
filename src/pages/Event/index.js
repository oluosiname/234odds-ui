import React from "react";
import { useParams } from "react-router-dom";

import EventDetails from "../../components/EventDetails";
import HeaderLinks from "../Home/HeaderLinks";

import nairabet from "../../assets/images/nairabet.png";

const Index = () => {
  let eventId = useParams();

  return (
    <>
      <HeaderLinks />
      <EventDetails />
    </>
  );
};

export default Index;
