import React from 'react';
import './MapPage.css';
import Dashboard from '../map-page/Dashboard';
import ReactMapGL, { Marker } from 'react-map-gl';
import sampleData from '../../datasets/sampleData.json';

const MapPage = ({ viewport, setViewport }) => {
	return (
		<div className='map-page-container'>
			<Dashboard></Dashboard>
			<div className='map-container'>
				<ReactMapGL
					{...viewport}
					mapStyle='mapbox://styles/sirafiahsa/cknlf75oo0ig617l8j28d28xj'
					mapboxApiAccessToken="pk.eyJ1Ijoic2lyYWZpYWhzYSIsImEiOiJja25sY3VoazkwZmcyMm5wZWlyeWkyeGpmIn0.PlbqOdRPcKco2Om04CMrRg"
					onViewportChange={(viewport) => {
						setViewport(viewport);
					}}>
					{sampleData.users.map((user) => (
						<Marker
							key={user.ID}
							latitude={user.latitude}
							longitude={user.longitude}>
							<button className='person-marker'>a</button>
						</Marker>
					))}
				</ReactMapGL>
			</div>
		</div>
	);
};

export default MapPage;
