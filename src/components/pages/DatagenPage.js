/** @jsxImportSource @emotion/react */
import { Button, ButtonGroup, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";

export default function DatagenPage() {
  const [workId, setWorkId] = useState("");
  const [workTitle, setWorkTitle] = useState("");
  const [workTag, setWorkTag] = useState([""]);
  const [workAuthor, setWorkAuthor] = useState(["", ""]);
  const [workSource, setWorkSource] = useState(defaultSource);
  const [workLicense, setWorkLicense] = useState(defaultLicense);

  let cache = [];
  console.log(workTag);
  const handleWorkId = (ev) => {
    setWorkId(ev.target.value);
  };
  const handleWorkTitle = (ev) => {
    setWorkTitle(ev.target.value);
  };
  const handleWorkAuthorName = (ev) => {
    cache = workAuthor;
    cache[0] = ev.target.value;
    setWorkAuthor(cache);
    cache = [];
  };
  const handleWorkAuthorId = (ev) => {
    cache = workAuthor;
    cache[1] = ev.target.value;
    setWorkAuthor();
    cache = [];
  };
  const handleNewTag = () => {
    cache = workTag;
    cache.push("");
    console.log(cache);
    setWorkTag(cache);
    cache = [];
  };
  function handleRemoveTag(target) {
    cache = workTag;
    cache.splice(target, target + 1);
    setWorkTag(cache);
    cache = [];
  }
  function handleTag(target, value) {
    cache = workTag;
    cache[target] = value;
    setWorkTag(cache);
    cache = [];
  }
  const handleNewFilename = () => {
    cache = workSource.this;
    cache.push("");
    setWorkSource({
      ...workSource,
      this: cache,
    });
    cache = [];
  };
  function handleRemoveFilename(target) {
    cache = workSource.this;
    cache.splice(target, target + 1);
    setWorkSource({
      ...workSource,
      this: cache,
    });
    cache = [];
  }
  function handleFilename(target, value) {
    cache = workSource.this;
    cache[target] = value;
    setWorkSource({
      ...workSource,
      this: cache,
    });
    cache = [];
  }
  function handleWorkSourceType(target, value) {
    cache = workSource.other;
    cache[target][0] = value;
    setWorkSource({
      ...workSource,
      other: cache,
    });
    cache = [];
  }
  const handleNewOtherSource = () => {
    cache = workSource.other;
    cache.push(["", ""]);
    setWorkSource({
      ...workSource,
      other: cache,
    });
    cache = [];
  };
  function handleRemoveOtherSource(target) {
    cache = workSource.other;
    cache.splice(target, target + 1);
    setWorkSource({
      ...workSource,
      other: cache,
    });
    cache = [];
  }
  const handleWorkSourceUrl = (target, value) => {
    cache = workSource.other;
    cache[target][1] = value;
    setWorkSource({
      ...workSource,
      other: cache,
    });
    cache = [];
  };

  const handleWorkLicenseSource = (ev) => {
    setWorkLicense({
      ...workLicense,
      source: ev.target.value,
    });
  };
  const handleWorkLicenseType = (ev) => {
    setWorkLicense({
      ...workLicense,
      type: ev.target.value,
    });
  };
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <Paper
        css={css`
          margin: 0px 10%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-contents: space-around;
        `}
      >
        <div>
          <h2>Basic Info</h2>
          <div
            css={css`
              margin: 0.5rem 0px;
            `}
          >
            <TextField label="Work ID" value={workId} onChange={handleWorkId} />
            <TextField
              label="Work Title"
              value={workTitle}
              onChange={handleWorkTitle}
            />
          </div>
          <div>
            <TextField
              label="Author Name"
              value={workAuthor.authorName}
              onChange={handleWorkAuthorName}
            />
            <TextField
              label="Author ID"
              value={workAuthor.authorName}
              onChange={handleWorkAuthorId}
            />
          </div>
          <div>
            <h3>Tags</h3>
            <MultiInput
              content={workTag}
              new={handleNewTag}
              remove={handleRemoveTag}
              change1={handleTag}
              remark={["Tag"]}
              single
            />
          </div>
        </div>
        <div className="datagen-input-div">
          <h2>Work Source</h2>
          <TextField
            css={css`
              width: 50%;
            `}
            label="Origin"
            value={workId}
            onChange={handleWorkId}
          />
          <div>
            <h3>Filename</h3>
            <MultiInput
              content={workSource.this}
              new={handleNewFilename}
              remove={handleRemoveFilename}
              change1={handleFilename}
              remark={["Filename"]}
              single
            />
          </div>
          <div>
            <h3>Other</h3>
            <MultiInput
              content={workSource.other}
              new={handleNewOtherSource}
              remove={handleRemoveOtherSource}
              change1={handleWorkSourceType}
              change2={handleWorkSourceUrl}
              remark={["Source", "Type", "URL"]}
              dual
            />
          </div>
        </div>
        <div>
          <TextField
            id="outlined-name"
            label="License Type"
            value={workLicense.type}
            onChange={handleWorkLicenseType}
          />
          <TextField
            id="outlined-name"
            label="License URL"
            value={workLicense.source}
            onChange={handleWorkLicenseSource}
          />
        </div>
      </Paper>
      <Paper
        id="output"
        css={css`
          margin: 1rem 10% 1rem 10%;
        `}
      >
        <div>{`
        {
          "uri":"${workId}",
          title:"${workTitle}",
          author:${JSON.stringify(workAuthor)},
          tags:${JSON.stringify(workTag)},
          source:{
            this:${JSON.stringify(workSource.this)},
            from:${JSON.stringify(workSource.from)},
            other:${JSON.stringify(workSource.other)},
          }
          license:${JSON.stringify(workLicense)},
        }
        `}</div>
      </Paper>
    </div>
  );
}

function MultiInput(props) {
  if (props.dual) {
    if (props.content.length === 0)
      return (
        <Button variant="outlined" onClick={props.new}>
          New
        </Button>
      );
    else if (props.content.length > 0)
      return (
        <>
          {props.content.map((item, index) => (
            <div
              key={`sourcebox${index}`}
              css={css`
                margin: 0.2rem 0px;
              `}
            >
              <TextField
                key={`srctype${index}`}
                label={`${props.remark[0]} ${index + 1} ${props.remark[1]}`}
                value={item[0]}
                onChange={(ev) => props.change1(index, ev.target.value)}
              />
              <TextField
                key={`srcurl${index}`}
                label={`${props.remark[0]} ${index + 1} ${props.remark[2]}`}
                value={item[1]}
                onChange={(ev) => props.change2(index, ev.target.value)}
              />
              <MultiInputBtn
                key={`srcbtn${index}`}
                loc={index}
                new={props.new}
                remove={props.remove}
                max={props.content ? props.content.length : 1}
              />
            </div>
          ))}
        </>
      );
  } else if (props.single)
    if (props.content.length === 0)
      return (
        <Button variant="outlined" onClick={props.new}>
          New
        </Button>
      );
    else
      return (
        <>
          {props.content.map((item, index) => (
            <div
              key={`field-cont-${index}`}
              css={css`
                margin: 0.2rem 0px;
                width: 100%;
              `}
            >
              <TextField
                key={`field1-${index}`}
                label={`${props.remark[0]} ${index + 1}`}
                value={item}
                onChange={(ev) => props.change1(index, ev.target.value)}
              />
              <MultiInputBtn
                key={`btn${index}`}
                loc={index}
                new={props.new}
                remove={props.remove}
                max={props.content ? props.content.length : 1}
              />
            </div>
          ))}
        </>
      );
  else return <></>;
}
function MultiInputBtn(props) {
  if (props.loc === props.max - 1)
    return (
      <ButtonGroup
        css={css`
          height: 100%;
          float: right;
        `}
      >
        <Button variant="outlined" onClick={props.new}>
          New
        </Button>
        <Button variant="outlined" onClick={() => props.remove(props.loc)}>
          Remove
        </Button>
      </ButtonGroup>
    );
  else
    return (
      <Button
        css={css`
          float: right;
        `}
        variant="outlined"
        onClick={() => props.remove(props.loc)}
      >
        Remove
      </Button>
    );
}

const defaultSource = {
  this: [""],
  from: "",
  other: [["", ""]],
};
const defaultLicense = {
  type: "",
  source: "",
};
