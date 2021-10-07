import React from "react";
import { useDataFetch } from "../../hooks/useDataFetch";
import "../../assets/css/authorCrad.css"
import "../../assets/css/aliCont.css"

export function AuthorCard(props) {

  const target={
    type:"getAuthorData"
  }

  const authorData = useDataFetch(target)

  const author = authorData.name?authorData:undefined
  if(author){
  return <div className="aliContH">
    <div id="aw">
      <img src={author.image}></img>
      <p>{author.name}</p>
    </div>
    <div id="dw">
      <div id="aww">

      </div>
      <div id="oww"></div>
    </div>
  </div>;
  } else {
    return <></>
  }
}
