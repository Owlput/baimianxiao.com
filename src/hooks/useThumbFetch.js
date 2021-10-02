import { useState, useEffect } from "react";
import APIGet from "../PAI";

export const useThumbFetch = (target) => {
  const initialThumb = [
    {
      pri: "",
      imageInfo: {
        title: "",
        source:
          "",
      },
      imageAuthor: {
        name: "",
        image: "",
      },
    },
  ];

  const [thumbs, setThumbs] = useState(initialThumb);

  const handleData = async () => {
    try {
      const result = await APIGet(target);
      setThumbs(result.thumbs);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    handleData();
  }, []);
  return thumbs;
};
