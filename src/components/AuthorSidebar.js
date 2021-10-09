import React from "react";
import { imgAddr } from "../assets/config";
import {
  componentWrapperStyle as cws,
  authorInfoStyle as ais,
  recentWorksStyle as rws,
} from "./authorSidebarStyle";
import LinkedThumbCard from "./cards/LinkedThumbCard";
import LinkedIcon from "./LinkedIcon";

export default function AuthorSidebar(props) {
  const author = props.name ? props : undefined;

  if (author) {
    console.log(author)
    const authorImgSrc = `${imgAddr}/authorProfile/${author.image}`
    return (
      <div style={cws}>
        <div style={ais.wrapper}>
          <div style={centerAlignV}>
            <p style={ais.text}>插画作者</p>
            <img src={authorImgSrc} style={ais.image} alt={author.name}></img>
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
          <div>
            {author.recentWorks.map((thumb, index) => (
              <LinkedThumbCard
                src={`${imgAddr}/thumbs/${thumb}.jpg`}
                to={`/artwork/${thumb}`}
                key={index}
                styling={rws.image}
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
const centerAlignV = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
