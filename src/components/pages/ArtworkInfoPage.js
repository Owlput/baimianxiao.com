/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { useParams } from "react-router";
import useDataFetch from "../../hooks/useDataFetch";
import { imgAddr, siteAddr } from "../../assets/config";
import TagCollection from "../TagCollection";
import "../../assets/css/genericStyle.css";
import LinkedIcon from "../LinkedIcon";
import { useState } from "react";
import AuthorInfoCard from "../cards/AuthorInfoCard";
import {
  CardActionArea,
  Paper,
  Card,
  CardMedia,
  CircularProgress,
} from "@mui/material";
let artworkDataTarget = {
  type: "getArtworkData",
  payload: {},
};

export default function ArtworkInfoPage() {
  const auri = useParams();
  artworkDataTarget.payload.uri = auri.uri;
  const data = useDataFetch(artworkDataTarget);

  if (data) {
    return (
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 85%;
          justify-content: space-around;
        `}
      >
        <ArtworkInfo {...data[0]}></ArtworkInfo>
      </div>
    );
  } else {
    return <CircularProgress />;
  }
}

function ArtworkInfo(props) {
  if (props.uri) {
    let data = props;
    console.log(data);
    return (
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            align-items: center;
          `}
        >
          <ArtworkDisplay {...data} />

          <AuthorSidebar {...data.authorInfo}></AuthorSidebar>
        </div>
        <ArtworkInfoDiv {...data}></ArtworkInfoDiv>
      </div>
    );
  } else return <CircularProgress />;
}

function ArtworkInfoDiv(props) {
  const tagStyle = {
    wrapper: {
      display: "flex",
      alignItems: "center",
      margin: "0.1em 1em",
    },
    text: {
      margin: "0.1em",
      color: "rgb(100,100,100)",
    },
  };
  return (
    <Paper
      css={css`
        margin-top: 1rem;
        border-radius: 0.5rem;
        width: 100%;
        height: 15rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      `}
    >
      <p
        css={css`
          font-size: 1.5rem;
          margin: 0.5rem 1rem;
        `}
      >
        {props.title}
      </p>
      <TagCollection styling={tagStyle} tags={props.tags}></TagCollection>
      <div
        css={css`
          margin: 1rem;
          display: grid;
          grid-template-columns: minmax(7rem, 8rem) 4px auto 4px 20%;
          hr {
            border: 1px solid rgb(215, 215, 215);
            border-radius: 30%;
            height: 80%;
          }
        `}
      >
        <div
          css={css`
            align-self: center;
            max-width: 8rem;
            min-width: 7rem;
            height: 100%;
            img {
              width: 80px;
              border-radius: 50%;
            }
            p {
              font-size: 1.2rem;
              color: rgb(100, 100, 100);
              margin: 0.5em;
            }
          `}
          className="aliContV"
        >
          <img
            src={`${imgAddr}/authorProfile/${props.authorInfo.image}`}
            alt="Artwork Author"
          ></img>
          <p>{props.author[0]}</p>
        </div>
        <hr />
        <div
          css={css`
            min-width: 40%;
            p {
              margin: 0.5rem;
              color: rgb(100, 100, 100);
              min-width: 5rem;
              text-align: center;
            }
          `}
          className="aliContV"
        >
          <p>其他平台</p>
          <div
            className="aliContH"
            css={css`
              width: 90%;
              justify-content: space-around;
            `}
          >
            {props.source.other.map((source, index) => (
              <LinkedIcon type={source[0]} to={source[1]} key={index} />
            ))}
          </div>
        </div>
        <hr />
        <div
          css={css`
            a {
              color: black;
              margin: 0.5rem;
            }
            p {
              text-decoration: none;
              color: rgb(100, 100, 100);
              margin: 0.5rem;
            }
          `}
          className="aliContV"
        >
          <a href={`${siteAddr}/permit/${props.uri}`}>详细信息</a>
          <a href={props.source.from}>原图地址</a>
        </div>
      </div>
    </Paper>
  );
}
function AuthorSidebar(props) {
  const ais = {
    wrapperSty: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "90%",
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
      textAlign: "center",
    },
    nameSty: {
      textAlign: "center",
      fontSize: "1.5em",
      margin: "3% 4% 5% 4%",
    },
    contactSty: {
      div: {
        width: "100px",
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
  return (
    <div
      css={css`
        margin-left: 1rem;
        max-width: 14rem;
        min-width: 12rem;
        border-radius: 1rem;
        @media screen and (max-width: 800px) {
          height: 0px;
          min-width:0px;
          width: 0px;
          margin:0px;
          visibility: hidden;
        }
      `}
    >
      <Paper className="aliContV fillAvailH">
        <AuthorInfoCard {...props} {...ais}></AuthorInfoCard>
        <div style={{ width: "100%" }}>
          <p
            css={css`
              text-align: center;
              font-size: 1.2rem;
            `}
          >
            最近作品
          </p>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              width: 100%;
              justify-content: space-around;
            `}
          >
            {props.recentWorks.map((thumb, index) => (
              <Card key={`c${index}`}>
                <CardActionArea href={`/artwork/${thumb}`} key={`b${index}`}>
                  <CardMedia
                    component="img"
                    height="90"
                    image={`${imgAddr}/thumbs/${thumb}.jpg`}
                    key={index}
                  />
                </CardActionArea>
              </Card>
            ))}
          </div>
        </div>
      </Paper>
    </div>
  );
}
function ArtworkDisplay(props) {
  let imageDisplayed = props.source?.this ?? [];
  const [expand, setExpand] = useState(false);
  if (expand) {
    return (
      <Paper
        css={css`
          width: 100%;
          border-radius: 0.5rem;
          button {
            border: none;
            padding: 0px;
            width: 100%;
            height: 2rem;
          }
          img {
            width: 100%;
          }
        `}
      >
        {imageDisplayed.map((source, index) => (
          <img
            src={`${imgAddr}/artwork/${source}`}
            alt="artwork"
            key={index}
          ></img>
        ))}
        <button onClick={() => setExpand(false)}>收起</button>
      </Paper>
    );
  } else {
    return (
      <Paper
        css={css`
          width: 100%;
          max-height: 38rem;
          border-radius: 0.5rem;
          button {
            width: 100%;
            border: none;
            position: relative;
            padding: 0px;
            height: 3.5rem;
            bottom: 3.5rem;
            cursor: pointer;
            background: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.2),
              rgba(255, 255, 255, 0.8)
            );
          }
          p {
            margin: 0px;
            font-size: 2rem;
          }
        `}
      >
        <div
          css={css`
            width: 100%;
            max-height: 38rem;
            overflow: hidden;
            img {
              width: 100%;
            }
          `}
        >
          <img
            src={`${imgAddr}/artwork/${imageDisplayed[0]}`}
            alt="artwork"
          ></img>
        </div>
        <button onClick={() => setExpand(true)}>
          <p>展开</p>
        </button>
      </Paper>
    );
  }
}
