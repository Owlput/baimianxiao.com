import React from "react";

export default class ImageCard extends React.Component {
  constructor() {
    super();
    this.state = {
      onHover: false,
    };
  }
  render() {
    return (
      <div style={this.props.style.background}>
        <div style={this.props.style.container}>
          <div style={imageDivStyle.imageViewport}>
          <img
            src={this.props.imageInfo.source}
            style={this.props.style.image}
            alt={this.props.imageInfo.title}
          ></img>
          </div>
          <p style={imageDivStyle.titleStyle}>{this.props.imageInfo.title}</p>
          <div style={authorDivStyle}>
            <img
              src={this.props.imageAuthor.image}
              alt={this.props.imageAuthor.name}
              style={authorDivStyle.text}
            ></img>
            <p style={authorDivStyle.text}>{this.props.imageAuthor.name}</p>
          </div>
        </div>
      </div>
    );
  }
}

const imageDivStyle = {
  imageViewport:{
    width:"200px",
    height:"200px",
    overflow:"hidden",
    margin:"5%",
  },
  titleStyle:{
    margin:"5%"
  }
}
const authorDivStyle = {
  image: {},
  text: {
    float: "left",
    width:"50px",
    marginRight:"1em",
    
  },
  div:{
    display:"flex",
    alignItems:"baseline",
    overflow:"hidden",
  }
};