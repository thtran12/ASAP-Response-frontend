import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/landing-page/LandingPage';
import MapPage from './components/map-page/MapPage';
import LoginPage from './components/login/LoginPage';
import Navbar from './components/alternative-navbar/Navbar';

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: null,
		};
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin(user) {
		console.log(user);
		this.setState({ user });
	}

	render() {
		return (
			<Router>
				<div className='App'>
					<Navbar />
					<Switch>
						<Route path='/' exact render={() => <LandingPage />}></Route>
					</Switch>
					<Switch>
						<Route path='/map' exact render={() => <MapPage />}></Route>
					</Switch>
					<Switch>
						<Route
							path='/login'
							exact
							render={() => <LoginPage onLogin={this.handleLogin} />}></Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
