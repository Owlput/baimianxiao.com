import React from "react";
import ImageCard from "./cards/ImageCard";
//import getImages from './PAI'

export default class ImageDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      maxPage: 0,
      imageAll: [],
      imagesOnPage: [],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:7000/data/imageAllThumbs`)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          imageAll: result.thumbs,
          maxPage: Math.ceil(result.thumbs.length / 5),
          imagesOnPage: result.thumbs.slice(
            (this.state.currentPage - 1) * 5,
            this.state.currentPage * 5
          ),
        });
      });
  }

  prePage = () => {
      console.log(`current ${this.state.currentPage}`)
    if(this.state.currentPage > 1){
      console.log(`from page ${this.state.currentPage} to ${this.state.currentPage -1}`)
    this.setState({
      currentPage: this.state.currentPage -1,
      imagesOnPage: this.state.imageAll.slice((this.state.currentPage -2) * 5, (this.state.currentPage-1) * 5 ),
    });}
    console.log(`now on page ${this.state.currentPage}`)
  };
  nextPage = () => {
    console.log(`current ${this.state.currentPage}`)
    if(this.state.currentPage < this.state.maxPage ){
      console.log(`from page ${this.state.currentPage} to ${this.state.currentPage +1}`)
    this.setState({
      currentPage: this.state.currentPage + 1,
      imagesOnPage: this.state.imageAll.slice((this.state.currentPage) * 5, (this.state.currentPage +1) * 5 ),
    });
    console.log(`now on page ${this.state.currentPage}`)
  }
  };
  currentInfo = () =>{
    console.log(`Now page ${this.state.currentPage} with ${this.state.imagesOnPage.length} elements`)
  }
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
          <button onClick={this.currentInfo}> Current Status </button>
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
  gridTemplateColumns: "repeat(5,18em)",
  gridTemplateRows: "repeat(1,18em)",
  gap: "0.5em",
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
