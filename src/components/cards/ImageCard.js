import React from "react";

export default class ImageCard extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={this.props.style}>
        <img
          src={this.props.imageInfo.source}
          style={imageStyle}
          alt={this.props.imageInfo.title}
        ></img>
        <p>{this.props.imageInfo.title}</p>
        <div style={authorDivStyle}>
          <img src={this.props.imageAuthor.image}></img>
          <p>{this.props.imageAuthor.name}</p>
        </div>
      </div>
    );
  }
}
const imageStyle = {
  width: "250px",
};
const authorDivStyle = {};
