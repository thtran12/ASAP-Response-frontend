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

  const convertToRadians = val => {return val/(180/Math.PI)};
  const distanceInMiles = (lat1,long1,lat2,long2) => {
    const lat1Rad = convertToRadians(lat1);
    const long1Rad = convertToRadians(long1);
    const lat2Rad = convertToRadians(lat2);
    const long2Rad = this.convertToRadians(long2);
  
    const distance = 3963*Math.acos((Math.sin(lat1Rad)*Math.sin(lat2Rad))+(Math.cos(lat1Rad)*Math.cos(lat2Rad)*Math.cos(long2Rad-long1Rad)));
  
    return distance;
  }

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
