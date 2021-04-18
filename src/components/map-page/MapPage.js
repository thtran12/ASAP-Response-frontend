import React, { useState, useCallback } from 'react';
import './MapPage.css';
import Dashboard from '../map-page/Dashboard';
import ReactMapGL, {
	Marker,
	NavigationControl,
	GeolocateControl,
	FullscreenControl,
	Popup,
} from 'react-map-gl';
import { FaUserAlt } from 'react-icons/fa';
import sampleData from '../../datasets/sampleData.json';

const MAP_STYLE_2 = 'mapbox://styles/sirafiahsa/cknlf75oo0ig617l8j28d28xj';
const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
C20.1,15.8,20.2,15.8,20.2,15.7z`;
const pinStyle = {
	fill: '#d00',
	stroke: 'none',
};
const pinSize = 30;
const riskLevels = ['#27FA3C', '#ECF038', '#FF7B01', '#EF1B1B', '#AC07AF'];
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

	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [marker, setMarker] = useState({
		longitude: viewport.longitude,
		latitude: viewport.latitude,
	});

	const convertToRadians = (val) => {
		return val / (180 / Math.PI);
	};

	const distanceInMiles = (lat1, long1, lat2, long2) => {
		const lat1Rad = convertToRadians(lat1);
		const long1Rad = convertToRadians(long1);
		const lat2Rad = convertToRadians(lat2);
		const long2Rad = convertToRadians(long2);
		const distance =
			3963 *
			Math.acos(
				Math.sin(lat1Rad) * Math.sin(lat2Rad) +
					Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.cos(long2Rad - long1Rad)
			);
		return distance;
	};

	const onMarkerDragEnd = useCallback((e) => {
		setMarker({
			longitude: e.lngLat[0],
			latitude: e.lngLat[1],
		});
	}, []);

	const postRequest = (jsonReport) => {
		console.log('post', jsonReport);
		const url = 'https://asap-response-api.herokuapp.com/reports/new';
		fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(jsonReport),
		})
			.then((response) => {
				console.log(response);
			})
			.catch((err) => console.log(err));
	};

	const onSubmit = (jsonReport) => {
		postRequest(jsonReport);
	};

	const onDisplay = (jsonReport) => {
		var long = parseFloat(jsonReport.longitude);
		var lat = parseFloat(jsonReport.latitude);
		var rad = parseFloat(jsonReport.radius);
		console.log('In display function', lat, long, rad);
		setUsers(
			sampleData.users.filter(
				(user) =>
					distanceInMiles(user.latitude, user.longitude, lat, long) < rad
			)
		);
	};

	return (
		<div className='map-page-container'>
			<Dashboard
				handleSubmit={onSubmit}
				handleDisplay={onDisplay}
				marker={marker}
			/>
			<div className='map-container'>
				<ReactMapGL
					{...viewport}
					mapStyle={MAP_STYLE_2}
					mapboxApiAccessToken='pk.eyJ1Ijoic2lyYWZpYWhzYSIsImEiOiJja25sY3VoazkwZmcyMm5wZWlyeWkyeGpmIn0.PlbqOdRPcKco2Om04CMrRg'
					onViewportChange={(viewport) => {
						setViewport(viewport);
					}}>
					{users.map((user) => (
						<Marker
							key={user.id}
							latitude={user.latitude}
							longitude={user.longitude}>
							<button
								className='person-marker'
								onClick={(e) => {
									e.preventDefault();
									setSelectedUser(user);
								}}>
								<FaUserAlt style={{ color: riskLevels[user.risk - 1] }} />
							</button>
						</Marker>
					))}

					{selectedUser ? (
						<Popup
							latitude={selectedUser.latitude}
							longitude={selectedUser.longitude}
							onClose={() => {
								setSelectedUser(null);
							}}>
							<div>
								<h5 style={{ fontSize: '15px' }}>{selectedUser.name}</h5>
								<p style={{ fontSize: '12px' }}>{selectedUser.home}</p>
								<p style={{ fontSize: '12px' }}>{selectedUser.phone}</p>
							</div>
						</Popup>
					) : null}

					<Marker
						longitude={marker.longitude}
						latitude={marker.latitude}
						offsetTop={-20}
						offsetLeft={-10}
						draggable
						onDragEnd={onMarkerDragEnd}>
						<svg height={pinSize} viewBox='0 0 24 24' style={pinStyle}>
							<path d={ICON} />
						</svg>
						{/* <Pin size={20} /> */}
					</Marker>

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
