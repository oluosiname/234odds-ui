import React from "react";
import "./style.css";

import { useSelector } from "react-redux";

const Index = () => {
  const { isFetching } = useSelector(({ eventsReducer }) => eventsReducer);
  console.log("isFetching", isFetching);
  if (!isFetching) {
    return <div></div>;
  }

  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Index;
