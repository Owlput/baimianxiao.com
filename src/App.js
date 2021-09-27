import React from "react";
import NavBar from "./components/NavBar";
import ThumbDiv from "./components/ThumbDiv";

function App() {
  return (
          <div style={pageStyle}>
            <NavBar></NavBar>
            <ThumbDiv></ThumbDiv>
          </div>
  );
  }
const pageStyle ={
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
}

export default App