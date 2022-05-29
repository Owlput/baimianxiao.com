/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { Button } from "@mui/material";
import { useTranslation } from 'react-i18next'

export default function NavBar() {
  const {t} = useTranslation();
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
        {t("homepage")}
      </Button>
      <Button href="/author" className="navbtn">
        {t("authors")}
      </Button>
      <Button href="/about" className="navbtn">
        {t("about")}
      </Button>
    </div>
  );
}

