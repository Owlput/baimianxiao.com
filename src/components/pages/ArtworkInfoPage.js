import React, { useState, useEffect } from "react";
import ArtworkInfo from "../ArtworkInfo";
import AuthorSidebar from "../AuthorSidebar";
import APIGet from "../../PAI";
import { useParams } from "react-router";

export default function ArtworkInfoPage({match}) {
  const initialArtworkInfo = {
    pri: "",
    imageInfo: {
      title: "",
      source:
        "",
    },
    authorInfo: {
      name: "",
      image: "",
    },
  };

  const artwork = useParams()
  const [artworkInfo, setArtworkInfo] = useState(initialArtworkInfo);

  const initArtworkInfo = async (target = artwork.pri ? artwork.pri : 1) => {
    try {
      const result = await APIGet({
        type: "getArtworkInfo",
        payload: { pri:target},
      });
      setArtworkInfo(result);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    initArtworkInfo();
  }, []);
  return (
    <div style={pageWarpperStyle}>
      <ArtworkInfo artwork={artworkInfo.imageInfo}></ArtworkInfo>
      <AuthorSidebar author={artworkInfo.authorInfo}></AuthorSidebar>
    </div>
  );
}
const pageWarpperStyle ={
  display:"flex",
  flexDirection:"row",
  alignItems:"center",
}
