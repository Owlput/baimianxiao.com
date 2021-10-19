import React from "react";
import {Button} from '@material-ui/core'
export default function NavBar() {
  return (
    <div id="flexWrapper">
      <CSSInjector />
      <Button href="/" className="BnavButton">首页</Button>
      <Button href="/author" className="BnavButton">作者</Button>
      <Button href="/about" className="BnavButton">关于</Button>
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
      .BnavButton{
        font-size:1.5rem;
        color:rgb(100,100,100);
      }
      `}
    </style>
  );
}
