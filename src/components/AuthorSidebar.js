import React,{useState,useEffect} from "react";


export default function AuthorSidebar(props) {

  const initialAuthorInfo = {}

  const [authorInfo,setAuthorInfo] = useState(initialAuthorInfo)



  return (
    <div style={componentWrapperStyle}>
      <div style={AuthorInfoStyle.wrapper}>
        <img
          src={props.author.image}
          style={AuthorInfoStyle.image}
          alt={props.author.name}
        ></img>
        <p style={AuthorInfoStyle.text}>{props.author.name}</p>
      </div>
      <div style={RecentWorksStyle.wrapper}>
        <p>最近作品</p>
        <div>
          {}
        </div>
      </div>
    </div>
  );
}

const componentWrapperStyle = {
  width:"20%"
};
const AuthorInfoStyle = {
  wrapper: {},
  image: {
    width:"80px",
    borderRadius:"50%",
  },
  text: {},
  status: {},
};
const RecentWorksStyle = {
  wrapper: {
    display:"flex",
    flexDirection:"column",
  },
  image: {},
};
