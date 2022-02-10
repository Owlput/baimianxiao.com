/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";

export default function Footer(){
    return(
        <div css={css`
            background-color:rgb(35,35,35);
            width:100%;
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            @media screen and (max-width:768px){
                margin-bottom:3.5rem;
            }
        `}>
            <div><p style={textStyle}><a style={textStyle} href="https://beian.miit.gov.cn">赣ICP备2021006793号-2</a></p></div>
            <div><p style={textStyle}>联系：DrHuangMHT@ptsapi.top</p>
            <p style={textStyle}>加入我们的<a style={textStyle} href="https://rc.ptilopsis.com.cn:50000/register/4JvdcqixhXyHjDRgL">Rocket.Chat</a>服务器</p>
            </div>
        </div>
    )
}
const textStyle={
    color:"rgb(230,230,230)",
    fontSize:"1.2em",
}