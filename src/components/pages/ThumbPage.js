import ImageCard from "../cards/ImageCard";
import { useEffect, useState } from "react";
import useDataFetch from "../../hooks/useDataFetch";
import PageSelector from "../PageSelector";
import {
  CircularProgress,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import "../../assets/css/genericStyle.css";

export default function ThumbPage() {
  /* Init all thumbs */
  let target = {
    type: "getThumbs",
    payload: {},
  };
  const thumbData = useDataFetch(target);
  /* Init all thumbs */

  const [page, setPage] = useState([1, 1]);
  const [timeSort, setTimeSort] = useState(1);
  const [thumbDisp, setThumbDisp] = useState();

  useEffect(() => {
    setPage([1, thumbData ? Math.ceil(thumbData.length / 10) : 1]);
  }, [thumbData]);

  const changePage = (to) => {
    setPage([to, page[1]]);
  };
  const changeTimeSort = (ev) => {
    setTimeSort(ev.target.value);
    if (ev.target.value < 0) {
      console.log("back!");
    } else console.log("forth!");
  };
  useEffect(() => {
    switch (timeSort) {
      case -1: {
        thumbData?.sort((s, t) => {
          let a = s.date;
          let b = t.date;
          if (a > b) return 1;
          if (a < b) return -1;
        });
        break;
      }
      case 1: {
        thumbData?.sort((s, t) => {
          let a = s.date;
          let b = t.date;
          if (a > b) return -1;
          if (a < b) return 1;
        });
        break;
      }
      default: {
        break;
      }
    }
  });
  useEffect(() => {
    let a = thumbData?.slice((page[0] - 1) * 10, page[0] * 10);
    setThumbDisp(a);
  }, [thumbData, timeSort, page]);
  console.log(thumbDisp);
  if (thumbDisp) {
    return (
      <div className="aliContV" id="compWrap">
        <CSSInjector />
        <Paper id="thumbDispWrap">
          <div>
            <div id="sortBar">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">时间排序</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={timeSort}
                  label="TimeSort"
                  onChange={changeTimeSort}
                >
                  <MenuItem value={1}>从新到旧</MenuItem>
                  <MenuItem value={-1}>从旧到新</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div style={itws}>
              {thumbDisp ? (
                thumbDisp.map((image, index) => (
                  <ImageCard {...image} style={ics} key={index}></ImageCard>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <PageSelector
            parentChangePage={changePage}
            maxPage={page[1]}
          ></PageSelector>
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
function CSSInjector() {
  return (
    <style>
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
  );
}
