import ImageTabs from "./components/ImageTabs";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ImageTabs page={2}  ></ImageTabs>
    </div>
  );
}
//page function not yet implmented, routing required
export default App