import React from "react";
import LinkedThumbCard from "./LinkedThumbCard";

export default function ImageCard(props) {
  return (
    <div style={cws}>
      <div>
        <LinkedThumbCard
          src={props.imageInfo.source}
          to={`http://localhost:3000/artwork/${props.uri}`}
          styling={imds.viewport}
        ></LinkedThumbCard>
        <p style={imds.title}>{props.imageInfo.title}</p>
      </div>
      <div style={ads.div}>
        <a href={`http://localhost:3000/artwork/${props.uri}`} style={ads.a}>
          <img
            src={props.author.image}
            alt={props.author.name}
            style={ads.image}
          ></img>
        </a>
        <p style={ads.text}>{props.author.name}</p>
      </div>
    </div>
  );
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
    fontSize:"1.2em",
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
