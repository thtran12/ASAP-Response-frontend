import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import LandingPage from "./components/landing-page/LandingPage";
import MapPage from "./components/map-page/MapPage";
import LoginPage from "./components/login/LoginPage";
import sampleData from "./datasets/sampleData.json";
import TestPage from "./components/TestPage";


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      user: null,
      viewport: {
        latitude: 32.712533,
        longitude: -117.15726,
        width: "100vw",
        height: "100vh",
        zoom: 10,
      },
    };
    this.Login = this.Login.bind(this);
  }

  async componentDidMount(){
    const url = "https://asap-response-api.herokuapp.com/users/all";
    try{
      const response = await fetch(url,{"method": "GET",});
      const users = await response.json();
      this.setState({ users });
    }catch(err){
      console.log(err);
    }
  }

  setViewPort(viewport) {
    this.setState({ viewport });
  }

  Login(user){
    console.log(user);
    this.setState({ user });
  }

  render() {
    const { viewport } = this.state.viewport;

    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/users" exact render={() => <TestPage users={this.state.users}/>}></Route>
          </Switch>
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
            <Route path="/login" exact render={() => <LoginPage onLogin={this.Login}/>}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
