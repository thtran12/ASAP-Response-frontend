import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import LandingPage from "./components/landing-page/LandingPage";
import MapPage from "./components/map-page/MapPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact render={() => <LandingPage />}></Route>
          </Switch>
          <Switch>
            <Route path="/map" exact render={() => <MapPage />}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
