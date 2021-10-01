import React from "react";
import GlobalWrapper from "./components/GlobalWrapper";

function App() {
  return (
          <div style={pageStyle}>
            <GlobalWrapper></GlobalWrapper>
          </div>
  );
}
const pageStyle ={
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
}

export default App