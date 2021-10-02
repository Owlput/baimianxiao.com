import ImageCard from "../cards/ImageCard";
import { useState, useEffect } from "react";
import {
  imageCardStyle as ics,
  imageTabsWrapperStyle as itws,
  buttonStyle as btns,
  componentWarpperStyle as cws,
} from "./ThumbPageStyle";
import APIGet from "../../PAI";

export default function ThumbPage(props) {
  /* Init states */
  const [thumbs, setThumbs] = useState([]);
  const [page, setPage] = useState([]);
  /* Init states */

  /* Init all thumbs */
  const initThumbBody = async (p = props.page ? props.page : 1) => {
    try {
      const result = await APIGet({ type: "getThumbs", payload: "" });
      setThumbs(result.thumbs);
      setPage([p, Math.ceil(result.thumbs.length / 10)]);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    initThumbBody();
  }, []);
  /* Init all thumbs */

  /* Button Functions Definition */
  const currentInfo = () => {
    console.log(`Now page ${page[0]} with ${thumbsDisplayed.length} elements`);
  };

  const pervPage = () => {
    if (page[0] > 1) {
      setPage([page[0] - 1, page[1]]);
    }
  };
  const nextPage = () => {
    if (page[0] < page[1]) {
      setPage([page[0] + 1, page[1]]);
    }
  };
  /* Button Functions Definition */

  /* Decide what thumbs to be displayed based on current page */
  let thumbsDisplayed = thumbs.slice((page[0] - 1) * 10, page[0] * 10);
  /* Decide what thumbs to be displayed based on current page */

  return (
    <div style={cws}>
      <div style={itws}>
        {thumbsDisplayed.map((image) => (
          <ImageCard {...image} style={ics} key={image.pri}></ImageCard>
        ))}
      </div>
      <div>
        <button style={btns} onClick={pervPage}>
          上一页
        </button>
        <button onClick={currentInfo}> Current Status </button>
        <button style={btns} onClick={nextPage}>
          下一页
        </button>
      </div>
    </div>
  );
}
