import React from "react";
export default class NavBar extends React.Component{
    render() {
        return(
        <div style={flexWarpperStyle}>
        <button onClick={()=>{this.props.toHome()}}>首页</button>
        <button onClick={()=>{this.props.toTestPic()}}>测试图片</button>
        </div>
        )
    }
}
const flexWarpperStyle = {
  display: "flex",
};
