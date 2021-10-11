import React from "react";
import ArtworkInfo from "../ArtworkInfo";
import AuthorSidebar from "../AuthorSidebar";

import { useParams } from "react-router";
import useDataFetch from "../../hooks/useDataFetch";

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
      <div style={pageWarpperStyle}>
        <ArtworkInfo {...data[0]}></ArtworkInfo>
        <AuthorSidebar {...data[0].authorInfo}></AuthorSidebar>
      </div>
    );
  } else {
    return <></>;
  }
}
const pageWarpperStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "85%",
  justifyContent: "space-around",
};
