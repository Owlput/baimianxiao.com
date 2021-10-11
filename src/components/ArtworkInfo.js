import React from "react";
import { imgAddr } from "../assets/config";
import TagCollection from "./TagCollection";
import '../assets/css/genuineStyle.css'
import LinkedIcon from "./LinkedIcon";

export default function ArtworkInfo(props) {
  if (props.uri) {
    const imgSrc = `${imgAddr}/artwork/${props.source.this}`;
    return (
      <div style={componentWarpperStyle}>
        <StyleInjector />
        <img src={imgSrc} alt={props.title} style={imageStyle}></img>
        <div style={ais.wrapper}>
          <div style={ais.titleTag.wrapper}>
            <p style={ais.titleTag.title}>{props.title}</p>
            <TagCollection
              styling={ais.titleTag.tag}
              tags={props.tags}
            ></TagCollection>
            <div id="artworkInfoWrapper">
              <div id="infoAuthor" className="aliContV">
                <img
                  src={`${imgAddr}/authorProfile/${props.authorInfo.image}`}
                  alt="Artwork Author"
                ></img>
                <p>{props.author[0]}</p>
              </div>
              <hr/>
              <div id="infoOther" className="aliContV">
                <p>其他平台</p>
                <div className="aliContH">
                  {props.source.other.map((source,index)=><LinkedIcon type={source[0]} to={source[1]} key={index}/>)}
                </div>
              </div>
              <hr/>
              <div id="infoPermit" className="aliContV"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
const componentWarpperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const imageStyle = {
  width: "80%",
};
const ais = {
  wrapper: {
    backgroundColor: "rgb(250,250,250)",
    borderRadius: "1em",
    margin: "1em 0px",
    width: "80%",
  },
  titleTag: {
    wrapper: {
      backgroundColor: "rgb(240,240,240)",
      borderRadius: "1em",
      margin: "1em 1em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    },

    title: {
      fontSize: "1.5em",
      margin: "0.1em 1em",
    },
    tag: {
      wrapper: {
        display: "flex",
        alignItems:"center",
        margin: "0.1em 1em",
      },    
      text:{
      margin:"0.1em",
      color:"rgb(100,100,100)",
    },
    },
  },
};
function StyleInjector() {
  return (
    <style>
      {`#cWrap {
  background-color: rgb(240, 240, 240);
  border-radius: 1em;
  width: 85%;
  justify-content: space-between;
  margin: 1em 0px;
}
.divide {
  width: 100%;
}
.divide hr{
  border-top: 0.1em solid rgb(140,140,140);
  margin: 0px 0.5em 0px 0.8em;
  width: inherit;
  border-radius: 0.4em;
}
.divide p {
  min-width:6em
}
.workType {
  width: 12%;
  text-align: center;
}
#artworkWrap {
  width: 80%;
  background-color: rgb(230,230,230);
  margin: 1%;
  border-radius: 1em;
}
#artworkInfoWrapper{
  margin:0.5em;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
}
#artworkInfoWrapper hr {
  border:1px solid rgb(215,215,215);
  border-radius:30%;
}
#infoAuthor{
  width:19%;
}
#infoAuthor img{
  width:80%;
  border-radius:50%;
}
#infoAuthor p{
  font-size:1.2em;
  color:rgb(100,100,100);
  margin:0.5em
}
#infoOther{
  min-width:40%;
}
#infoOther p {
  margin:0.5em;
  color:rgb(100,100,100);
  min-width:5em;
}
#infoOther div{
  width:90%;
  justify-content:space-around;
}
#infoPermit{
  width:40%;
}
`}
    </style>
  );
}
