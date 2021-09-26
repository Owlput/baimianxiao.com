import React from "react";
import ArtworkInfo from "./ArtworkInfo";

export default class ImageInfoPage extends React.Component {
  constructor() {
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
