import { Component } from "react";
import { Container, Form, FormGroup, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./LoginPage.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  onLoginSubmitted(event) {
    event.preventDefault();
    console.log(this.state);
    //POST request here
    this.props.onLogin(this.state);
    this.props.history.push("/");
  }

  render() {
    const { email, password } = this.state;

    return (
      <Container className="col-4 main">
        <Form onSubmit={(event) => this.onLoginSubmitted(event)}>
          <FormGroup>
            <Form.Label>Email Address</Form.Label>
            <input
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
              className="form-control"
              type="email"
              required
            />
          </FormGroup>

          <FormGroup>
            <Form.Label>Password</Form.Label>
            <input
              value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
              className="form-control"
              type="password"
              required
            />
          </FormGroup>

          <Button variant="outline-secondary" block type="submit">
            Login
          </Button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(LoginPage);