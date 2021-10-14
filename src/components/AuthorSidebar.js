import React from "react";
import { imgAddr } from "../assets/config";
import {
  componentWrapperStyle as cws,
  recentWorksStyle as rws,
} from "./authorSidebarStyle";
import AuthorInfoCard from "./cards/AuthorInfoCard";
import LinkedThumbCard from "./cards/LinkedThumbCard";

export default function AuthorSidebar(props) {
  const author = props.name ? props : undefined;

  if (author) {
    return (
      <div style={cws}>
        <AuthorInfoCard {...author} {...ais}></AuthorInfoCard>
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
const ais = {
  wrapperSty: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width:"90%"
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
    textAlign:"center",
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
