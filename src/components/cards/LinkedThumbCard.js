import React from "react"

export default function LinkedThumbCard(props){
    return (
        <>
      <a href={props.to}>
        <img src={props.src} alt="" style={props.styling}></img>
      </a>
      </>
    )
  }