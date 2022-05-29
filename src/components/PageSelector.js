/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { Pagination, Paper } from "@mui/material";

export default function PageSelector(props) {
  return (
    <>
      <Paper>
        <Pagination
          css={css`
            margin: 1rem;
            ul li button {
              font-size: 1.5rem;
              border-radius: 50%;
            }
          `}
          size="large"
          count={props.maxPage}
          color="primary"
          onChange={(ev, page) => props.parentChangePage(page)}
        />
      </Paper>
    </>
  );
}