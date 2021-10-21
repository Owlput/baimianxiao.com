import React from "react";
import { imgAddr, siteAddr } from "../../assets/config";
import { Card,CardActionArea, CardMedia } from "@material-ui/core";

export default function ImageCard(props) {
  if (props.uri) {
    const thumbSrc = `${imgAddr}/thumbs/${props.uri}.jpg`;
    const authorImgSrc = `${imgAddr}/authorProfile/${props.author.image}`;
    return (
      <div style={cws}>
        <Card>
          <CardActionArea href={`${siteAddr}/artwork/${props.uri}`}>
            <CardMedia component="img" height="200" image={thumbSrc} alt="thumbnail"/>
            </CardActionArea>
          <p style={imds.title}>{props.title}</p>
          <div style={ads.div}>
            <a href={`${siteAddr}/artwork/${props.uri}`} style={ads.a}>
              <img
                src={authorImgSrc}
                alt={props.author.name}
                style={ads.image}
              ></img>
            </a>
            <p style={ads.text}>{props.author.name}</p>
          </div>
        </Card>
      </div>
    );
  } else {
    return <></>;
  }
}

/*
 cws=componentWrapperStyle
 imds=imageDivStyle
 ads=authorDivStyle
 ahs=anchorStyle
*/
const cws = {
  backgroundColor: "rgb(240,240,240)",
  borderRadius: "5%",
  margin: "5px",
};

const imds = {
  viewport: {
    width: "200px",
    height: "200px",
    overflow: "hidden",
    margin: "0.5em",
    borderRadius: "5%",
  },
  title: {
    margin: "5px",
    fontSize: "1.2em",
    textAlign: "center",
  },
};
const ads = {
  image: {
    width: "50px",
    borderRadius: "50%",
  },
  text: {
    margin: "0px 0px 0px 0.5em",
    fontSize: "1.1em",
  },
  div: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  a: {
    textDecoration: "none",
    color: "rgb(0,0,0)",
    marginRight: "0.5em",
  },
};
