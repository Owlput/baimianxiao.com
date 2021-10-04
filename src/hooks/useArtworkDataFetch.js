import { useState, useEffect } from "react";
import APIGet from "../API";

export const useArtworkDataFetch = (target) => {
  const [artworkData, setArtworkData] = useState({});
  const [authorData, setAuthorData] = useState({});

  const handleAuthorData = async () => {
    try {
      const artworkData = await APIGet(target);
      setArtworkData(artworkData);
      const authorData = await APIGet({
        type: "getAuthorData",
        payload: {
          name: artworkData.authorInfo.name,
        },
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
