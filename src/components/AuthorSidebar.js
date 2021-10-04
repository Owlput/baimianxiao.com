import React from "react";
import {
  componentWrapperStyle as cws,
  authorInfoStyle as ais,
  recentWorksStyle as rws,
} from "./authorSidebarStyle";
import LinkedIcon from "./LinkedIcon";

export default function AuthorSidebar(props) {

  const author = props.name ? props:undefined

  if(author){
  return (
    <div style={cws}>
      <div style={ais.wrapper}>
        <div>
          <p style={ais.text}>插画作者</p>
          <img
            src={author.image}
            style={ais.image}
            alt={author.name}
          ></img>
          <p style={ais.name}>{author.name}</p>
        </div>
        <div style={ais.contact.div}>
          {author.contact.map((contact, index) => (
              <LinkedIcon
                type={contact[0]}
                to={contact[1]}
                key={index}
              ></LinkedIcon>
            ))}
        </div>
      </div>
      <div style={rws.wrapper}>
        <p style={rws.text}>最近作品</p>
        <div>{}</div>
      </div>
    </div>
  );
}else{
  return <></>
}
}
