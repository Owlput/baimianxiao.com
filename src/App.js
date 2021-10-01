import React from "react";
import NavBar from "./components/NavBar";
import ThumbPage from "./components/pages/ThumbPage"
import { Route , BrowserRouter, Switch} from "react-router-dom"
import { AboutPage } from "./components/pages/AboutPage";

function App() {
  return (
          <div style={pageStyle}>
            <NavBar></NavBar>
            <BrowserRouter>
            <Switch>
            <Route path="/" exact><ThumbPage></ThumbPage></Route>
            <Route path="/about" exact ><AboutPage></AboutPage></Route>
            </Switch>
            </BrowserRouter>
          </div>
  );
}
const pageStyle ={
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
}

export default App