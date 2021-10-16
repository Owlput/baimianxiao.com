import React from "react";
import { imgAddr } from "../assets/config";
import TagCollection from "./TagCollection";
import "../assets/css/genericStyle.css";
import LinkedIcon from "./LinkedIcon";
import { useState } from "react";
import AuthorInfoCard from "./cards/AuthorInfoCard";
import LinkedThumbCard from "./cards/LinkedThumbCard";

export default function ArtworkInfo(props) {
  let data = props.uri ? props : defaultData;
  return (
    <div id="compWrap">
      <CSSInjector />
      <div id="img-sideWrap" className="aliContH">
        <ArtworkDisplay {...data} />

        <AuthorSidebar {...data.authorInfo}></AuthorSidebar>
      </div>
      <ArtworkInfoDiv {...data}></ArtworkInfoDiv>
    </div>
  );
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
    <div id="artworkInfoTopWrap">
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
  return (
    <div id="authorSidebarWrap">
      <AuthorInfoCard {...props} {...ais}></AuthorInfoCard>
      <div style={recentWorksStyle.wrapper}>
        <p style={recentWorksStyle.text}>最近作品</p>
        <div>
          {props.recentWorks.map((thumb, index) => (
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
}
function ArtworkDisplay(props) {
  let imageDisplayed = props.source ? props.source.this : [];
  const [expand, setExpand] = useState(false);
  if (expand) {
    return (
      <div id="artDispWrapEd">
        {imageDisplayed.map((source, index) => (
          <img
            src={`${imgAddr}/artwork/${source}`}
            alt="artwork"
            key={index}
          ></img>
        ))}
        <button onClick={() => setExpand(false)}>收起</button>
      </div>
    );
  } else {
    return (
      <div id="artDispWrapUned">
        <div id="imgViewport">
          <img
            src={`${imgAddr}/artwork/${imageDisplayed[0]}`}
            alt="artwork"
          ></img>
        </div>
        <button onClick={() => setExpand(true)}>
          <p>展开</p>
        </button>
      </div>
    );
  }
}

function CSSInjector() {
  return (
    <style>
      {`
#compWrap{
 display:flex;
 flex-direction:column;
}
#img-sideWrap{
  width:100%;
  justify-content:space-between;
  margin-bottom: 1rem;
}

#artDispWrapEd{
  margin-right:0.8rem;
  width:100%;
  padding:1rem;
  background-color:rgb(245,245,245);
  border-radius:1rem;
}
#artDispWrapEd button{
  border:none;
  padding:0px;
  width:100%;
  height:2rem;
}
#artDispWrapEd img{
  width:100%;
}
#artDispWrapUned{
  width:100%;
  margin-right:0.8rem;
  max-height:38rem;
  padding:1rem;
  background-color:rgb(245,245,245);
  border-radius:1rem;
}
#imgViewport {
  width:100%;
  max-height:38rem;
  overflow:hidden;
}
#imgViewport img{
  width:100%;
}
#artDispWrapUned button{
  width:100%;
  border:none;
  position:relative;
  padding:0px;
  height:3.5rem;
  bottom:3.5rem;
  cursor:pointer;
  background:linear-gradient(to bottom,rgba(255,255,255,0.2),rgba(255,255,255,0.8))
}
#artDispWrapUned p {
  margin:0px;
  font-size:2rem;
}

#authorSidebarWrap{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(245,245,245);
  width: 100%;
  max-width: 14rem;
  min-width:9rem;
  margin-left:0.8rem;
  border-radius:1rem;
}

#artworkInfoTopWrap{
  background-color:rgb(245,245,245);
  border-radius: 1rem;
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
#artworkTitle{
  font-size: 1.5rem;
  margin: 0.5rem 1rem;
}
#artworkInfoWrapper{
  margin:1rem;
  display:grid;
  grid-template-columns:100px 4px auto 4px 20%;
}
#artworkInfoWrapper hr {
  border:1px solid rgb(215,215,215);
  border-radius:30%;
  height:80%;
}
#infoAuthor{
  align-self:center;
  width:15%;
  min-width:90px;
  height:100%;
}
#infoAuthor img{
  width:80px;
  border-radius:50%;
}
#infoAuthor p{
  font-size:1.2rem;
  color:rgb(100,100,100);
  margin:0.5em
}
#infoOther{
  min-width:40%;
}
#infoOther p {
  margin:0.5rem;
  color:rgb(100,100,100);
  min-width:5rem;
}
#infoOther div{
  width:90%;
  justify-content:space-around;
}

.divide {
  width: 100%;
}
.divide hr{
  border-top: 0.1rem solid rgb(140,140,140);
  margin: 0px 0.5rem 0px 0.8rem;
  width: inherit;
  border-radius: 0.4rem;
}
.divide p {
  min-width:6rem
}

`}
    </style>
  );
}

const defaultData = {
  uri: "",
  title: "",
  author: ["", ""],
  tags: [["", 0]],
  source: {
    other: [["", ""]],
    from: "",
    this: [""],
  },
  license: {
    type: "",
    source: "",
  },
  authorInfo: {
    name: "",
    authorId: "",
    image: "",
    contact: [["", ""]],
    recentWorks: ["", ""],
  },
};
