import React from "react";
import { imgAddr, siteAddr } from "../../assets/config";
import { Card,CardActionArea, CardMedia, CircularProgress } from "@material-ui/core";

export default function ImageCard(props) {
  if (props.uri) {
    const thumbSrc = `${imgAddr}/thumbs/${props.uri}.jpg`;
    const authorImgSrc = `${imgAddr}/authorProfile/${props.author.image}`;
    return (
      <div id="icWrap">
        <CSSInjector />
        <Card>
          <CardActionArea href={`${siteAddr}/artwork/${props.uri}`}>
            <CardMedia component="img" height="200" image={thumbSrc} alt="thumbnail"/>
            </CardActionArea>
          <p id="icTitle">{props.title}</p>
          <div id="icAuthorWrap">
            <a href={`${siteAddr}/artwork/${props.uri}`}>
              <img
                src={authorImgSrc}
                alt={props.author.name}
              ></img>
            </a>
            <p id="icAuthorName">{props.author.name}</p>
          </div>
        </Card>
      </div>
    );
  } else {
    return <CircularProgress />;
  }
}

const CSSInjector = () =><style>
  {
    `
    #icWrap{
      border-radius: 5%;
      margin: 5px;
    }
    #icTitle{
      margin: 5px;
      font-size: 1.2em;
      text-align: center;
    }
    #icAuthorWrap{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    #icAuthorWrap a{
      text-decoration: none;
      color: rgb(0,0,0);
      margin-right: 0.5em;
    }
    #icAuthorWrap p{
      margin: 0px 0px 0px 0.5em;
      font-size: 1.1em;
    }
    #icAuthorWrap img{
      width: 50px;
      border-radius: 50%;
    }
    `
  }
</style>