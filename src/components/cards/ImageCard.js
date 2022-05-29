/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { imgAddr, siteAddr } from "../../assets/config";
import {
  Card,
  CardActionArea,
  CardMedia,
  CircularProgress,
} from "@mui/material";

export default function ImageCard(props) {
  if (props.uri) {
    const thumbSrc = `${imgAddr}/thumbs/${props.uri}.jpg`;
    const authorImgSrc = `${imgAddr}/authorProfile/${props.author.image}`;
    return (
      <div
        css={css`
          border-radius: 5%;
          margin: 5px;
          height: 18rem;
          @media screen and (max-width: 800px) {
            height: 200px;
          }
        `}
      >
        <Card
          css={css`
            @media screen and (max-width: 800px) {
              height: 200px;
            }
          `}
        >
          <CardActionArea href={`${siteAddr}/artwork/${props.uri}`}>
            <CardMedia
              component="img"
              height="200"
              image={thumbSrc}
              alt="thumbnail"
            />
          </CardActionArea>
          <div
            css={css`
              @media screen and (max-width: 800px) {
                height: 0px;
                margin: 0px;
                visibility: hidden;
              }
            `}
          >
            <p
              css={css`
                margin: 2px;
                height: 30px;
                font-size: 1.2rem;
                text-align: center;
              `}
            >
              {props.title}
            </p>
            <div
              css={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                a {
                  text-decoration: none;
                  color: rgb(0, 0, 0);
                  margin-right: 0.5em;
                }
                p {
                  margin: 0px 0px 0px 0.5em;
                  font-size: 1.1em;
                }
                img {
                  width: 50px;
                  border-radius: 50%;
                }
              `}
            >
              <a href={`${siteAddr}/artwork/${props.uri}`}>
                <img src={authorImgSrc} alt={props.author.name}></img>
              </a>
              <p id="icAuthorName">{props.author.name}</p>
            </div>
          </div>
        </Card>
      </div>
    );
  } else {
    return <CircularProgress />;
  }
}
