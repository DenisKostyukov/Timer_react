import React from "react";

function Controls(props) {
  const { children } = props;
  return <div className="controlsContainer">{children}</div>;
}

export default Controls;
