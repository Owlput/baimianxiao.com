import React from "react";
import ImageDiv from "./ImageDiv";
import NavBar from "./NavBar";
export default class GlobalWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      location: "index",
      imageURL: "",
    };
  }

  setLocation(params) {
    this.setState({
      location: params.location,
      imagePRI: params.imagePRI,
    });
  }

  render() {
    switch (this.state.location) {
      case "index": {
        console.log("render Index!");
        let contents = (
          <>
            <NavBar setLocation={this.setLocation.bind(this)}></NavBar>
            <ImageDiv setLocation={this.setLocation.bind(this)}></ImageDiv>
          </>
        );
        console.log(contents);
        return contents;
      }
      case "image": {
        let contents = (
          <>
            <p>WIP</p>
          </>
        );
        return contents;
      }
      default: {
        console.error("rendered nothing!");
        return (
          <>
            <h1>ERROR</h1>
          </>
        );
      }
    }
  }
}
