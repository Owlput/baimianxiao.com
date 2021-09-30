import React from "react";
import ImageCard from "../cards/ImageCard";

export default class ThumbDiv extends React.Component {
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
      fetch("http://localhost:7000/data/thumbData/imageAllThumbs")
      .then(response=>response.json())
      .then((result) => {
        this.setState({
          imageAll: result.thumbs,
          maxPage: Math.ceil(result.thumbs.length / 10),
          imagesOnPage: result.thumbs.slice(
            (this.state.currentPage - 1) * 10,
            this.state.currentPage * 10
          ),
        });
      }).catch(e=>{console.log("Error when mounting ThumbDiv:"+e)})
      ;
  }
  prePage = () => {
    //console.log(`current ${this.state.currentPage}`)
    if (this.state.currentPage > 1) {
      //console.log(`from page ${this.state.currentPage} to ${this.state.currentPage -1}`)
      this.setState({
        currentPage: this.state.currentPage - 1,
        imagesOnPage: this.state.imageAll.slice(
          (this.state.currentPage - 2) * 10,
          (this.state.currentPage - 1) * 10
        ),
      });
    }
    //console.log(`now on page ${this.state.currentPage}`)
  };
  nextPage = () => {
    //console.log(`current ${this.state.currentPage}`)
    if (this.state.currentPage < this.state.maxPage) {
      //console.log(`from page ${this.state.currentPage} to ${this.state.currentPage +1}`)
      this.setState({
        currentPage: this.state.currentPage + 1,
        imagesOnPage: this.state.imageAll.slice(
          this.state.currentPage * 10,
          (this.state.currentPage + 1) * 10
        ),
      });
      //console.log(`now on page ${this.state.currentPage}`)
    }
  };
  currentInfo = () => {
    console.log(
      `Now page ${this.state.currentPage} with ${this.state.imagesOnPage.length} elements`
    );
  };
  render() {
    return (
      <div style={componentWarpperStyle}>
        <div style={imageTabsStyle}>
          {this.state.imagesOnPage.map((image) => (
            <ImageCard {...image} style={imageCardStyle} key={image.pri}></ImageCard>
          ))}
        </div>
        <div>
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
  display: "flex",
  width:"100%",
  flexWrap:"wrap",
  justifyContent:"space-around"
};

const buttonStyle = {
  height: "2em",
};
const componentWarpperStyle = {
  display: "flex",
  maxWidth:"1300px",
  flexDirection: "column",
  alignItems:"center",
  backgroundColor:"rgb(250,250,250)",
};

const imageCardStyle = {
  background:{
    backgroundColor:"rgb(240,240,240)",
    width:"14em",
    margin:"1% 1%"
  },
  container:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
  },
  image:{
    width:"200px",
  }
};
