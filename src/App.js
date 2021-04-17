import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import LandingPage from './components/landing-page/LandingPage';
import MapPage from './components/map-page/MapPage';
import sampleData from './datasets/sampleData.json';

const App = () => {
	const [viewport, setViewport] = useState({
		latitude: 32.712533,
		longitude: -117.15726,
		zoom: 10,
		width: '100vw',
		height: '100vh',
	});
	return (
		<Router>
			<div className='App'>
				<Header />
				<Switch>
					<Route path='/' exact render={() => <LandingPage />}></Route>
				</Switch>
				<Switch>
					<Route
						path='/map'
						exact
						render={() => (
							<MapPage viewport={viewport} setViewport={setViewport} />
						)}></Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
