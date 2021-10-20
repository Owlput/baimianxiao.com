import React from "react";
import { PermitCard } from "../cards/PermitCard";
import useDataFetch from "../../hooks/useDataFetch";
import { CircularProgress } from "@material-ui/core";

export default function AuthorPage() {
  const target = {
    type: "getPermitData",
    payload: {},
  };

  const permData = useDataFetch(target);

  if (permData) {
    return (
      <div id="pageWrap">
        <CSSInjector />
        {permData.map((permit, index) => (
          <PermitCard {...permit} key={index}></PermitCard>
        ))}
      </div>
    );
  } else {
    return <CircularProgress />;
  }
}
const CSSInjector = () =><style>
  {`
    #pageWrap{
      background-color: rgb(250,250,250);
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height:1200px;
    }
  `}
</style>
