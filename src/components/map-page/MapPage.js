import React, { useEffect, useState } from 'react';
import './MapPage.css';
import Dashboard from '../map-page/Dashboard';
import ReactMapGL, {
<<<<<<< HEAD
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  Popup,
} from "react-map-gl";
import { FaUserAlt } from "react-icons/fa";
import sampleData from "../../datasets/sampleData.json";
import axios from 'axios';
=======
	Marker,
	NavigationControl,
	GeolocateControl,
	FullscreenControl,
	Popup,
} from 'react-map-gl';
import { FaUserAlt } from 'react-icons/fa';
import sampleData from '../../datasets/sampleData.json';
>>>>>>> ea61f1179fad20b6934bccd3a686e5b3f4f8e108

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

	const getRequest = () => {
		const url = 'https://asap-response-api.herokuapp.com/users/all';
		fetch(url, { method: 'GET' })
			.then((res) => res.json())
			.then((response) => {
				setUsers(response);
			})
			.catch((err) => console.log(err));
	};

<<<<<<< HEAD
  const postRequest = (jsonReport) => {
	const url = 'https://asap-response-api.herokuapp.com/reports/new';
// 	fetch(url, {
// 		method: 'POST',
// 		body: JSON.stringify(jsonReport),
// 	})
// 		.then((res) => res.json())
// 		.then((response) => {
// 			console.log(response);
// 		})
// 		.catch((err) => console.log(err));
//   }
	const data = {
		id: jsonReport.id, 
		title: jsonReport.title,
		description: jsonReport.description,
		latitude: jsonReport.latitude.toString(),
		longitude: jsonReport.longitude.toString(),
		radius: jsonReport.radius.toString()
	}

	axios.post(url, data).then(response => console.log(response))
}

	const onSubmit = (jsonReport) => {
		console.log('in map page submit function');
		console.log(jsonReport);
=======
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
>>>>>>> ea61f1179fad20b6934bccd3a686e5b3f4f8e108
		postRequest(jsonReport);
	};

	const onDisplay = () => {
		setUsers(sampleData.users); // Sample data
		// getRequest(); Real data
	};
	

	return (
		<div className='map-page-container'>
			<Dashboard handleSubmit={onSubmit} handleDisplay={onDisplay} />
			<div className='map-container'>
				<ReactMapGL
					{...viewport}
					mapStyle='mapbox://styles/sirafiahsa/cknlf75oo0ig617l8j28d28xj'
					mapboxApiAccessToken='pk.eyJ1Ijoic2lyYWZpYWhzYSIsImEiOiJja25sY3VoazkwZmcyMm5wZWlyeWkyeGpmIn0.PlbqOdRPcKco2Om04CMrRg'
					onViewportChange={(viewport) => {
						setViewport(viewport);
					}}>
					{/* {sampleData.users.map((user) => ( */}
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
