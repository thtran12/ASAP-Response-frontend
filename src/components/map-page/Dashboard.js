import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ handleSubmit, handleDisplay }) => {
	const [type, setType] = useState('');
	return (
		<div className='dashboard-container'>
			<form className='response'>
				<h1>Emergency Type</h1>
				<div className='emergency-btns'>
					<div className='card'>
						<label for='fire'>
							<input type='radio' id='fire' name='disaster' value='fire' />
							<img
								src='https://s3-alpha-sig.figma.com/img/ffa9/74a9/9071a5fee5ce2b385a3e20f5a9631dc7?Expires=1619395200&Signature=c6etP7~0bFkgUCvBwiqmNTUu5Nq6zOzHR69W1P6ECitoLrB2TvLgSAiAMwd3nneUc5~aongfJnNdJ59~ypI-LJU8pGBVFTX6MPHIGuo0tVw3xXqaW52f4YDF~YZ0982etq2rOw77lvRwRNuOy2fQ9fYZpYOlTVvdMuVZKHHcMh~vODYIkZQujP7YPzVS-11eBY7a34MPWSNxyoX52juJ8OHzvEgMOWaCOi9i9fRyLQTWikjuQE3yNJzT3wURvpJAn8ErRWPm4UE83ZoKUY2A8YnOMlVAFeUcEyuOaaMGzHFVYtLE1LoWCvkJ196TcDV0skatGkuK1LKtSgOu0g-Sbg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
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
								src='https://s3-alpha-sig.figma.com/img/fd19/8d92/bd7867572c8e1a536febf48ccb333ca8?Expires=1619395200&Signature=B5PmHsNT6KJRcEwpEajycO0BRAzQai7Zyi7L6xIT4oMJn7WCYgtyjhQHtil1NOh6FSTQ0ENI6Pd~U8GGMjkloG~M2cdwAmv30x4QzDzaYKuH2x460cmqmLjta3cPalQLUAyedzTr~AE~I7VsQ3Na~g0lI8QGmsJhiAIh-4wMrxVLM6FmJN-b98fCEii03MV~-pbYOjXtJahU-GUtf4TJLDLestWKnkeJ7MA7kzKTqPlwAGqIihSVD8JIKmfCS~rtt7yRiXYGxQVAhG9S4ds4g8IdmkuoSSvOstPCOpn8MmzC1QmNl5-TrwGBK6owU1KB5a0Qw0BC3AANulABYpufIQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
								alt='Earthquake'
							/>
							Earthquake
						</label>
					</div>
					<div className='card card-3'>
						<label for='storm'>
							<input type='radio' id='storm' name='disaster' value='storm' />
							<img
								src='https://s3-alpha-sig.figma.com/img/78fd/3b22/68034ad6b92bdd8aa0a0369809eb9aae?Expires=1619395200&Signature=OfVB1kukpRPfe5XIgHewhLMpk-leZ~TrXtm8ZAzzUtqgzC3rh3dO-EdZSJVSEoiZHaAWoT8EdIuSJ4qo~57OA67lkTz6XcQW2X42jyiAS26Ns3jmh8esRuQIyfvZxF5gFkTlWVvw0lTGBerDTyqQ-QxyQVivCgImasdl~EUTof9ymWEP5xDwwGpZdfWInd-ky6hLF4e5Px5QXYa1GoMy4HudLRdwja1BGNGewrWxeFgx64E116pyDMGUhFDQJiHS9BSQPzu7EqjY3VkiT4ZqQqcRahlKU-HVBRZNkYLHs8gE8oa~uMfOv-~Q5x2AoGx8tQb1gEqM9Nhxawv-XsjzxQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
								alt='Storm'
							/>
							Storm
						</label>
					</div>

					<div className='card card-4'>
						<label for='flood'>
							<input type='radio' id='flood' name='disaster' value='flood' />
							<img
								src='https://s3-alpha-sig.figma.com/img/30bd/f983/eeab1d4e2ac0e986adc2aa534a56b60d?Expires=1619395200&Signature=gW4G6hyjm9dKHAk7G9SGiAg9Pa1twnRDox05ka~MFB5-nPV19JLLv~0nxZJIQgqYVdCy3OgE6hyoqwkvCHFaFHU5JtEcLfOvW6icVdpvKaxtIcK1t7fcWU6uzTfOYIupIH0u9KK8k6-Ch5Wgx5EsS~jfosWUgJpi~4AuUAKyEbGIgv~uR51UlzV9hii5RksftNaVrgbmQbvKlvpdacmYkVqPvp~O~toq9SFMxqIgIzb2Jv-ucSL6Wxinq1yEzWV6eomdb3pHkdJo80KPH~5Mw~SqjOURWxXhQhAQTyWXV-hw~NBXkAr0r5OW9M~~OhCXbmrrmhpq20-~kTOV2OnR~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
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

				<button className='locate-btn' type='button'>
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
							// console.log(
							// 	'longitude: ',
							// 	document.getElementById('longitude').value
							// );
							// console.log(
							// 	'latitude: ',
							// 	document.getElementById('latitude').value
							// );
							// console.log('radius: ', document.getElementById('radius').value);

							var jsonObj = {
<<<<<<< HEAD
								id: "607b0b1fd2caffb3569da4d5",
								title: type,
								description: "some description",
=======
								id: Date.now().toString(),
								title: type,
								description: document.getElementById('desc').value,
>>>>>>> ea61f1179fad20b6934bccd3a686e5b3f4f8e108
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
					<button type='button' className='action-btn' onClick={handleDisplay}>
						View Impact
					</button>
				</div>
			</form>
		</div>
	);
};

export default Dashboard;
