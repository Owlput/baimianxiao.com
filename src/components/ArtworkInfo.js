import React from "react";
import APIGet from "../PAI";
export default class ArtworkInfo extends React.Component {
  constructor() {
    this.state = {
        image:{}
    };
  }
  componentDidMount() {
      APIGet(`http://localhost:3000/data/imgData/${this.props.pri}`)
      .then(data=>{this.state.image = data})
  }
  render() {
    return (
      <div>
        <img src></img>
      </div>
    );
  }
}
