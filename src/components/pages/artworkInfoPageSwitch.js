import React from "react";
import {Switch,Route,useRouteMatch} from "react-router-dom"
import ArtworkInfoPage from "./ArtworkInfoPage";

export function artworkInfoPageSwitch() {
    let match = useRouteMatch()
    return (
        <Switch>
            <Route path={`${match.path}/:artworkPRI`}>
                <ArtworkInfoPage></ArtworkInfoPage>
            </Route>
            <Route path={match.path}>
                <h1>Not Found</h1>
            </Route>
        </Switch>
    )
}