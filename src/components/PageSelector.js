import React from "react";
import arrow from "../assets/icons/chevron-left.svg";
import "../assets/css/pageSelector.css";

export default function PageSelector() {
  return (
    <div>
      <CSSInjector />
      <button className="button">
        <img
          src={arrow}
          style={arrowStyle.left}
          alt="Previous page button"
        ></img>
      </button>
      <button className="button">
        <img src={arrow} style={arrowStyle.right} alt="Next page button"></img>
      </button>
    </div>
  );
}
const arrowStyle = {
  left: {
    width: "2em",
  },
  right: {
    width: "2em",
    transform: "rotate(180deg)",
  },
};
function CSSInjector() {
  return (
    <style>
      {`.button{
    border: none;
    cursor: pointer;
}

.button:hover {
    background-color: rgb(230,230,230);
}
.button:active{
    background-color: rgb(200,200,200);
}`}
    </style>
  );
}
