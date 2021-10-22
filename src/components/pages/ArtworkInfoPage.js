import React from "react";
import ArtworkInfo from "../ArtworkInfo";
import { useParams } from "react-router";
import useDataFetch from "../../hooks/useDataFetch";
import { CircularProgress } from "@material-ui/core";

export default function ArtworkInfoPage() {
  const auri = useParams();
  const artworkDataTarget = {
    type: "getArtworkData",
    payload: {
      uri: auri.uri,
    },
  };

  const data = useDataFetch(artworkDataTarget);

  if (data) {
    return (
      <div id="pageWrap">
        <CSSInjector />
        <ArtworkInfo {...data[0]}></ArtworkInfo>
      </div>
    );
  } else {
    return <CircularProgress />;
  }
}
function CSSInjector(){
  return <style>
    {`
    #pageWrap{
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 85%;
      justify-content: space-around;
    }
    `}
  </style>
}

