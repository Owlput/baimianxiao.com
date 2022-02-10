/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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
const target = {
    type: "getThumbs",
    payload: {},
  };
export default function ThumbPage() {
  
  const thumbData = useDataFetch(target);

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
          if (a >= b) return 1;
          else if (a < b) return -1;
          else return 1;
        });
        break;
      }
      case 1: {
        thumbData?.sort((s, t) => {
          let a = s.date;
          let b = t.date;
          if (a >= b) return -1;
          else if (a < b) return 1;
          else return -1;
        });
        break;
      }
      default: {
        return 1;
      }
    }
  });
  useEffect(() => {
    let a = thumbData?.slice((page[0] - 1) * 10, page[0] * 10);
    setThumbDisp(a);
  }, [thumbData, timeSort, page]);
  if (thumbDisp) {
    return (
      <div className="aliContV" style={{ minWidth: "80%" }}>
        <Paper
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 1em;
            width: 92%;
            max-width: 80em;
            @media screen and (max-width: 768px) {
              width: 100%;
            }
          `}
        >
          <div>
            <div
              css={css`
                @media screen and (max-width: 768px) {
                  margin: 0.5rem;
                }
              `}
            >
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
            <div
              css={css`
                display: flex;
                width: 100%;
                justify-content: space-around;
                flex-wrap: wrap;
              `}
            >
              {thumbDisp ? (
                thumbDisp.map((image, index) => (
                  <ImageCard {...image} key={index}></ImageCard>
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
