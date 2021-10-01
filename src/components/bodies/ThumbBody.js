import ImageCard from "../cards/ImageCard";
import { useThumbsInit } from "../../hooks/thumbBodyHooks/useThumbsInit";
import {
  imageCardStyle as ics,
  imageTabsWrapperStyle as itws,
  buttonStyle as btns,
  componentWarpperStyle as cws,
} from "./ThumbBodyStyle";

export default function ThumbBody(props) {
  const { thumbs, thumbsDisplayed, page } = useThumbsInit(2);
  /*
  componentDidMount() {
      fetch({type:"thumbs"})
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
  */
  const currentInfo = () => {
    console.log(`Now page ${page[0]} with ${thumbsDisplayed.length} elements`);
  };

  return (
    <div style={cws}>
      <div style={itws}>
        {thumbsDisplayed.map((image) => (
          <ImageCard {...image} style={ics} key={image.pri}></ImageCard>
        ))}
      </div>
      <div>
        <button style={btns}>上一页</button>
        <button onClick={currentInfo}> Current Status </button>
        <button style={btns}>下一页</button>
      </div>
    </div>
  );
}
