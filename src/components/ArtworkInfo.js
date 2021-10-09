import React from "react";
import { imgAddr } from "../assets/config";
import TagCollection from "./tag/TagCollection";
export default function ArtworkInfo(props) {

  console.log(props)
  if(props.uri){
    const imgSrc =`${imgAddr}/artwork/${props.source.this}`
    
  return (
    <div style={componentWarpperStyle}>
      <img
        src={imgSrc}
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
