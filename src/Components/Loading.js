import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading">
      <p>Loading...</p>
      <div class="container">
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="ring"></div>
      </div>
    </div>
  );
}
export default Loading;
