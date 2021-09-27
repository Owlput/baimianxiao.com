import React from "react";
import ArtworkInfo from "./ArtworkInfo";
import AuthorSidebar from "./AuthorSidebar";

export default class ImageInfoPage extends React.Component {
  constructor() {
    super()
    this.state = {};
  }
  render() {
    return (
      <>
        <ArtworkInfo></ArtworkInfo>
        <AuthorSidebar></AuthorSidebar>
      </>
    );
  }
}
