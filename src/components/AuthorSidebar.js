import React from "react";
export default function AuthorSidebar(props) {
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
        <div style={RecentWorksStyle.wrapper}></div>
      </div>
    );
  }
const componentWrapperStyle = {};
const AuthorInfoStyle = {
  wrapper: {},
  image: {},
  text: {},
  status: {},
};
const RecentWorksStyle = {
  wrapper: {},
  image: {},
};
