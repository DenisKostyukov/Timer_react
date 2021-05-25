import React from "react";

function TimerDisplay(props) {
  const { currentTime } = props;
  return <p>{currentTime}</p>;
}

export default TimerDisplay;
