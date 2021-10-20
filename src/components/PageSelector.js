import React from "react";
import { Pagination, Paper } from "@material-ui/core";

export default function PageSelector(props) {
  return (
    <>
    <CSSInjector />
    <Paper>
    <Pagination id="pageSetter" size="large"
      count={props.maxPage}
      color="primary"
      onChange={(ev, page) => props.parentChangePage(page)}
    /></Paper>
    </>
  );
}
function CSSInjector(){
  return (
    <style>
      {
        `
        #pageSetter{
          margin:1rem;
        }
        #pageSetter ul li button {
          font-size:1.5rem;
          border-radius:50%;
        }
        `
      }
    </style>
  )
}