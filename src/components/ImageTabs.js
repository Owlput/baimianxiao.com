import React from "react";
import getImages from "../PTSAPI";
export default class ImageTabs extends React.Component {
  constructor(props) {
    super(props)
}
  render() {
    return (
      <div style={imageTabsStyle}>
        {getImages(this.page).map((image) => (
          <div style={divStyle}>
            <img style={imgStyle} src={image.src} key={image.id} />
            <p>{image.id}</p>
          </div>
        ))}
      </div>
    );
  }
}

const divStyle = {
  width: "15em",
  height: "23em",
  backgroundColor: "rgb(240,240,240)",
  margin: "1em 1em 1em 1em",
};
const imgStyle = {
  width: "14em",
  margin: "0.5em 0.5em 0.5em 0.5em",
};
const imageTabsStyle = {
  display: "flex",
  justifyContent: "space-around",
};
