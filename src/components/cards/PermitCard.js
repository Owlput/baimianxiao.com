import React from "react";
import "../../assets/css/genericStyle.css";
import AuthorInfoCard from "./AuthorInfoCard";
import { imgAddr, siteAddr } from "../../assets/config";

export function PermitCard(props) {
  console.log(props);
  if (props.author) {
    return (
      <div className="aliContH" id="cWrap">
        <CSSInjector />
        <AuthorInfoCard {...props.author} {...ais}></AuthorInfoCard>
        <div className="aliContV" id="worksDisp">
          <Permitted permitted={props.permitted} />
          <Useable useable={props.useable} />
          <Other other={props.other} />
          <DivideLine styling={placeholderDivide}></DivideLine>
        </div>
      </div>
    );
  } else return <></>;
}

function Permitted(props) {
  if (props.permitted[0]) {
    return (
      <div className="workDisp">
        <DivideLine text="已授权作品"></DivideLine>
        <WorkDisplay works={props.permitted}></WorkDisplay>
      </div>
    );
  } else return <></>;
}
function Useable(props) {
  if (props.useable[0]) {
    return (
      <div className="workDisp">
        <DivideLine text="可使用作品"></DivideLine>
        <WorkDisplay works={props.useable}></WorkDisplay>
      </div>
    );
  } else return <></>;
}
function Other(props) {
  if (props.other[0]) {
    return (
      <div className="workDisp">
        <DivideLine text="其他作品"></DivideLine>
        <WorkDisplay works={props.other}></WorkDisplay>
      </div>
    );
  } else return <></>;
}
function WorkDisplay(props) {
  return (
    <div style={wws.wrapper}>
      {props.works.map((source, index) => (
        <a
          href={`${siteAddr}/artwork/${source}`}
          key={`a${index}`}
          style={wws.a}
        >
          <img
            src={`${imgAddr}/thumbs/${source}.jpg`}
            key={`img${index}`}
            style={wws.image}
            alt="artwork"
          ></img>
        </a>
      ))}
    </div>
  );
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

const wws = {
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  image: {
    width: "100px",
    borderRadius: "1em",
    margin: "0.5em",
  },
  a: {
    backgroundColor: "rgb(220,220,220)",
    borderRadius: "1em",
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
      minWidth: "95%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      flexWrap: "wrap",
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
#worksDisp{
  width:83%;
  background-color:rgb(230,230,230);
  border-radius:1em;
  margin:0.5em;
}
.workDisp{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
}
`}
    </style>
  );
}
