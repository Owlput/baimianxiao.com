/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';



export default function BottomNav(props) {
  
    return (
      <Box css={css`
        visibility:hidden;
        height:0px;
        @media screen and (max-width:768px){
            visibility:visible;
            height:auto;
            width:100%;
            position:fixed;
            bottom:0px;
        }
      `}>
        <BottomNavigation
          showLabels
          value={props.value??"Homepage"}
          css={css`
            height:3.5rem;
            width:100%;
          `}
        >
          <BottomNavigationAction label="首页" href="/" value="Homepage"/>
          <BottomNavigationAction label="作者" href="/author" value="Authors"/>
          <BottomNavigationAction label="关于" href="/about" value="About"/>
        </BottomNavigation>
      </Box>
    );
  }