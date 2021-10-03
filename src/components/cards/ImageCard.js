import React from "react";
import { imageDivStyle, authorDivStyle, anchorStyle } from "./imageCardStyle";

export default function ImageCard(props) {
  return (
    <div style={props.style.background}>
      <div style={props.style.container}>
        <div style={imageDivStyle.imageViewport}>
          <a href={`http://localhost:3000/artwork/${props.pri}`}>
            <img
              src={props.imageInfo.source}
              style={props.style.image}
              alt={props.imageInfo.title}
            ></img>
          </a>
        </div>
        <p style={imageDivStyle.titleStyle}>{props.imageInfo.title}</p>
        <div style={authorDivStyle}>
          <a
            href={`http://localhost:3000/artwork/${props.pri}`}
            style={anchorStyle.text}
          >
            <img
              src={props.imageAuthor.image}
              alt={props.imageAuthor.name}
              style={authorDivStyle.text}
            ></img>

            <p style={authorDivStyle.text}>{props.imageAuthor.name}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
