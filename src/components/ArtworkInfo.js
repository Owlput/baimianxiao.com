import React from "react";
import { imgAddr } from "../assets/config";
import TagCollection from "./TagCollection";
import "../assets/css/genuineStyle.css";
import LinkedIcon from "./LinkedIcon";
import { useState } from "react";
import { usePopper } from "react-popper";
import AuthorInfoCard from "./cards/AuthorInfoCard";
import LinkedThumbCard from "./cards/LinkedThumbCard";
import ArtworkDisplay from "./ArtworkDisplay";

export default function ArtworkInfo(props) {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      {name:"preventOverflow",options:{ boundary:document.getElementById("sidebarWarp") }},
      { name: "offset", options: { offset: [0, 40] } },
    ],
    placement: "right-start",
  });

  if (props.uri) {
    return (
      <div id="compWrap">
        <CSSInjector />
        <div id="imgSideWrap">
          <div id="imgWrap" ref={setReferenceElement}>
            <ArtworkDisplay {...props} />
          </div>
          <div id="sidebarWrap">
          <div
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
            id="aip"
          >
            <AuthorSidebar {...props.authorInfo}></AuthorSidebar>
            <div ref={setArrowElement} style={styles.arrow} />
          </div></div>
        </div>
        <ArtworkInfoDiv {...props}></ArtworkInfoDiv>
      </div>
    );
  } else {
    return <></>;
  }
}

function ArtworkInfoDiv(props) {
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
  return (
    <div id="artworkInfoDiv">
      <p id="artworkTitle">{props.title}</p>
      <TagCollection styling={tagStyle} tags={props.tags}></TagCollection>
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
function AuthorSidebar(props) {
  const author = props.name ? props : undefined;
  const ais = {
    wrapperSty: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "90%",
    },
    textSty: {
      textAlign: "center",
      fontSize: "2em",
      margin: "0.5em 0px 0.5em 0px",
      color: "rgb(200,200,200)",
    },
    imageSty: {
      width: "70%",
      borderRadius: "50%",
      textAlign: "center",
    },
    nameSty: {
      textAlign: "center",
      fontSize: "1.5em",
      margin: "3% 4% 5% 4%",
    },
    contactSty: {
      div: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      },
      text: {
        fontSize: "5em",
      },
    },
    statusSty: {},
  };
  const recentWorksStyle = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
    },
    text: {
      textAlign: "center",
      fontSize: "1.5em",
    },
    image: {
      width: "50%",
    },
  };

  if (author) {
    return (
      <div id="authorSidebarWrap">
        <AuthorInfoCard {...author} {...ais}></AuthorInfoCard>
        <div style={recentWorksStyle.wrapper}>
          <p style={recentWorksStyle.text}>最近作品</p>
          <div>
            {author.recentWorks.map((thumb, index) => (
              <LinkedThumbCard
                src={`${imgAddr}/thumbs/${thumb}.jpg`}
                to={`/artwork/${thumb}`}
                key={index}
                styling={recentWorksStyle.image}
              ></LinkedThumbCard>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
function CSSInjector() {
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
  background-color:rgb(245,245,245);
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
#authorSidebarWrap{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(250,250,250);
  width: 100%;
  max-width: 14em;
  min-width:9em;
}
#imgWrap{
  width:100%;
}
#imgSideWrap{
  display:grid;
  grid-template-columns:70% 30%;
}
#sidebarWrap{
  overflow:hidden;
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
