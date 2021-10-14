import React from "react";
import LinkedIcon from "../LinkedIcon";
import { imgAddr } from "../../assets/config";
import "../../assets/css/genuineStyle.css";

export default function AuthorInfoCard(props) {
  if (props) {
    const authorImgSrc = `${imgAddr}/authorProfile/${props.image}`;
    return (
      <div style={props.wrapperSty}>
          <img src={authorImgSrc} style={props.imageSty} alt={props.name}></img>
          <p style={props.nameSty}>{props.name}</p>
        <div style={props.contactSty.div}>
          {props.contact.map((contact, index) => (
            <LinkedIcon
              type={contact[0]}
              to={contact[1]}
              key={index}
            ></LinkedIcon>
          ))}
        </div>
      </div>
    );
  } else return <></>;
}
