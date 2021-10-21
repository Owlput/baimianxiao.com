import ImageCard from "../cards/ImageCard";
import { useEffect, useState } from "react";
import useDataFetch from "../../hooks/useDataFetch";
import PageSelector from "../PageSelector";
import { CircularProgress,Paper } from "@material-ui/core";
import '../../assets/css/genericStyle.css'

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
    setPage([1, thumbData ? Math.ceil(thumbData.length / 10) : 1]);
  }, [thumbData]);
  /* Init paging */

  const changePage=(to)=>{
    setPage([to,page[1]])
  }

  /* Decide what thumbs to be displayed based on current page */
  let thumbsDisplayed = thumbData
    ? thumbData.slice((page[0] - 1) * 10, page[0] * 10)
    : undefined;
  /* Decide what thumbs to be displayed based on current page */

  if (thumbsDisplayed) {
    return (
      <div className="aliContV" id="compWrap">
        <CSSInjector />
        <Paper id="thumbDispWrap">
        <div style={itws}>
          {thumbsDisplayed ? (
            thumbsDisplayed.map((image, index) => (
              <ImageCard {...image} style={ics} key={index}></ImageCard>
            ))
          ) : (
            <></>
          )}
        </div>
        <PageSelector parentChangePage={changePage} maxPage={page[1]}></PageSelector>
      </Paper>
      </div>
    );
  } else {
    return <CircularProgress />;
  }
}

/*
  cws=componentWrapperStyle
  itws=imageTabsWrapperStyle
  ics=imageCardStyle
  btns=buttonStyle
  */
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
function CSSInjector(){
  return <style>
    {`
    #compWrap{
      min-width:80%;
    }
    #thumbDispWrap{
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 1em;
      width: 92%;
      max-width: 80em;
    }
    `}
  </style>
}