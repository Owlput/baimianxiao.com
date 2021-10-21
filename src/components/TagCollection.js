import React from "react";
import { ButtonBase,Chip } from "@material-ui/core";

export default function TagCollection(props) {
  if (props.tags) {
    return (
      <div style={props.styling.wrapper}>
        <p style={props.styling.text}>标签：</p>
        <CSSInjector />
        {props.tags.map((tag, index) => (
          <Taggie tag={tag} key={index}></Taggie>
        ))}
      </div>
    );
  } else return <></>;
}

function Taggie(props) {
  return (
    <ButtonBase id="taggieBase">
      <Chip label={`${props.tag[0]}`}>
      </Chip>
    </ButtonBase>
  );
}
function CSSInjector() {
  return (
    <style>
      {`#taggieBase {
    border-radius: 1rem;
}
#taggie:hover{
    background-color: rgb(195, 216, 230);
}
#taggie:active{
    background-color: rgb(170, 204, 226);
}
#tagName{
    margin: 0px 1.1em 0px 0px;
    font-size:1rem;
}
#tagCount{
    margin: 0px;
    color: rgb(141, 141, 141);
}`}
    </style>
  );
}
