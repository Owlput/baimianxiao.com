import React from "react";
import NavBar from "./components/NavBar";
import ThumbPage from "./components/pages/ThumbPage";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { AboutPage } from "./components/pages/AboutPage";
import ArtworkInfoPage from "./components/pages/ArtworkInfoPage";
import AuthorPage from "./components/pages/AuthorPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={pageStyle}>
      <NavBar></NavBar>
      <BrowserRouter>
        <Switch>
          <Route path="/artwork/:uri">
            <ArtworkInfoPage></ArtworkInfoPage>{" "}
          </Route>
          <Route path="/about">
            <AboutPage></AboutPage>
          </Route>
          <Route path="/author">
            <AuthorPage></AuthorPage>
          </Route>
          <Route path="/">
            <ThumbPage></ThumbPage>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}
const pageStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
export default App;
