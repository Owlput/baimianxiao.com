import React from "react";
export default function NavBar() {
  return (
    <div id="flexWrapper">
      <CSSInjector />
      <a className="nava" href="/">
        <p className="navp">首页</p>
      </a>
      <a className="nava" href="/authors">
        <p className="navp">作者与授权</p>
      </a>
      <a className="nava" href="/about">
        <p className="navp">关于</p>
      </a>
    </div>
  );
}

function CSSInjector() {
  return (
    <style>
      {`
      #flexWrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items:center;
        margin-bottom:2em;
        width: 100%;
        height: 3.5em;
        background-color:rgb(240,240,240)
      }
      .nava {
        width: fit-content;
        background-color: rgb(250,250,250);
        text-decoration: none;
        border-radius:1em;
      }
      .navp{
        text-align:center;
        font-size: 1.5em;
        margin: 0.5em;
        color: rgb(100,100,100);
      }
      `}
    </style>
  );
}
