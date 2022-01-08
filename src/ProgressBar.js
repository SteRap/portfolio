import React from "react";
import "./ProgressBar.css";

const ProgressBar = (props) => {
  const { completed } = props;
  const width = { width: `${completed}%` };

  return (
    <div className="containerStyles">
      <div className="fillerStyles" style={width}>
        <span className="labelStyles">{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
