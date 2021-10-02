import { useState, useEffect } from "react";
import APIGet from "../PAI";

export const useArtworkDataFetch = (target) => {
  const initialArtworkInfo = {
    pri: "",
    imageInfo: {
      title: "",
      source: "",
    },
    authorInfo: {
      name: "",
      image: "",
    },
  };

  const initialAuthorData = {
    name: "",
    contact: [[], []],
    recentWorksThumbURL: [""],
  };

  const [artworkData, setArtworkData] = useState(initialArtworkInfo);
  const [authorData, setAuthorData] = useState(initialAuthorData);

  const handleAuthorData = async () => {
    try {
      const artworkData = await APIGet(target);
      setArtworkData(artworkData);
      const authorData = await APIGet({
        type:"getAuthorData",
        payload:{
          name:artworkData.authorInfo.name
        }
      });
      setAuthorData(authorData);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    handleAuthorData();
  }, []);
  return { artworkData, authorData };
};
