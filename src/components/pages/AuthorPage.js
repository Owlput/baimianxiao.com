/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import useDataFetch from "../../hooks/useDataFetch";
import AuthorInfoCard from "../cards/AuthorInfoCard";
import { imgAddr, siteAddr } from "../../assets/config";
import {
  Tooltip,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import "../../assets/css/genericStyle.css";

const target = {
  type: "getAllPermitData",
  payload: {},
};

export default function AuthorPage() {
  const permData = useDataFetch(target);
  if (permData) {
    return (
      <div
        css={css`
          background-color: rgb(250, 250, 250);
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 1200px;
        `}
      >
        {permData.map((permit, index) => (
          <PermitCard {...permit} key={index}></PermitCard>
        ))}
      </div>
    );
  } else {
    return <CircularProgress />;
  }
}

const PermitCard = (props) =>
  props.author ? (
    <Paper
      className="aliContH"
      css={css`
        border-radius: 0.5rem;
        width: 85%;
        justify-content: space-between;
        margin: 1em 0px;
        .workDisp {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 90%;
        }
      `}
    >
      <AuthorInfoCard {...props.author} {...ais}></AuthorInfoCard>
      <div
        className="aliContV"
        css={css`
          width: 83%;
          border-radius: 1em;
          margin: 0.5em;
        `}
      >
        <Permitted permitted={props.permitted} />
        <Useable useable={props.useable} />
        <Other other={props.other} />
        <DivideLine invisible></DivideLine>
      </div>
    </Paper>
  ) : (
    <></>
  );
function WorkDisplay(props) {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        justify-content: space-between;
      `}
    >
      {props.works.length <= 2 ? (
        <div
          style={{ height: "0px", width: "0px", visibility: "hidden" }}
        ></div>
      ) : (
        <></>
      )}
      {props.works.map((source, index) => (
        <Card
          key={`c${index}`}
          css={css`
            flex: 0 0 auto;
          `}
        >
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
      {props.works.length <= 2 ? (
        <div
          style={{ height: "0px", width: "0px", visibility: "hidden" }}
        ></div>
      ) : (
        <></>
      )}
    </div>
  );
}
function Permitted(props) {
  return props.permitted[0] ? (
    <div className="workDisp">
      <DivideLine text="已授权作品" tip="已经正式获得授权的作品"></DivideLine>
      <WorkDisplay works={props.permitted}></WorkDisplay>
    </div>
  ) : (
    <></>
  );
}
function Useable(props) {
  return props.useable[0] ? (
    <div className="workDisp">
      <DivideLine
        text="可使用作品"
        tip="以非正式方式声明可以使用的作品"
      ></DivideLine>
      <WorkDisplay works={props.useable}></WorkDisplay>
    </div>
  ) : (
    <></>
  );
}
function Other(props) {
  return props.other[0] ? (
    <div className="workDisp">
      <DivideLine
        text="其他作品"
        tip='认为属于"合理使用"范围的作品'
      ></DivideLine>
      <WorkDisplay works={props.other}></WorkDisplay>
    </div>
  ) : (
    <></>
  );
}
function DivideLine(props) {
  let tip = props.tip ?? "";
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        hr {
          border-top: 0.1em solid rgb(140, 140, 140);
          margin: 0px 0.5em 0px 0.8em;
          width: inherit;
          border-radius: 0.4em;
        }
        p {
          min-width: 6em;
        }
      `}
      style={props.invisible ? { visibility: "hidden" } : {}}
    >
      <hr></hr>
      <Tooltip arrow title={tip}>
        <p
          css={css`
            width: 12%;
            text-align: center;
          `}
        >
          {props.text}
        </p>
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
      width: "100%",
    },
    text: {
      fontSize: "5em",
    },
  },
  statusSty: {},
};
