import { useState, useEffect } from "react";
import APIGet from "../../PAI";

const initialThumbs = []
const initialThumbsDisplayed = []
const initialPage = [0,1] 

export const useThumbsInit = (p) => {
  const [thumbs, setThumbs] = useState(initialThumbs);
  const [thumbsDisplayed, setThumbsDisplayed] = useState(initialThumbsDisplayed);
  const [page, setPage] = useState(initialPage)

  const initThumbBody = async () => {
    try {
      const result = await APIGet({ type: "getThumbs", payload: "" });
      setThumbs(result.thumbs);
      setPage([p,Math.ceil(result.thumbs.length / 10)])
      setThumbsDisplayed(result.thumbs.slice(
        (p - 1) * 10,
        p * 10))
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    initThumbBody();
  },[]);

  return { thumbs,thumbsDisplayed,page }
}
