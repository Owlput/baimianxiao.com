import React from "react";
//import { useDataFetch } from "../../hooks/useDataFetch";
import "../../assets/css/permitCard.css";
import "../../assets/css/genuineStyle.css";
import AuthorInfoCard from "./AuthorInfoCard";
import { imgAddr, siteAddr } from "../../assets/config";

export function PermitCard(props) {
  console.log(props);
  if (props.author) {
    if (!props.permitted[0]) pws.display = "none";
    if (!props.useable[0]) uws.display = "none";
    if (!props.other[0]) ows.display = "none";
    return (
      <div className="aliContH" id="cWrap">
        <AuthorInfoCard {...props.author} {...ais}></AuthorInfoCard>
        <div className="aliContV" id="artworkWrap">
          <div style={pws}>
            <DivideLine text="已授权作品"></DivideLine>
            <WorkDisplay works={props.permitted}></WorkDisplay>
          </div>
          <div style={uws}>
            <DivideLine text="可使用作品"></DivideLine>
            <WorkDisplay works={props.useable}></WorkDisplay>
          </div>
          <div style={ows}>
            <DivideLine text="其他作品"></DivideLine>
            <WorkDisplay works={props.other}></WorkDisplay>
          </div>
          <DivideLine styling={placeholderDivide}></DivideLine>
        </div>
      </div>
    );
  }
}
function DivideLine(props) {
  return (
    <div className="aliContH divide" style={props.styling}>
      <hr></hr>
      <p className="workType">{props.text}</p>
      <hr></hr>
    </div>
  );
}
function WorkDisplay(props) {
  return (
    <div style={wws.wrapper}>
      {props.works.map((source, index) => (
        <a href={`${siteAddr}/artwork/${source}` }
        key={`a${index}`}
        >
          <img
            src={`${imgAddr}/thumbs/${source}.jpg`}
            key={`img${index}`}
            style={wws.image}
            alt="Permitted Work"
          ></img>
        </a>
      ))}
    </div>
  );
}
let pws = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
};
let uws = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "-moz-available",
};
let ows = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "-moz-available",
};
const wws = {
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  image: {
    width: "100px",
  },
};
const ais = {
  wrapperSty: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgb(230,230,230)",
    width: "10em",
    borderRadius: "1em",
  },
  textSty: {
    textAlign: "center",
    fontSize: "2em",
    margin: "0.5em 0px 0.5em 0px",
    color: "rgb(200,200,200)",
  },
  imageSty: {
    width: "70%",
    borderRadius: "50%",
  },
  nameSty: {
    textAlign: "center",
    fontSize: "1.5em",
    margin: "3% 4% 5% 4%",
  },
  contactSty: {
    div: {
      maxWidth: "90%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    text: {
      fontSize: "5em",
    },
  },
  statusSty: {},
};

const placeholderDivide = {
  visibility: "hidden",
};
