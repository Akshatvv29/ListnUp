import "./App.css";
// import { Login } from "./Components/Login";
import { LoginPage } from "./Components/LoginPage";
import { FirstPage } from "./Components/FirstPage";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Components/MainContainer";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return(
    <div className="App">
    {/* <Login />
    <LeftMenu />
    <MainContainer /> */}
    <Router>
      <Switch>
        <Route path= '/' exact component={FirstPage} />
        <Route path = '/LoginPage' exact component={LoginPage}/>
        <Route path = '/listnup'>
          <LeftMenu />
          <MainContainer />
        </Route>
      </Switch>
    </Router>

    <div className="background"></div>
  </div>


  );
}

export default App;
