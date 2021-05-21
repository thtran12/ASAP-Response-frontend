import React from 'react';
import './Dashboard.css';
import earthquake from '../../icons/earthquake.png'
import fire from '../../icons/fire.png'
import storm from '../../icons/storm.png'
import flood from '../../icons/flood.png'
const Dashboard = ({ handleSubmit, handleDisplay, marker }) => {
	return (
		<div className='dashboard-container'>
			<form className='response'>
				<h1>Emergency Type</h1>
				<div className='emergency-btns'>
					<div className='card'>
						<label for='fire'>
							<input type='radio' id='fire' name='disaster' value='fire' />
							<img
								src={fire}
								alt='Fire'
							/>
							Fire
						</label>
					</div>
					<div className='card card-2'>
						<label for='earthquake'>
							<input
								type='radio'
								id='earthquake'
								name='disaster'
								value='earthquake'
							/>
							<img
								src={earthquake}
								alt='Earthquake'
							/>
							Earthquake
						</label>
					</div>
					<div className='card card-3'>
						<label for='storm'>
							<input type='radio' id='storm' name='disaster' value='storm' />
							<img
								src={storm}
								alt='Storm'
							/>
							Storm
						</label>
					</div>

					<div className='card card-4'>
						<label for='flood'>
							<input type='radio' id='flood' name='disaster' value='flood' />
							<img
								src={flood}
								alt='Flood'
							/>
							Flood
						</label>
					</div>
				</div>
				<div className='row location-row'>
					<label for='location'>Description</label>
					<textarea
						name='comment'
						id='desc'
						form='usrform'
						placeholder='Enter text here...'></textarea>
				</div>
				<div className='row location-row'>
					<label for='location'>Location</label>
					<input
						type='number'
						id='longitude'
						name='longitude'
						placeholder='Longitude'
					/>
					<input
						type='number'
						id='latitude'
						name='latitude'
						placeholder='Latitude'
					/>
				</div>
				<button
					className='locate-btn'
					type='button'
					onClick={(e) => {
						document.getElementById('longitude').value = marker.longitude;
						document.getElementById('latitude').value = marker.latitude;
					}}>
					Locate
				</button>

				<div className='row radius-row'>
					<label for='radius'>Radius </label>
					<input
						type='number'
						id='radius'
						placeholder='Enter in miles'
						name='location'
						min='0'
					/>
				</div>
				<div className='row'>
					<button
						type='submit'
						onClick={(e) => {
							e.preventDefault();
							var radios = document.getElementsByName('disaster');
							var type = '';
							for (var radio of radios) {
								if (radio.checked) {
									type = radio.value;
								}
							}
							var lat = document.getElementById('latitude').value;
							var long = document.getElementById('longitude').value;
							var rad = document.getElementById('radius').value;
							var desc = document.getElementById('desc').value;
							var jsonObj = {
								id: '607b0b1fd2caffb3569da4d5',
								title: type,
								description: desc,
								latitude: lat,
								longitude: long,
								radius: rad,
							};
							console.log('Form submission recieved', jsonObj);
							handleSubmit(jsonObj);
						}}
						className='submit-btn'>
						Send Alert
					</button>
					<button
						type='button'
						className='action-btn'
						onClick={(e) => {
							e.preventDefault();
							var radios = document.getElementsByName('disaster');
							var type = '';
							for (var radio of radios) {
								if (radio.checked) {
									type = radio.value;
								}
							}
							var lat = document.getElementById('latitude').value;
							var long = document.getElementById('longitude').value;
							var rad = document.getElementById('radius').value;
							var jsonObj = {
								id: '607b0b1fd2caffb3569da4d5',
								title: type,
								description: 'some description',
								latitude: lat,
								longitude: long,
								radius: rad,
							};
							if (lat.length && long.length && rad.length) {
								handleDisplay(jsonObj);
							}
						}}>
						View Impact
					</button>
				</div>
			</form>
		</div>
	);
};

export default Dashboard;
