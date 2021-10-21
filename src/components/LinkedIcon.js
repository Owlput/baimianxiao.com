import React from "react";
import pxIco from "../assets/icons/pixiv.ico";
import ttIco from "../assets/icons/twitter.svg";
import wbIco from "../assets/icons/weibo.svg";
import biIco from "../assets/icons/bilibili.svg";
import { Card, CardActionArea, CardMedia } from "@material-ui/core";

export default function LinkedIcon(props) {
  switch (props.type) {
    case "pixiv": {
      return (
        <div>
          <CardActionArea href={props.to}>
            <CardMedia
              component="img"
              height="45"
              image={pxIco}
              alt={"Pixiv link"}
              className="LinkedIco"
            />
          </CardActionArea>
        </div>
      );
    }
    case "twitter": {
      return (
        <div>
          <CardActionArea href={props.to}>
            <CardMedia
              component="img"
              height="45"
              image={ttIco}
              alt={"Twitter link"}
              className="LinkedIco"
            />
          </CardActionArea>
        </div>
      );
    }
    case "weibo": {
      return (
        <div>
          <CardActionArea href={props.to}>
            <CardMedia
              component="img"
              height="45"
              image={wbIco}
              alt={"Weibo link"}
              className="LinkedIco"
            />
          </CardActionArea>
        </div>
      );
    }
    case "bilibili": {
      return (
        <div>
          <CardActionArea href={props.to}>
            <CardMedia
              component="img"
              height="45"
              image={biIco}
              alt={"BiliBili link"}
              className="LinkedIco"
            />
          </CardActionArea>
        </div>
      );
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
  borderRadius: "20%",
};
