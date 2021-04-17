import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import LandingPage from "./components/landing-page/LandingPage";
import MapPage from "./components/map-page/MapPage";
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

  convertToRadians(val) {
    return val / (180 / Math.PI);
  }

  distanceInMiles(lat1, long1, lat2, long2) {
    const lat1Rad = this.convertToRadians(lat1);
    const long1Rad = this.convertToRadians(long1);
    const lat2Rad = this.convertToRadians(lat2);
    const long2Rad = this.convertToRadians(long2);

    const distance =
      3963 *
      Math.acos(
        Math.sin(lat1Rad) * Math.sin(lat2Rad) +
          Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.cos(long2Rad - long1Rad)
      );

    return distance;
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
        </div>
      </Router>
    );
  }
}

export default App;
