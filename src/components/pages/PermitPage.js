import React from "react";
//import useDataFetch from "../../hooks/useDataFetch";
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

export default function PermitPage() {
  let tgtUri = useParams();
  const target = {
    type: "getPermitDataSingle",
    payload: {
      uri: tgtUri.uri,
    },
  };
  let data = useDataFetch(target);
  if (data && data.uri) {
    let thumbSrc = `${imgAddr}/thumbs/${data.uri}.jpg`;
    return (
      <div id="pageWrap" className="aliContH">
        <CSSInjector />
        <Card id="sideWrap" className="aliContV">
          <CardActionArea href={`${siteAddr}/artwork/${tgtUri.uri}`}>
            <CardMedia component="img" height="250" src={thumbSrc} />
          </CardActionArea>
          <DivideLine text="作者" />
          <AuthorInfoCard {...ais} {...data.author} />
        </Card>
        <Paper className="aliContV" id="permitWrap">
          <div id="permDesp">{data.desp}</div>
          <DivideLine text="详细信息" />
          <div>
            {data.prof.map((path, index) => (
              <img
                className="permImg"
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

const CSSInjector = () => (
  <style>
    {`
      #pageWrap{
          width:85%;
      }
      #waDivider{
          margin:0.5rem 0px 0.5rem 0px;
      }
      #waDivider span{
        font-size:1.5rem;
      }
      #sideWrap{
        width:20%;
        min-width:250px;
        margin-right:1rem;
      }
      #permitWrap{
          width:inherit;
      }
      #permDesp{
        margin:1.5rem 1.5rem 0.5rem 1.5rem;
      }
      .permImg{
        max-width:100%
      }
      `}
  </style>
);

const ais = {
  wrapperSty:{
    width:"100%",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
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
