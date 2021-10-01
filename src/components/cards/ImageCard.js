import React from "react";

export default function ImageCard(props){
    return (
      <div style={props.style.background}>
        <div style={props.style.container}>
          <div style={imageDivStyle.imageViewport}>
          <img
            src={props.imageInfo.source}
            style={props.style.image}
            alt={props.imageInfo.title}
          ></img>
          </div>
          <p style={imageDivStyle.titleStyle}>{props.imageInfo.title}</p>
          <div style={authorDivStyle}>
            <img
              src={props.imageAuthor.image}
              alt={props.imageAuthor.name}
              style={authorDivStyle.text}
            ></img>
            <p style={authorDivStyle.text}>{props.imageAuthor.name}</p>
          </div>
        </div>
      </div>
    );
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