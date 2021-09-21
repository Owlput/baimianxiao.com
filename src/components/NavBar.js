import React from "react";
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
      
  render() {
    return (
      <div style={flexWarpperStyle}>
        <button>首页</button>
      </div>
    );
  }
  
}
const flexWarpperStyle = {
  display: "flex",
};
