import React from "react";
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={flexWarpperStyle}>
        <p>首页</p>
      </div>
    );
  }
}
const flexWarpperStyle = {
  display: "flex",
};
