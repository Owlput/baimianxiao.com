import React from "react";
import { useDispatch as dispatch } from "react-redux";
export default function NavBar(props) {
  return (
    <div style={flexWarpperStyle}>
      <button
        onClick={() => {
          dispatch({ type: "toHome" });
        }}
      >
        首页
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "toTestpic",
            payload: { pri: "TempPRI6dfc6b53-7db9-4fc1-a1d4-a33477944979" },
          });
        }}
      >
        测试图片
      </button>
    </div>
  );
}
const flexWarpperStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  width: "100%",
};
