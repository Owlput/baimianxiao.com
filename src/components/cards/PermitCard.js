/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import "../../assets/css/genericStyle.css";
import AuthorInfoCard from "./AuthorInfoCard";
import { imgAddr, siteAddr } from "../../assets/config";
import { Paper, Card, CardActionArea, CardMedia } from "@mui/material";
import DivideLine from "../DivideLine";

export function PermitCard(props) {
  if (props.author) {
    return (
      <Paper
        className="aliContH"
        css={css`
          border-radius: 0.5rem;
          width: 85%;
          justify-content: space-between;
          margin: 1em 0px;
        `}
      >
        <AuthorInfoCard {...props.author} {...ais}></AuthorInfoCard>
        <div
          className="aliContV"
          css={css`
            width: 83%;
            border-radius: 1em;
            margin: 0.5em;
            .workDisp {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 90%;
            }
          `}
        >
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
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: space-around;
      `}
    >
      {props.works.map((source, index) => (
        <Card>
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

const ais = {
  wrapperSty: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "13%",
    minWidth: "90px",
    borderRadius: "0.5rem",
    margin: "1%",
  },
  imageSty: {
    width: "80px",
    borderRadius: "50%",
    margin: "0.5rem",
  },
  nameSty: {
    textAlign: "center",
    fontSize: "1.2em",
    margin: "3%",
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

