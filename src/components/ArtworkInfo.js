import React from "react";
import { imgAddr } from "../assets/config";
import TagCollection from "./TagCollection";
import "../assets/css/genuineStyle.css";
import LinkedIcon from "./LinkedIcon";
import { useState } from "react";
import { usePopper } from "react-popper";
import AuthorSidebar from "./AuthorSidebar";

export default function ArtworkInfo(props) {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } },{name:"preventOverflow",options:{boundary:document.querySelector("#imgWrap")}}],
    placement: "right-start",
  });

  if (props.uri) {
    const imgSrc = `${imgAddr}/artwork/${props.source.this}`;
    return (
      <div id="compWrap">
        <StyleInjector />
        <div id="imgWrap">
          <img
            src={imgSrc}
            alt={props.title}
            ref={setReferenceElement}
            id="artworkImage"
          ></img>
          <div
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
            id="aip"
          >
            <AuthorSidebar {...props.authorInfo}></AuthorSidebar>
            <div ref={setArrowElement} style={styles.arrow} />
          </div>
        </div>
        <ArtworkInfoDiv {...props}></ArtworkInfoDiv>
      </div>
    );
  } else {
    return <></>;
  }
}

const tagStyle = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    margin: "0.1em 1em",
  },
  text: {
    margin: "0.1em",
    color: "rgb(100,100,100)",
  },
};

function ArtworkInfoDiv(props) {
  return (
    <div id="artworkInfoDiv">
        <p id="artworkTitle">{props.title}</p>
        <TagCollection
          styling={tagStyle}
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
          <hr />
          <div id="infoOther" className="aliContV">
            <p>其他平台</p>
            <div className="aliContH">
              {props.source.other.map((source, index) => (
                <LinkedIcon type={source[0]} to={source[1]} key={index} />
              ))}
            </div>
          </div>
          <hr />
          <div id="infoPermit" className="aliContV"></div>
        </div>
    </div>
  );
}

function StyleInjector() {
  return (
    <style>
      {`
#compWrap{

}
#artworkImage{
  width:70%;
  maxWidth:fit-content;
}
#artworkInfoDiv{
  background-color:rgb(250,250,250);
  border-radius: 1em;
  width: 100%;
  height: 15em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
#artworkTitle{
  font-size: 1.5em;
  margin: 0.1em 1em;
}
      
#cWrap {
  background-color: rgb(240, 240, 240);
  border-radius: 1em;
  width: 85%;
  justify-content: space-between;
  margin: 1em 0px;
}
#aip{
  width:30%;
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
  height:80%;
}
#infoAuthor{
  width:15%;
  min-width:100px;
  height:100%;
}
#infoAuthor img{
  width:80px;
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
