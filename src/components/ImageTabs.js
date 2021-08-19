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
          <div style={imgTabStyle}>
              <div style={imgWarpperStyle}>
            <img style={imgStyle} src={image.src} key={image.id} />
             </div>
            <p>{image.id}</p>
          </div>
        ))}
      </div>
    );
  }
}

const imgTabStyle = {
  width: "18em",
  height: "18em",
  backgroundColor: "rgb(240,240,240)",
  margin: "1em 1em 1em 1em",
};
const imgStyle = {
  margin: "0.5em 0.5em 0.5em 0.5em",
  maxWidth:"100%",
  overflow:"hidden"
};
const imageTabsStyle = {
  display: "grid",
  gridTemplateColumns:"repeat(5,18em)",
  gridTemplateRows:"repeat(5,18em)",
  gap:"2em"
};

const imgWarpperStyle= {
    display:"flex",
    alignItems:"center"
}