import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import LandingPage from "./components/landing-page/LandingPage";
import MapPage from "./components/map-page/MapPage";
import LoginPage from "./components/login/LoginPage";
import sampleData from "./datasets/sampleData.json";


class App extends Component {
  constructor() {
    super();
    this.state = {
      viewport: {
        latitude: 32.712533,
        longitude: -117.15726,
        width: "100vw",
        height: "100vh",
        zoom: 10,
      },
    };
  }

  setViewPort(viewport) {
    this.setState({ viewport });
  }

  render() {
    const { viewport } = this.state.viewport;

    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact render={() => <LandingPage />}></Route>
          </Switch>
          <Switch>
            <Route
              path="/map"
              exact
              render={() => (
                <MapPage viewport={viewport} setViewport={this.setViewport} />
              )}
            ></Route>
          </Switch>
          <Switch>
            <Route path="/login" exact render={() => <LoginPage />}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
