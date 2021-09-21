import React from "react";
import ImageDiv from "./ImageDiv";
import NavBar from "./NavBar";
import ImageInfo from "./ImageInfo";
export default class GlobalWrapper extends React.Component {
  constructor() {
    super(props);
    this.state = {
      location: "index",
      imageURL:""
    };
  }

  setLocation(params) {
    this.setState({location:params.location,imagePRI:params.imagePRI})
  }

  render() {
    switch (this.state.location) {
      case "index": {
          this.setState({imagePage:{
            isImagePage:false,
            imageURL:""
        }})
        return (
          <>
            <NavBar setLocation={this.setLocation.bind(this)}></NavBar>
            <ImageDiv></ImageDiv>
          </>
        );
      }
      case "image": {
        return (
          <ImageInfo imageURI = {this.imageURI.bind(this)}></ImageInfo>
        )
      }
    }
  }
}
