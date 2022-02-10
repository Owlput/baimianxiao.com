import React from "react";
import NavBar from "./components/NavBar";
import ThumbPage from "./components/pages/ThumbPage";
import { AboutPage } from "./components/pages/AboutPage";
import ArtworkInfoPage from "./components/pages/ArtworkInfoPage";
import AuthorPage from "./components/pages/AuthorPage";
import Footer from "./components/Footer";
import PermitPage from "./components/pages/PermitPage";
import DatagenPage from "./components/pages/DatagenPage";
import BottomNav from "./components/BottomNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={pageStyle}>
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/artwork/:uri" element={<ArtworkInfoPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/author" element={<AuthorPage />} />
          <Route path="/permit/:uri" element={<PermitPage />} />
          <Route path="/datagen" element={<DatagenPage />} />
          <Route path="/" element={<ThumbPage />} />
        </Routes>
      </BrowserRouter>
      <BottomNav />
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
