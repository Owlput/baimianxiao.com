import React from "react";
import ArtworkInfo from "../ArtworkInfo";
import AuthorSidebar from "../AuthorSidebar";
import { useArtworkDataFetch } from "../../hooks/useArtworkDataFetch";
import { useParams } from "react-router";

export default function ArtworkInfoPage() {
  const auri = useParams();

  const artworkDataTarget = {
    type: "getArtworkData",
    payload: {
      uri: auri.uri,
    },
  };

  const { authorData, artworkData } = useArtworkDataFetch(artworkDataTarget);

  console.log(artworkData)
  return (
    <div style={pageWarpperStyle}>
      <ArtworkInfo
        {...artworkData}
      ></ArtworkInfo>
      <AuthorSidebar
        {...authorData}
      ></AuthorSidebar>
    </div>
  );
}
const pageWarpperStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "85%",
  justifyContent: "space-around",
};
