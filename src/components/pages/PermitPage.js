/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import {
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CircularProgress,
} from "@material-ui/core";
import AuthorInfoCard from "../cards/AuthorInfoCard";
import { imgAddr, siteAddr } from "../../assets/config";
import "../../assets/css/genericStyle.css";
import DivideLine from "../DivideLine";
import { useParams } from "react-router";
import useDataFetch from "../../hooks/useDataFetch";

  const target = {
    type: "getPermitDataSingle",
    payload: {
    },
  };
export default function PermitPage() {
  let tgtUri = useParams();
  target.payload.uri = tgtUri.uri;
  let data = useDataFetch(target);
  console.log(data);
  if (data?.uri) {
    let thumbSrc = `${imgAddr}/thumbs/${data.uri}.jpg`;
    return (
      <div
        css={css`
          width: 85%;
        `}
        className="aliContH"
      >
        <Card
          css={css`
            width: 20%;
            min-width: 250px;
            margin-right: 1rem;
          `}
          className="aliContV"
        >
          <CardActionArea href={`${siteAddr}/artwork/${tgtUri.uri}`}>
            <CardMedia component="img" height="250" src={thumbSrc} />
          </CardActionArea>
          <DivideLine text="作者" />
          <AuthorInfoCard {...ais} {...data.author} />
        </Card>
        <Paper
          className="aliContV"
          css={css`
            width: inherit;
          `}
        >
          <div
            css={css`
              margin: 1.5rem 1.5rem 0.5rem 1.5rem;
            `}
          >
            {data.desp}
          </div>
          <DivideLine text="详细信息" />
          <div>
            {data.prof.map((path, index) => (
              <img
                css={css`
                  max-width: 100%;
                `}
                key={index}
                src={`${imgAddr}/permit/perm_${path}`}
                alt="permit info"
              ></img>
            ))}
          </div>
        </Paper>
      </div>
    );
  } else if (!tgtUri.uri) return <h1>Wrong Params</h1>;
  else return <CircularProgress />;
}
const ais = {
  wrapperSty: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
