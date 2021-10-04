import React from "react";
import TagCollection from "./tag/TagCollection";
export default function ArtworkInfo(props) {

  if(props.source){
  return (
    <div style={componentWarpperStyle}>
      <img
        src={props.source}
        alt={props.title}
        style={imageStyle}
      ></img>
      <div>
        <p>{props.title}</p>
        <TagCollection></TagCollection>
      </div>
    </div>
  );
  } else {
    return <></>
  }
}
const componentWarpperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const imageStyle = {
  height: "60em",
};
