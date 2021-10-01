import React from "react";
export default function ArtworkInfo(props){
    return (
      <div style={CWS}>
        <img src={props.artwork.source} alt={props.artwork.title}></img>
      </div>
    );
}
const CWS = {
  
}