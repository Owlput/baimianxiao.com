import React from "react";
import ArtworkInfo from "../ArtworkInfo";
import AuthorSidebar from "../AuthorSidebar";
import { useArtworkDataFetch } from "../../hooks/useArtworkDataFetch";
import { useParams } from "react-router";

export default function ArtworkInfoPage() {
  const artwork = useParams();

  const artworkDataTarget = {
    type: "getArtworkData",
    payload: {
      pri: artwork.pri,
    },
  };

  const { authorData, artworkData } = useArtworkDataFetch(artworkDataTarget);

  return (
    <div style={pageWarpperStyle}>
      <ArtworkInfo
        artwork={artworkData ? artworkData.imageInfo : undefined}
      ></ArtworkInfo>
      <AuthorSidebar
        author={authorData ? authorData : undefined}
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
