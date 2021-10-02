import React from "react";
export default function LinkedIcon(props) {
  switch (props.type) {
    case "Pixiv": {
      return (
        <a href={props.to}>
          <img src={"../../../public/assets/icons/pixiv.ico"}></img>
        </a>
      );
    }
    case "Twitter": {
      return (
        <a href={props.to}>
          <i className="bi bi-twitter"></i>
        </a>
      );

    } 
    default :{
          return(<></>)
      }
  }
}
