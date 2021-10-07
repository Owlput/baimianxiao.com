import React from "react";
import TagCollection from "./tag/TagCollection";
export default function ArtworkInfo(props) {

  console.log(props)
  if(props.uri){
  return (
    <div style={componentWarpperStyle}>
      <img
        src={props.source.this}
        alt={props.title}
        style={imageStyle}
      ></img>
      <div>
        <p>{props.title}</p>
        <TagCollection></TagCollection>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
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
  width: "80%",
};
