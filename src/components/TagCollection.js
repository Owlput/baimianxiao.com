import React from "react";

export default function TagCollection(props) {
  console.log(props.styling)
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
    <button id="taggie">
      <p id="tagName">{props.tag[0]}</p>
      <p id="tagCount">{props.tag[1]}</p>
    </button>
  );
}
function CSSInjector() {
  return (
    <style>
      {`#taggie {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border:none;
    background-color: rgb(231, 231, 231);
    margin:0.2em 0.4em;
    border-radius: 1em;
}
#taggie:hover{
    background-color: rgb(195, 216, 230);
}
#taggie:active{
    background-color: rgb(170, 204, 226);
}
#tagName{
    margin: 0.1em 1.1em 0.1em 0.1em;
    font-size: 1.1rem;
}
#tagCount{
    font-size: 1.1rem;
    margin: 0px;
    color: rgb(141, 141, 141);
}`}
    </style>
  );
}
