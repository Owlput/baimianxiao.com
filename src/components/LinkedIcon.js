import React from "react";
import pxIco from "../assets/icons/pixiv.ico";
import ttIco from "../assets/icons/twitter.svg";
import wbIco from '../assets/icons/weibo.svg';
import biIco from '../assets/icons/bilibili.svg';

export default function LinkedIcon(props) {
  switch (props.type) {
    case "pixiv": {
      return (
        <a href={props.to} style={aStyle}>
          <img src={pxIco} alt={"Pixiv link"} style={imageStyle}></img>
        </a>
      );
    }
    case "twitter": {
      return (
        <a href={props.to} style={aStyle}>
          <img src={ttIco} alt={"Twitter Link"} style={imageStyle}></img>
        </a>
      );
    }
    case "weibo": {
      return (
        <a href={props.to} style={aStyle}>
          <img src={wbIco} alt={"Weibo Link"} style={imageStyle}></img>
        </a>
      );
    }
    case "bilibili":{
      return (
        <a href={props.to}>
          <img src={biIco} alt={"Bilibili Link"} style={imageStyle}></img>
        </a>
      )
    }
    default: {
      return <></>;
    }
  }
}
const aStyle = {
  display: "inline-block",
  height: "2.5em",
  width: "2.5em",
};
const imageStyle = {
  height: "2.5em",
  width: "2.5em",
};
