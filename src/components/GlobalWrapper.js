import React from "react";
import ImageInfoBody from "./bodies/ArtworkInfoBody";
import NavBar from "./NavBar";
import ThumbBody from "./bodies/ThumbBody";

export default function GlobalWrapper(props) {
  switch (0) {
    case 0: {
      return (
        <>
          <NavBar></NavBar>
          <ThumbBody></ThumbBody>
        </>
      );
    }
    case 1: {
      return (
        <>
          <NavBar></NavBar>
          <ImageInfoBody pri={props.location.pri}></ImageInfoBody>
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
