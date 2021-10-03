import React from "react";
export default function ArtworkInfo(props) {
  return (
    <div style={componentWarpperStyle}>
      <img
        src={props.artwork ? props.artwork.source : ""}
        alt={props.artwork ? props.artwork.title : ""}
        style={imageStyle}
      ></img>
      <div>
        <p>{props.artwork ? props.artwork.title : ""}</p>
      </div>
    </div>
  );
}
const componentWarpperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const imageStyle = {
  height: "60em",
};
