import React from "react";
import { Tooltip } from "@material-ui/core";

//Don't know where to use but keep this anyway
export default function DivideLines(props) {
    return (
      <div className="aliContH" style={props.invisible?{visibility:"hidden"}:sty.wrap}>
        <hr style={sty.hr}></hr>
        {props.tip && props.text ? (
          <Tooltip arrow title={props.tip}>
            <p style={sty.p}>{props.text}</p>
          </Tooltip>
        ) : (
          <></>
        )}
        {!props.tip && props.text ? <p style={sty.p}>{props.text}</p> : <></>}
        <hr style={sty.hr}></hr>
      </div>
    );
}
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
