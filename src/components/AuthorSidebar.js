import React from "react";
export default class AuthorSidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      author: {},
    };
  }

  render() {
    return (
      <div style={componentWrapperStyle}>
        <div style={AuthorInfoStyle.wrapper}>
          <img
            src={this.props.author.image}
            style={AuthorInfoStyle.image}
            alt={this.props.author.name}
          ></img>
          <p style={AuthorInfoStyle.text}>{this.props.author.name}</p>
        </div>
        <div style={RecentWorksStyle.wrapper}></div>
      </div>
    );
  }
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
