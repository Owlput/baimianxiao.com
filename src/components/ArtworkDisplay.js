import React, { useState } from "react";
import { imgAddr } from "../assets/config";

export default function ArtworkDisplay(props) {
  const [expand, setExpand] = useState(false);
  if (expand) {
    return (
      <div style={styling.ed.wrap}>
        {props.source.this.map((source, index) => (
          <img
            src={`${imgAddr}/artwork/${source}`}
            alt="artwork"
            key={index}
            style={styling.ed.img}
          ></img>
        ))}
      </div>
    );
  } else {
    return (
      <div style={styling.uned.wrap}>
        <div id="imageViewport" style={styling.uned.viewport}>
          <img
            src={`${imgAddr}/artwork/${props.source.this[0]}`}
            alt="artwork"
            style={styling.uned.img}
          ></img>
        </div>
        <button onClick={() => setExpand(true)} style={styling.uned.btn}>
          展开
        </button>
      </div>
    );
  }
}

const styling = {
  ed: {
    wrap: {
      width: "100%",
    },
    img: {
      width: "100%",
    },
  },
  uned: {
    wrap: {
    },
    btn: {},
    viewport:{
        width: "100%",
        height: "45em",
        overflow: "hidden",
    },
    img: {
      width: "100%",
    },
  },
};
