import ImageCard from "../cards/ImageCard";
import { useEffect, useState } from "react";
import {
  imageCardStyle as ics,
  imageTabsWrapperStyle as itws,
  buttonStyle as btns,
  componentWarpperStyle as cws,
} from "./thumbPageStyle";
import { useDataFetch } from "../../hooks/useDataFetch";
import PageSelector from "../PageSelector";

export default function ThumbPage() {
  /* Init all thumbs */
  const thumbDataTarget = {
    type: "getThumbs",
    payload: {},
  };
  const thumbData = useDataFetch(thumbDataTarget);
  /* Init all thumbs */

  /* Init paging*/
  const [page, setPage] = useState([1, 1]);
  useEffect(() => {
    setPage([
      1,
      thumbData ? Math.ceil(thumbData.thumbs.length / 10) : 1,
    ]);
  }, [thumbData]);
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
  let thumbsDisplayed = thumbData?
    thumbData.thumbs.slice((page[0] - 1) * 10, page[0] * 10)
    : undefined
  /* Decide what thumbs to be displayed based on current page */

  if(thumbsDisplayed){
  return (
    <div style={cws}>
      <div style={itws}>
        {thumbsDisplayed ? (
          thumbsDisplayed.map((image) => (
            <ImageCard {...image} style={ics} key={image.pri}></ImageCard>
          ))
        ) : (
          <></>
        )}
      </div>
      <div>
        <button style={btns} onClick={pervPage}>
          上一页
        </button>
        <button onClick={currentInfo}> Current Status </button>
        <button style={btns} onClick={nextPage}>
          下一页
        </button>
        <PageSelector></PageSelector>
      </div>
    </div>
  );
        } else {
          return <></>
        }
}
