import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import PermitPage from "../pages/PermitPage";

export function artworkInfoPageSwitch() {
  let match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:uri`}>
        <PermitPage></PermitPage>
      </Route>
      <Route path={match.path}>
        <h1>Not Found</h1>
      </Route>
    </Switch>
  );
}
