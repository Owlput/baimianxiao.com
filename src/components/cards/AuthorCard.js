import React from "react";
//import { useDataFetch } from "../../hooks/useDataFetch";
import "../../assets/css/authorCrad.css"
import "../../assets/css/genuineStyle.css"

export function AuthorCard(props) {

  /*const target={
    type:"getAuthorData"
  }
*/
  //const authorData = useDataFetch(target)

  //const author = authorData.name?authorData:undefined
  const author ={
    name:"test",
    image:"",
  }

  if(author){
  return <div className="aliContH" style={cardWrapper}>
    <div style={authorInfoWrapper}>
      <img src={author.image} alt="Author Profile"></img>
      <p>{author.name}</p>
    </div>
    <div id="artworksWrapper">
      <div style={workStyle.wrapper}>
      <div className="aliContH"> 
      <hr></hr>
      <p style={workStyle.text}>已授权的作品</p>
      <hr></hr>
      </div>
      </div>
      <div style={workStyle.wrapper}>
        <div className="aliContH">
      <hr></hr>
      <p>允许使用的作品</p>
      <hr></hr>
      </div>
      </div>
    </div>
  </div>;
  } else {
    return <></>
  }
}

const cardWrapper ={
  backgroundColor:"rgb(240,240,240)",
  width:"90%",
  borderRadius:"12px"
}
const authorInfoWrapper ={
  width:"20%",
}
const workStyle ={
  wrapper:{},
  text:{
    alignSelf:"center"
  },
  hr:{
    
  }
}