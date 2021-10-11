import React from "react";
import { PermitCard } from "../cards/PermitCard";
import useDataFetch from "../../hooks/useDataFetch";

export default function AuthorPage() {
  const target = {
    type: "getPermitData",
    payload: {},
  };

  const permData = useDataFetch(target);

  if (permData) {
    return (
      <div style={pageWrapper}>
        {permData.map((permit, index) => (
          <PermitCard {...permit} key={index}></PermitCard>
        ))}
      </div>
    );
  } else {
    return <></>;
  }
}
const pageWrapper = {
  backgroundColor: "rgb(250,250,250)",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight:"1200px"
};
