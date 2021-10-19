import React from "react";

export default function Footer(){
    return(
        <div style={footerWrapper}>
            <div><p style={textStyle}><a style={textStyle} href="https://beian.miit.gov.cn">赣ICP备2021006793号-2</a></p></div>
            <div><p style={textStyle}>联系：DrHuangMHT@ptsapi.top</p>
            <p style={textStyle}>加入我们的<a style={textStyle} href="https://rc.ptilopsis.com.cn:50000/register/4JvdcqixhXyHjDRgL">Rocket.Chat</a>服务器</p>
            </div>
        </div>
    )
}
const footerWrapper={
    backgroundColor:"rgb(30,30,30)",
    width:"100%",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
}
const textStyle={
    color:"rgb(230,230,230)",
    fontSize:"1.2em",
}