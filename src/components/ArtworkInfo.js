import React from "react";
import APIGet from "../PAI";
export default class ArtworkInfo extends React.Component {
  constructor() {
    super()
    this.state = {
        image:{}
    };
  }
  componentDidMount() {
      APIGet(`http://localhost:3000/data/imgData/${this.props.pri}`)
      .then(data=>{this.setState({image:data})})
  }
  render() {
    return (
      <div>
        <img src={this.state.image.imageInfo.source} alt={this.state.image.imageInfo.title}></img>
      </div>
    );
  }
}
