import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";

// function AnimationComp() {
//   const raindrops = [];

//   for (let i = 0; i < 5; i++) {
//     raindrops.push(<div key={i} className="raindrop"></div>);
//   }

//   return (
//     <div>
//     <div className="rain">{raindrops}</div>
//     <div className="rain">{raindrops}</div>
//     </div>
//   );
// }
function AnimationComp() {
  return RainBackground();
}
const RainBackground = () => {
  return (
    <div className="rain-container">
      <div className="rain">
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
      </div>
    </div>
  );
};

export default AnimationComp;
