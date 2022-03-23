import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Components/MainContainer";

function App() {
  return(
    <div className="App">
      <LeftMenu />
      <MainContainer />


      <div className="background"></div>
    </div>
  );
}

export default App;
