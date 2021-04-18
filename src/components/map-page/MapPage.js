import React, { useState } from 'react';
import './MapPage.css';
import Dashboard from '../map-page/Dashboard';
import ReactMapGL, {
	Marker,
	NavigationControl,
	GeolocateControl,
	FullscreenControl,
} from 'react-map-gl';
import sampleData from '../../datasets/sampleData.json';

const fullscreenControlStyle = {
	top: 60,
	right: 20,
};
const navigationStyle = {
	top: 100,
	right: 20,
};
const geolocateStyle = {
	top: 20,
	right: 20,
};
const positionOptions = { enableHighAccuracy: true };

const MapPage = () => {
	const [viewport, setViewport] = useState({
		latitude: 32.712533,
		longitude: -117.15726,
		zoom: 10,
		width: '100vw',
		height: '100vh',
	});

	return (
		<div className='map-page-container'>
			<Dashboard />
			<div className='map-container'>
				<ReactMapGL
					{...viewport}
					mapStyle='mapbox://styles/sirafiahsa/cknleef2d2sr317ru3btk0wpr'
					mapboxApiAccessToken='pk.eyJ1Ijoic2lyYWZpYWhzYSIsImEiOiJja25sY3VoazkwZmcyMm5wZWlyeWkyeGpmIn0.PlbqOdRPcKco2Om04CMrRg'
					onViewportChange={(viewport) => {
						setViewport(viewport);
					}}>
					{sampleData.users.map((user) => (
						<Marker
							key={user.ID}
							latitude={user.latitude}
							longitude={user.longitude}>
							<button className='person-marker'>*</button>
						</Marker>
					))}
					<GeolocateControl
						style={geolocateStyle}
						positionOptions={positionOptions}
						trackUserLocation
					/>
					<NavigationControl showZoom style={navigationStyle} />
					<FullscreenControl style={fullscreenControlStyle} />
				</ReactMapGL>
			</div>
		</div>
	);
};

export default MapPage;
