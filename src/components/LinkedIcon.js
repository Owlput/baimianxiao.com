import React from "react";
import pixivIcon from "../assets/icons/pixiv.ico"
import twitterIcon from "../assets/icons/twitter.svg"

export default function LinkedIcon(props) {
  switch (props.type) {
    case "Pixiv": {
      return (
        <a href={props.to} style={aStyle}>
          <img src={pixivIcon}
                alt={"Pixiv link"}
                style={imageStyle}
          ></img>
        </a>
      );
    }
    case "Twitter": {
      return (
        <a href={props.to} style={aStyle}>
          <img src={twitterIcon}
              alt={"Twitter Link"}
              style={imageStyle}
          ></img>
        </a>
      );

    } 
    default :{
          return(<></>)
      }
  }
}
const aStyle = {
  display:"inline-block",
  height:"2.5em",
  width:"2.5em",
}
const imageStyle = {
  height:"2.5em",
  width:"2.5em",
}