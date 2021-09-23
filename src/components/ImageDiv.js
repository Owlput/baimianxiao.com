import React from "react";
import ImageCard from "./cards/ImageCard";
//import getImages from './PAI'

export default class ImageDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      maxPage: 3,
      imagesOnPage: [{ pri: 0, url: "0.0.0.0" }],
    };
  }
  componentDidMount() {
    fetch(`http://localhost:6000/data/imageAllThumbs`)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ imagesOnPage: result.images });
      });
  }
  prePage = () => {
    
  };
  nextPage = () => {
  };
  render() {
    return (
      <div style={componentWarpperStyle}>
        <div style={imageTabsStyle}>
          {this.state.imagesOnPage.map((image) => (
            <ImageCard {...image}></ImageCard>
          ))}
        </div>
        <div style={GenericFlexWarpperStyle}>
          <button style={buttonStyle} onClick={this.prePage}>
            上一页
          </button>
          <button style={buttonStyle} onClick={this.nextPage}>
            下一页
          </button>
        </div>
      </div>
    );
  }
}

const imageTabsStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5,16em)",
  gridTemplateRows: "repeat(5,16em)",
  gap: "0.2em",
};

const GenericFlexWarpperStyle = {
  display: "flex",
  flexDirection: "row",
};
const buttonStyle = {
  height: "2em",
};
const componentWarpperStyle = {
  display: "flex",
  flexDirection: "column",
};
