import React from "react";
export default class ArtworkInfo extends React.Component {
  constructor() {
    super()
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <img src={this.props.artwork.source} alt={this.props.artwork.title}></img>
      </div>
    );
  }
}
