import React from "react";
import ArtworkInfoComponent from "./ArtworkInfoComponent";
import AuthorSidebar from "./AuthorSidebar";

export default class ImageInfoPage extends React.Component {
  constructor() {
    super()
    this.state = {
      artworkInfo:{
        imageInfo:{
          source:"",
          title:"",
        },
        authorInfo:{
          name:"",
          image:"",
        },
      }
    };
  }
  componentDidMount() {
    fetch(`http://localhost:7000/data/imageData/${this.props.pri}`)
    .then(response=>response.json())
    .then(data => this.setState({artworkInfo:data}))
    .catch(e=>{console.log("Error when mounting ArtworkInfoPage:"+e)})
}
  render() {
    return (
      <>
        <ArtworkInfoComponent artwork={this.state.artworkInfo.imageInfo}></ArtworkInfoComponent>
        <AuthorSidebar author={this.state.artworkInfo.authorInfo}></AuthorSidebar>
      </>
    );
  }
}
