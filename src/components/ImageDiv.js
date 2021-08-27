import React from "react";
//import getImages from './PAI'

export default class ImageDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      maxPage: 3,
      imagesOnPage: [{ id: 0, src: "0.0.0.0" }],
    };
  }
  componentDidMount() {
    fetch(`http://localhost:4000/image/page/${this.state.currentPage}`)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ imagesOnPage: result });
      });
  }
  prePage = () => {
    if (this.state.currentPage > 1) {
      fetch(`http://localhost:4000/image/page/${this.state.currentPage-1}`)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ imagesOnPage: result ,currentPage:this.state.currentPage-1});
      });
    }
  };
  nextPage = () => {
    if (this.state.currentPage < this.state.maxPage) {
      fetch(`http://localhost:4000/image/page/${this.state.currentPage+1}`)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ imagesOnPage: result, currentPage:this.state.currentPage +1 });
      });
    }
  };
  render() {
    return (
      <div style={componentWarpperStyle}>
        <div style={imageTabsStyle}>
          {this.state.imagesOnPage.map((image) => (
            <div style={imgTabStyle}>
              <div style={imgWarpperStyle}>
                <img style={imgStyle} src={image.src} key={image.id} />
              </div>
              <p>{image.id}</p>
            </div>
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

const imgTabStyle = {
  width: "16em",
  height: "16em",
  backgroundColor: "rgb(240,240,240)",
  margin: "1em 1em 1em 1em",
};
const imgStyle = {
  maxHeight:'100%',
  maxWidth:'100%',
  clip:'15em 15em 15em 15em',
  margin: "0.1em 0.1em 0.1em 0.1em",
  overflow: "hidden",
};
const imageTabsStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5,16em)",
  gridTemplateRows: "repeat(5,16em)",
  gap: "0.2em",
};

const imgWarpperStyle = {
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
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
