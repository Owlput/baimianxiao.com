import ImageDiv from "./components/ImageDiv";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div style={flexWarpper}>
      <NavBar></NavBar>
      <ImageDiv page={2}  ></ImageDiv>
      </div>
    </div>
  );
}
const flexWarpper = {
  display:'flex',
  flexDirection:'column',
  alignContent: 'center'
}

export default App