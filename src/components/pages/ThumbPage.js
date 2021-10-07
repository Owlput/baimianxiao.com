import ImageCard from "../cards/ImageCard";
import { useEffect, useState } from "react";
import { useDataFetch } from "../../hooks/useDataFetch";
import PageSelector from "../PageSelector";

export default function ThumbPage() {
  /* Init all thumbs */
  const target = {
    type: "getThumbs",
    payload: {},
  };
  const thumbData = useDataFetch(target);
  /* Init all thumbs */

  /* Init paging*/
  const [page, setPage] = useState([1, 1]);
  useEffect(() => {
    setPage([1, thumbData ? Math.ceil(thumbData.thumbs.length / 10) : 1]);
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
  let thumbsDisplayed = thumbData
    ? thumbData.thumbs.slice((page[0] - 1) * 10, page[0] * 10)
    : undefined;
  /* Decide what thumbs to be displayed based on current page */

  if (thumbsDisplayed) {
    return (
      <div style={cws}>
        <div style={itws}>
          {thumbsDisplayed ? (
            thumbsDisplayed.map((image, index) => (
              <ImageCard {...image} style={ics} key={index}></ImageCard>
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
    return <></>;
  }
}

/*
  cws=componentWrapperStyle
  itws=imageTabsWrapperStyle
  ics=imageCardStyle
  btns=buttonStyle
  */
const cws = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "1em",
  backgroundColor: "rgb(250,250,250)",
  width: "92%",
  maxWidth:"80em"
};
const itws = {
  display: "flex",
  width: "100%",
  margin: "5px",
  justifyContent: "space-around",
  flexWrap: "wrap",
};
const ics = {
  background: {
    backgroundColor: "rgb(240,240,240)",
    width: "14em",
    height: "18.8em",
    margin: "0.3em 0.3em",
    borderRadius: "10px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "200px",
  },
};
const btns = {
  height: "2em",
};
