/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import LinkedIcon from "../LinkedIcon";
import { imgAddr } from "../../assets/config";
import "../../assets/css/genericStyle.css";

const AuthorInfoCard = (props) =>
  props ? (
    <div style={props.wrapperSty}>
      <img
        src={`${imgAddr}/authorProfile/${props.image}`}
        style={props.imageSty}
        alt={props.name}
      ></img>
      <p style={props.nameSty}>{props.name}</p>
      <div
        style={props.contactSty.div}
        css={css`
          display: flex;
          flex-wrap: nowrap;
          overflow:auto;
          justify-content:space-between;
          .LinkedIcon {
            flex: 0 0 auto;
          }
        `}
      >
        {props.contact.length <= 2 ? (
          <div
            style={{ height: "0px", width: "0px", visibility: "hidden" }}
          ></div>
        ) : (
          <></>
        )}
        {props.contact.map((contact, index) => (
          <LinkedIcon
            type={contact[0]}
            to={contact[1]}
            key={index}
          ></LinkedIcon>
        ))}
        {props.contact.length <= 2 ? (
          <div
            style={{ height: "0px", width: "0px", visibility: "hidden" }}
          ></div>
        ) : (
          <></>
        )}
      </div>
    </div>
  ) : (
    <></>
  );

export default AuthorInfoCard;
