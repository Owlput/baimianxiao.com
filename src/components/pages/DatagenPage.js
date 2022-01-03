/** @jsxImportSource @emotion/react */
import { Button, ButtonGroup, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";

export default function DatagenPage() {
  const [location, setLocation] = useState("work");
  function handleLocation(loc) {
    if (loc === "work" || loc === "author" || loc === "thumb") setLocation(loc);
  }
  switch (location) {
    case "work":
      return <WorkDatagen changeLoc={handleLocation} />;
    case "author":
      return <AuthorDatagen changeLoc={handleLocation} />;
    case "thumb":
      return <ThumbDatagen changeLoc={handleLocation} />;
    default:
      return (
        <h1>
          ERR:Unrecognized location: {location}. This is a bug, please report.
        </h1>
      );
  }
}

function WorkDatagen(props) {
  const [workId, setWorkId] = useState("");
  const [workTitle, setWorkTitle] = useState("");
  const [workAuthor, setWorkAuthor] = useState(["", ""]);
  const [workSource, setWorkSource] = useState(defaultSource);
  const [workLicense, setWorkLicense] = useState(defaultLicense);
  const [artTag, setArtTag] = useState([]);

  let cache = [];
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
    cache = [...workAuthor];
    cache[1] = ev.target.value;
    setWorkAuthor(cache);
    cache = [];
  };
  const handleNewArtTag = () => {
    cache = [...artTag];
    cache.push("");
    setArtTag(cache);
    cache = [];
  };
  function handleRemoveArtTag(target) {
    cache = [...artTag];
    cache.splice(target, target + 1);
    setArtTag(cache);
    cache = [];
  }
  function handleArtTag(target, value) {
    cache = [...artTag];
    cache[target] = value;
    setArtTag(cache);
    cache = [];
  }
  const handleSource = (ev) => {
    setWorkSource({
      ...workSource,
      from: ev.target.value,
    });
  };
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
  const handleOtherSourceUrl = (target, value) => {
    cache = workSource.other;
    cache[target][1] = value;
    setWorkSource({
      ...workSource,
      other: cache,
    });
    cache = [];
  };
  function handleOtherSourceType(target, value) {
    cache = workSource.other;
    cache[target][0] = value;
    setWorkSource({
      ...workSource,
      other: cache,
    });
    cache = [];
  }
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
        <LocationSwitch changeLoc={props.changeLoc} />
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
              value={workAuthor[0]}
              onChange={handleWorkAuthorName}
            />
            <TextField
              label="Author ID"
              value={workAuthor[1]}
              onChange={handleWorkAuthorId}
            />
          </div>
          <div>
            <h3>Tags</h3>
            <MultiInput
              content={artTag}
              new={handleNewArtTag}
              remove={handleRemoveArtTag}
              change1={handleArtTag}
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
            value={workSource.from}
            onChange={handleSource}
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
              change1={handleOtherSourceType}
              change2={handleOtherSourceUrl}
              remark={["Source", "Type", "URL"]}
              dual
            />
          </div>
        </div>
        <div>
          <TextField
            label="License Type"
            value={workLicense.type}
            onChange={handleWorkLicenseType}
          />
          <TextField
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
        <h3>Work Data</h3>
        <div>{`
        {
          "uri":"${workId}",
          title:"${workTitle}",
          author:${JSON.stringify(workAuthor)},
          tags:${JSON.stringify("")},
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
function AuthorDatagen(props) {
  const [authorInfo, setAuthorInfo] = useState(["", "", "", ""]); //["name","imageLocation","autorId"]
  const [authorContact, setAuthorContact] = useState([]);
  const [recentWork, setRecentWork] = useState([]);
  let cache = [];
  function handleAuthorInfo(target, value) {
    cache = [...authorInfo];
    cache[target] = value;
    setAuthorInfo(cache);
    cache = [];
  }
  const handleNewContact = () => {
    cache = [...authorContact];
    cache.push(["", ""]); //["type","url"]
    setAuthorContact(cache);
    cache = [];
  };
  function handleRemoveContact(target) {
    cache = [...authorContact];
    cache.splice(target, target + 1);
    setAuthorContact(cache);
    cache = [];
  }
  function handleContactType(target, value) {
    cache = [...authorContact];
    cache[target][0] = value;
    setAuthorContact(cache);
    cache = [];
  }
  function handleContactURL(target, value) {
    cache = [...authorContact];
    cache[target][1] = value;
    setAuthorContact(cache);
    cache = [];
  }
  const handleNewRecentWork = () => {
    cache = [...recentWork];
    cache.push("");
    setRecentWork(cache);
    cache = [];
  };
  function handleRemoveRecentWork(target) {
    cache = [...recentWork];
    cache.splice(target, target + 1);
    setRecentWork(cache);
    cache = [];
  }
  function handleRecentWork(target, value) {
    cache = [...recentWork];
    cache[target] = value;
    setRecentWork(cache);
    cache = [];
  }
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
        <LocationSwitch changeLoc={props.changeLoc} />
        <div>
          <h2>Basic Info</h2>
          <TextField
            label="Author Name"
            value={authorInfo[0]}
            onChange={(ev) => handleAuthorInfo(0, ev.target.value)}
          />
          <TextField
            label="Profile Image Filename"
            value={authorInfo[1]}
            onChange={(ev) => handleAuthorInfo(1, ev.target.value)}
          />
          <TextField
            label="Author ID"
            value={authorInfo[2]}
            onChange={(ev) => handleAuthorInfo(2, ev.target.value)}
          />
        </div>
        <div>
          <h2>Contacts</h2>
          <MultiInput
            content={authorContact}
            new={handleNewContact}
            remove={handleRemoveContact}
            change1={handleContactType}
            change2={handleContactURL}
            remark={["Contact", "Type", "URL"]}
            dual
          />
        </div>
        <div>
          <h2>Recent Works</h2>
          <MultiInput
            content={recentWork}
            new={handleNewRecentWork}
            remove={handleRemoveRecentWork}
            change1={handleRecentWork}
            remark={["Recent Work"]}
            single
          />
        </div>
      </Paper>
      <Paper
        css={css`
          margin: 1rem 10%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-contents: space-around;
        `}
      >
        <div>{`
        {
          "name":"${authorInfo[0]}",
          "image":"${authorInfo[1]}",
          "authorId":"${authorInfo[2]}",
          "contact":${JSON.stringify(authorContact)},
          "recentWorks":${JSON.stringify(recentWork)},
        }
        `}</div>
      </Paper>
    </div>
  );
}
function ThumbDatagen(props) {
  const [workId, setWorkId] = useState("");
  const [workTitle, setWorkTitle] = useState("");
  const [workAuthor, setWorkAuthor] = useState(["", "", ""]); //["name","Author ID","Image Location"]
  const [postDate, setPostDate] = useState("");
  let cache = [];

  const handleWorkId = (ev) => {
    setWorkId(ev.target.value);
  };
  const handleWorkTitle = (ev) => {
    setWorkTitle(ev.target.value);
  };

  const handlePostDate = (ev) => {
    setPostDate(ev.target.value);
  };
  const handleAuthorName = (ev) => {
    cache = workAuthor;
    cache[0] = ev.target.value;
    setWorkAuthor(cache);
    cache = [];
  };
  const handleAuthorId = (ev) => {
    cache = [...workAuthor];
    cache[1] = ev.target.value;
    setWorkAuthor(cache);
    cache = [];
  };
  const handleAuthorImage = (ev) => {
    cache = [...workAuthor];
    cache[2] = ev.target.value;
    setWorkAuthor(cache);
    cache = [];
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
        <LocationSwitch changeLoc={props.changeLoc} />
        <div>
          <h2>Basic Info</h2>
          <TextField label="Work URI" value={workId} onChange={handleWorkId} />
          <TextField
            label="Work Title"
            value={workTitle}
            onChange={handleWorkTitle}
          />
          <TextField
            label="Work Post Date"
            value={postDate}
            onChange={handlePostDate}
          />
        </div>
        <div>
          <h2>Author Data</h2>
          <TextField
            label="Author Name"
            value={workAuthor[0]}
            onChange={handleAuthorName}
          />
          <TextField
            label="Author ID"
            value={workAuthor[1]}
            onChange={handleAuthorId}
          />
          <TextField
            label="Profile Image Filename"
            value={workAuthor[2]}
            onChange={handleAuthorImage}
          />
        </div>
      </Paper>
      <Paper
        css={css`
          margin: 1rem 10%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-contents: space-around;
        `}
      >
        <div>{`
        {
          "uri":"${workId}",
          "title":"${workTitle}",
          "date":"${postDate}",
          "author":{
            "name":"${workAuthor[0]}",
            "aId":"${workAuthor[1]}",
            "image":"${workAuthor[2]}"
          },
        }
        `}</div>
      </Paper>
    </div>
  );
}
function LocationSwitch(props) {
  return (
    <div
      css={css`
        align-self: center;
      `}
    >
      <ButtonGroup>
        <Button onClick={() => props.changeLoc("work")}>Work Data</Button>
        <Button onClick={() => props.changeLoc("author")}>Author Data</Button>
        <Button onClick={() => props.changeLoc("thumb")}>Thumb Data</Button>
      </ButtonGroup>
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
                label={`${props.remark[0]} ${index + 1} ${props.remark?.[1]}`}
                value={item[0]}
                onChange={(ev) => props.change1(index, ev.target.value)}
              />
              <TextField
                key={`srcurl${index}`}
                label={`${props.remark[0]} ${index + 1} ${props.remark?.[2]}`}
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
