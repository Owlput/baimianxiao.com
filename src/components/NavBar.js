import React from "react";
import { useDispatch as dispatch } from "@reduxjs/toolkit";
export default function NavBar(props) {
  return(
        <div style={flexWarpperStyle}>
        <button onClick={()=>{dispatch()}}>首页</button>
        <button onClick={()=>{props.toTestPic()}}>测试图片</button>
        </div>
        )
}
const flexWarpperStyle = {
  display: "flex",
  flexWrap:"wrap",
  justifyContent:"space-around",
  width:"100%",
};
