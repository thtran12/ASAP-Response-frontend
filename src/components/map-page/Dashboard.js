import React from 'react';
import './Dashboard.css';
const Dashboard = () => {
	return (
		<div className='dashboard-container'>
			<h1>Title</h1>
			<h1>Type of Emergency</h1>
			<ul>
				<li>Fire</li>
				<li>Earthquake</li>
				<li>High Wind</li>
				<li></li>
			</ul>
			<h1>Location</h1>
			<h1>Radius</h1>
		</div>
	);
};

export default Dashboard;
