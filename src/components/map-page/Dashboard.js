import React, { useState } from 'react';
import './Dashboard.css';
const Dashboard = () => {
	const [type, setType] = useState('');
	return (
		<div className='dashboard-container'>
			<h1>Emergency Type</h1>
			<div className='emergency-container'>
				<ul>
					<li>
						<button className='emergency-type'>Fire</button>
					</li>
					<li>
						<button className='emergency-type'>Earthquake</button>
					</li>
					<li>
						<button className='emergency-type'>Storm & Thunder</button>
					</li>
				</ul>
			</div>
			<h1>Location: </h1>
			<h1>Radius:</h1>
		</div>
	);
};

export default Dashboard;
