import React from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom"
import ArtworkInfoPage from "./components/ArtworkInfoPage";
import NavBar from "./components/NavBar";
import ThumbDiv from "./components/ThumbDiv";

function App() {
  return (
    <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
              <Route path='/' element={ThumbDiv}></Route>
               <Route path='/:pri' element={ArtworkInfoPage}></Route>
            </Routes>
    </BrowserRouter>
  );
  }

export default App