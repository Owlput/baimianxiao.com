import React from "react";
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
        <CSSInjector />
        <AuthorInfoCard {...props.author} {...ais}></AuthorInfoCard>
        <div className="aliContV" id="workDisp">
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
        <a href={`${siteAddr}/artwork/${source}`} key={`a${index}`} style={wws.a}>
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

/* DO NOT COMBINE: These control the visibility of the element related */
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
  width: "inherit",
};
let ows = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "inherit",
};
/* DO NOT COMBINE: These control the visibility of the element related */

const wws = {
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  image: {
    width: "100px",
    borderRadius:"1em",
    margin:"0.5em",
  },
  a:{
    backgroundColor:"rgb(220,220,220)",
    borderRadius:"1em"
  },
};

const ais = {
  wrapperSty: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgb(230,230,230)",
    width: "13%",
    minWidth: "90px",
    borderRadius: "1em",
    margin: "1%",
  },
  imageSty: {
    width: "80px",
    borderRadius: "50%",
  },
  nameSty: {
    textAlign: "center",
    fontSize: "1.2em",
    margin: "3% 4% 5% 4%",
    width: "100%",
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

function CSSInjector() {
  return (
    <style>
      {`
  #cWrap {
  background-color: rgb(240, 240, 240);
  border-radius: 1em;
  width: 85%;
  justify-content: space-between;
  margin: 1em 0px;
}
.divide {
  width: 100%;
}
.divide hr{
  border-top: 0.1em solid rgb(140,140,140);
  margin: 0px 0.5em 0px 0.8em;
  width: inherit;
  border-radius: 0.4em;
}
.divide p {
  min-width:6em
}
.workType {
  width: 12%;
  text-align: center;
}
#artworkWrap {
  width: 80%;
  background-color: rgb(230,230,230);
  margin: 0.1em;
  border-radius: 1em;
}
#workDisp{
  width:83%;
  background-color:rgb(230,230,230);
  border-radius:1em;
  margin:0.5em;
}
`}
    </style>
  );
}
