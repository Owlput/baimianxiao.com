import React from "react";

export default class ImageCard extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={this.props.style.background}>
          <div style={this.props.style.container}>
        <img
          src={this.props.imageInfo.source}
          style={this.props.style.image}
          alt={this.props.imageInfo.title}
        ></img>
        <p style={textStyle}>{this.props.imageInfo.title}</p>
        <div style={authorDivStyle}>
          <img src={this.props.imageAuthor.image} alt={this.props.imageAuthor.name} style={authorDivStyle.text}></img>
          <p style={textStyle}>{this.props.imageAuthor.name}</p>
        </div>
        </div>
      </div>
    );
  }
}
const authorDivStyle = {
    image:{},
    text:{
        float:"left"
    }
};

const textStyle = {
    width:"14em"
}