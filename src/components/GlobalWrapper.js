import React from "react";
import ImageInfoPage from "./bodies/ArtworkInfoBody";
import NavBar from "./NavBar";
import ThumbPage from "./bodies/ThumbPage";

export default function GlobalWrapper(props) {
  switch (props.location) {
    case 0: {
      return (
        <>
          <NavBar></NavBar>
          <ThumbPage></ThumbPage>
        </>
      );
    }
    case 1: {
      return (
        <>
          <NavBar></NavBar>
          <ImageInfoPage pri={props.location.pri}></ImageInfoPage>
        </>
      );
    }
    default: {
      return (
        <>
          <h1>ERROR</h1>
        </>
      );
    }
  }
}
