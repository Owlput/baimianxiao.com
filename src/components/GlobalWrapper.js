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
        let contents = (
          <div style={pageStyle}>
            <NavBar setLocation={this.setLocation.bind(this)}></NavBar>
            <ImageDiv setLocation={this.setLocation.bind(this)}></ImageDiv>
          </div>
        );
        //console.log(contents);
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
const pageStyle = {
  display:"flex",
  flexDirection:"column",
  alignItems:"center"
}
