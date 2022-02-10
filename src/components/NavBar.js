/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { Button } from "@material-ui/core";

export default function NavBar() {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 2em;
        width: 100%;
        height: 3.5em;
        background-color: rgb(240, 240, 240);
        .navbtn {
          font-size: 1.5rem !important;
          color: rgb(100, 100, 100) !important;
        }
        @media screen and (max-width:800px){
          height:0px;
          visibility:hidden;
        }
      `}
    >
      <Button href="/" className="navbtn">
        首页
      </Button>
      <Button href="/author" className="navbtn">
        作者
      </Button>
      <Button href="/about" className="navbtn">
        关于
      </Button>
    </div>
  );
}

