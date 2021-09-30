import React from "react";
import ImageInfoPage from "./pages/ArtworkInfoPage";
import NavBar from "./NavBar";
import ThumbPage from "./pages/ThumbPage";

export default class GlobalWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      location: 0,
      pri: "",
    };

  }    

  
  render() {
    switch (this.state.location) {
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
            <ImageInfoPage pri={this.state.imagePRI}></ImageInfoPage>
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
}
