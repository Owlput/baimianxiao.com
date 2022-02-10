/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { ButtonBase, Chip } from "@material-ui/core";

export default function TagCollection(props) {
  if (props.tags) {
    return (
      <div style={props.styling.wrapper}>
        <p style={props.styling.text}>标签：</p>
        {props.tags.map((tag, index) => (
          <Taggie tag={tag} key={index}></Taggie>
        ))}
      </div>
    );
  } else return <></>;
}

function Taggie(props) {
  return (
    <ButtonBase
      css={css`
        border-radius: 1rem;
        &:hover {
          background-color: rgb(195, 216, 230);
        }
        &:active {
          background-color: rgb(170, 204, 226);
        }
      `}
    >
      <Chip label={`${props.tag[0]}`}></Chip>
    </ButtonBase>
  );
}