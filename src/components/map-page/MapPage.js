import React from 'react';
import './MapPage.css';
import Dashboard from '../map-page/Dashboard';
import ReactMapGL, { Marker } from 'react-map-gl';

const MapPage = ({ viewport, setViewport }) => {
	return (
		<div className='map-page-container'>
			<Dashboard></Dashboard>
			<div className='map-container'>
				<ReactMapGL
					{...viewport}
					mapStyle='mapbox://styles/sirafiahsa/cknlf75oo0ig617l8j28d28xj'
					mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
					onViewportChange={(viewport) => {
						setViewport(viewport);
					}}></ReactMapGL>
			</div>
		</div>
	);
};

export default MapPage;
