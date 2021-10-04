import React from "react";
import "./taggie.css"

export default function Taggie(props){
    return(
        <button id="taggie">
            <p id="tagName">{props.tagName}</p>
            <p id="tagCount">{props.tagCount}</p>
        </button>
    )
}