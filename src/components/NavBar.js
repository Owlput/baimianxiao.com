import React from "react";
export default function NavBar(props) {
  return (
    <div style={flexWarpperStyle}>
      <a style={aStyle.anchor} href="/">
        <p style={aStyle.text}>首页</p>
      </a>
      <a style={aStyle.anchor} href="/about">
        <p style={aStyle.text}>关于</p>
      </a>
    </div>
  );
}
const flexWarpperStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  width: "100%",
  margin: "0px 0px 2em 0px",
  height: "3em",
};
const aStyle = {
  anchor: {
    width: "8em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgb(250,250,250)",
    textDecoration: "none",
  },
  text: {
    fontSize: "1.5em",
    margin: "5px",
    color: "rgb(100,100,100)",
  },
};
