import React from "react";
import { Tooltip } from "@material-ui/core";

export default function DivideLine(props) {
  if (props.tip && props.text)
    return (
      <div className="aliContH" style={sty.wrap}>
        <hr style={sty.hr}></hr>
        <Tooltip arrow title={props.tip}>
          <p style={sty.p}>{props.text}</p>
        </Tooltip>
        <hr style={sty.hr}></hr>
      </div>
    );
  else if (props.text)
    return (
      <div className="aliContH" style={sty.wrap}>
        <hr style={sty.hr}></hr>
        <p style={sty.p}>{props.text}</p>
        <hr style={sty.hr}></hr>
      </div>
    );
  else
    return (
      <div className="aliContH" style={invisSty}>
        <hr style={sty.hr}></hr>
        <p style={sty.p}></p>
        <hr style={sty.hr}></hr>
      </div>
    );
}
const invisSty = {
  visibility: "hidden",
};
const sty = {
  wrap: {
    width: "100%",
  },
  hr: {
    borderTop: "0.1em solid rgb(140,140,140)",
    margin: "0px 0.5em 0px 0.8em",
    width: "inherit",
    borderRadius: "0.4em",
  },
  p: {
    width: "25%",
    minWidth: "2em",
    textAlign: "center",
  },
};
