import React from "react";
import ArtworkInfo from "../ArtworkInfo";
import AuthorSidebar from "../AuthorSidebar";
import { useArtworkDataFetch } from "../../hooks/useArtworkDataFetch";
import { useParams } from "react-router";

export default function ArtworkInfoPage() {
  const artworkPRI = useParams();

  const artworkDataTarget = {
    type: "getArtworkData",
    payload: {
      pri: artworkPRI.pri,
    },
  };

  const { authorData, artworkData } = useArtworkDataFetch(artworkDataTarget);

  return (
    <div style={pageWarpperStyle}>
      <ArtworkInfo
        {...artworkData.imageInfo}
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
