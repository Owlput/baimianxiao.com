import React from "react";
import LinkedIcon from "./LinkedIcon";

export default function AuthorSidebar(props) {
  console.log(props)
  return (
    <div style={componentWrapperStyle}>
      <div style={AuthorInfoStyle.wrapper}>
        <div>
          <img
            src={props.author ? props.author.image : ""}
            style={AuthorInfoStyle.image}
            alt={props.author ? props.author.name : ""}
          ></img>
          <p style={AuthorInfoStyle.text}>
            {props.author ? props.author.name : ""}
          </p>
        </div>
        <div>
          {props.author.contact ? (
            props.author.contact.map((contact) => (
              <LinkedIcon
                type={contact[0]}
                to={contact[1]}
              ></LinkedIcon>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
      <div style={RecentWorksStyle.wrapper}>
        <p>最近作品</p>
        <div>{}</div>
      </div>
    </div>
  );
}

const componentWrapperStyle = {
  width: "20%",
};
const AuthorInfoStyle = {
  wrapper: {},
  image: {
    width: "80px",
    borderRadius: "50%",
  },
  text: {},
  status: {},
};
const RecentWorksStyle = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  image: {},
};
