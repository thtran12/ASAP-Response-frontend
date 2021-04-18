import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
	const [type, setType] = useState('');
	return (
		<div className='dashboard-container'>
			<form action='' method='post' className='response'>
				<h1>Emergency Type</h1>

				<label for='fire'>
					<input type='radio' id='fire' name='disaster' value='fire' />
					<img
						src='https://s3-alpha-sig.figma.com/img/ffa9/74a9/9071a5fee5ce2b385a3e20f5a9631dc7?Expires=1619395200&Signature=c6etP7~0bFkgUCvBwiqmNTUu5Nq6zOzHR69W1P6ECitoLrB2TvLgSAiAMwd3nneUc5~aongfJnNdJ59~ypI-LJU8pGBVFTX6MPHIGuo0tVw3xXqaW52f4YDF~YZ0982etq2rOw77lvRwRNuOy2fQ9fYZpYOlTVvdMuVZKHHcMh~vODYIkZQujP7YPzVS-11eBY7a34MPWSNxyoX52juJ8OHzvEgMOWaCOi9i9fRyLQTWikjuQE3yNJzT3wURvpJAn8ErRWPm4UE83ZoKUY2A8YnOMlVAFeUcEyuOaaMGzHFVYtLE1LoWCvkJ196TcDV0skatGkuK1LKtSgOu0g-Sbg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
						alt='Fire'
					/>
					Fire
				</label>
				<br />

				<label for='earthquake'>
					<input
						type='radio'
						id='earthquake'
						name='disaster'
						value='earthquake'
					/>
					<img
						src='https://s3-alpha-sig.figma.com/img/ffa9/74a9/9071a5fee5ce2b385a3e20f5a9631dc7?Expires=1619395200&Signature=c6etP7~0bFkgUCvBwiqmNTUu5Nq6zOzHR69W1P6ECitoLrB2TvLgSAiAMwd3nneUc5~aongfJnNdJ59~ypI-LJU8pGBVFTX6MPHIGuo0tVw3xXqaW52f4YDF~YZ0982etq2rOw77lvRwRNuOy2fQ9fYZpYOlTVvdMuVZKHHcMh~vODYIkZQujP7YPzVS-11eBY7a34MPWSNxyoX52juJ8OHzvEgMOWaCOi9i9fRyLQTWikjuQE3yNJzT3wURvpJAn8ErRWPm4UE83ZoKUY2A8YnOMlVAFeUcEyuOaaMGzHFVYtLE1LoWCvkJ196TcDV0skatGkuK1LKtSgOu0g-Sbg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
						alt='Fire'
					/>
					Earthquake
				</label>
				<br />

				<label for='storm'>
					<input type='radio' id='storm' name='disaster' value='storm' />
					<img
						src='https://s3-alpha-sig.figma.com/img/ffa9/74a9/9071a5fee5ce2b385a3e20f5a9631dc7?Expires=1619395200&Signature=c6etP7~0bFkgUCvBwiqmNTUu5Nq6zOzHR69W1P6ECitoLrB2TvLgSAiAMwd3nneUc5~aongfJnNdJ59~ypI-LJU8pGBVFTX6MPHIGuo0tVw3xXqaW52f4YDF~YZ0982etq2rOw77lvRwRNuOy2fQ9fYZpYOlTVvdMuVZKHHcMh~vODYIkZQujP7YPzVS-11eBY7a34MPWSNxyoX52juJ8OHzvEgMOWaCOi9i9fRyLQTWikjuQE3yNJzT3wURvpJAn8ErRWPm4UE83ZoKUY2A8YnOMlVAFeUcEyuOaaMGzHFVYtLE1LoWCvkJ196TcDV0skatGkuK1LKtSgOu0g-Sbg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
						alt='Fire'
					/>
					Storm
				</label>
				<br />

				<label for='flood'>
					<input type='radio' id='flood' name='disaster' value='floor' />
					<img
						src='https://s3-alpha-sig.figma.com/img/ffa9/74a9/9071a5fee5ce2b385a3e20f5a9631dc7?Expires=1619395200&Signature=c6etP7~0bFkgUCvBwiqmNTUu5Nq6zOzHR69W1P6ECitoLrB2TvLgSAiAMwd3nneUc5~aongfJnNdJ59~ypI-LJU8pGBVFTX6MPHIGuo0tVw3xXqaW52f4YDF~YZ0982etq2rOw77lvRwRNuOy2fQ9fYZpYOlTVvdMuVZKHHcMh~vODYIkZQujP7YPzVS-11eBY7a34MPWSNxyoX52juJ8OHzvEgMOWaCOi9i9fRyLQTWikjuQE3yNJzT3wURvpJAn8ErRWPm4UE83ZoKUY2A8YnOMlVAFeUcEyuOaaMGzHFVYtLE1LoWCvkJ196TcDV0skatGkuK1LKtSgOu0g-Sbg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
						alt='Fire'
					/>
					Flood
				</label>
				<br />

				<label for='location'> Location </label>
				<input type='text' id='location' name='location' />
				<button>Locate</button>
				<label for='radius'> Radius </label>
				<input type='number' id='location' name='location' min='0' />
				<br />
				<button type='submit'>Submit</button>
				<button>View Impact</button>
			</form>
			{/* <h1>Emergency Type</h1>
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
			<h1>Radius:</h1> */}
		</div>
	);
};

export default Dashboard;
