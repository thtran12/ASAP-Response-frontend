import { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-6 center">
          <h1>Be Alert.</h1>
          <h1>Be Aware.</h1>
          <h1>Be There.</h1>
          <Link
            exact="true"
            to="/login"
            className="btn btn-outline-secondary mt-3 mx-1"
          >
            Login
          </Link>
          <Link
            exact="true"
            to="/map"
            className="btn btn-outline-secondary mt-3 mx-1"
          >
            Map
          </Link>
        </div>
        <div className="col-6"></div>
      </div>
    );
  }
}

export default LandingPage;
