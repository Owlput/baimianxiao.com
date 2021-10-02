import ImageCard from "../cards/ImageCard";
import { useEffect, useState } from "react";
import {
  imageCardStyle as ics,
  imageTabsWrapperStyle as itws,
  buttonStyle as btns,
  componentWarpperStyle as cws,
} from "./ThumbPageStyle";
import { useThumbFetch } from "../../hooks/useThumbFetch";

export default function ThumbPage() {
  /* Init all thumbs */
  const thumbDataTarget = {
    type:"getThumbs",
    payload:{}
  }
  const thumbs = useThumbFetch(thumbDataTarget)
  /* Init all thumbs */

    /* Init paging*/
  const [page, setPage] = useState([1,1]);
  useEffect(
    ()=>{
      setPage([1,Math.ceil(thumbs.length/10)])
      console.log("now set paging")
    },[thumbs]
  )
  /* Init paging */

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
