import React from "react";
import useDataFetch from "../../hooks/useDataFetch";
import { CircularProgress } from "@material-ui/core";
import AuthorInfoCard from "../cards/AuthorInfoCard";
import { imgAddr, siteAddr } from "../../assets/config";
import {
  Tooltip,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import "../../assets/css/genericStyle.css";

export default function AuthorPage() {
  const target = {
    type: "getAllPermitData",
    payload: {},
  };

  const permData = useDataFetch(target);
  if (permData) {
    return (
      <div id="pageWrap">
        <CSSInjector />
        {permData.map((permit, index) => (
          <PermitCard {...permit} key={index}></PermitCard>
        ))}
      </div>
    );
  } else {
    return <CircularProgress />;
  }
}

function PermitCard(props) {
  
  if (props.author) {
    return (
      <Paper className="aliContH" id="cWrap">
        <AuthorInfoCard {...props.author} {...ais}></AuthorInfoCard>
        <div className="aliContV" id="worksDisp">
          <Permitted permitted={props.permitted} />
          <Useable useable={props.useable} />
          <Other other={props.other} />
          <DivideLine styling={placeholderDivide}></DivideLine>
        </div>
      </Paper>
    );
  } else return <></>;
}

function Permitted(props) {
  if (props.permitted[0]) {
    return (
      <div className="workDisp">
        <DivideLine text="已授权作品" tip="已经正式获得授权的作品"></DivideLine>
        <WorkDisplay works={props.permitted}></WorkDisplay>
      </div>
    );
  } else return <></>;
}
function Useable(props) {
  if (props.useable[0]) {
    return (
      <div className="workDisp">
        <DivideLine
          text="可使用作品"
          tip="以非正式方式声明可以使用的作品"
        ></DivideLine>
        <WorkDisplay works={props.useable}></WorkDisplay>
      </div>
    );
  } else return <></>;
}
function Other(props) {
  if (props.other[0]) {
    return (
      <div className="workDisp">
        <DivideLine
          text="其他作品"
          tip='认为属于"合理使用"范围的作品'
        ></DivideLine>
        <WorkDisplay works={props.other}></WorkDisplay>
      </div>
    );
  } else return <></>;
}
function WorkDisplay(props) {
  return (
    <div id="workDispWrap">
      {props.works.map((source, index) => (
        <Card key={`c${index}`}>
          <CardActionArea
            href={`${siteAddr}/artwork/${source}`}
            key={`a${index}`}
          >
            <CardMedia
              component="img"
              height="100"
              image={`${imgAddr}/thumbs/${source}.jpg`}
              key={`img${index}`}
              alt="artwork"
            />
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
function DivideLine(props) {
  let tip = props.tip ? props.tip : "";
  return (
    <div className="aliContH divide" style={props.styling}>
      <hr></hr>
      <Tooltip arrow title={tip}>
        <p className="workType">{props.text}</p>
      </Tooltip>
      <hr></hr>
    </div>
  );
}

const ais = {
  wrapperSty: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "13%",
    minWidth: "90px",
    borderRadius: "0.5rem",
    margin: "0.5rem",
  },
  imageSty: {
    width: "80px",
    borderRadius: "50%",
    margin: "0.5rem",
  },
  nameSty: {
    textAlign: "center",
    fontSize: "1.2em",
    margin: "0.5rem",
    width: "100%",
  },
  contactSty: {
    div: {
      minWidth: "95%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      flexWrap: "wrap",
      margin: "0.5rem",
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
          #pageWrap{
            background-color: rgb(250,250,250);
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height:1200px;
          }
  #cWrap {
  border-radius: 0.5rem;
  width: 85%;
  justify-content: space-between;
  margin: 1em 0px;
}
#workDispWrap{
  width: 100%;
  display: flex;
  justify-content: space-around;
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
