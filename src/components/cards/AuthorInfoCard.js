import React from "react";
import LinkedIcon from "../LinkedIcon";
import { imgAddr } from "../../assets/config";
import { Paper } from "@material-ui/core";
import "../../assets/css/genericStyle.css";

export default function AuthorInfoCard(props) {
  if (props) {
    const authorImgSrc = `${imgAddr}/authorProfile/${props.image}`;
    return (
      <Paper style={props.wrapperSty}>
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
      </Paper>
    );
  } else return <></>;
}
