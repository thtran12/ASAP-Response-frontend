import { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import pic from './landingpic.png';
class LandingPage extends Component {
	render() {
		return (
			<div className='landing-container'>
				<div className='center-content'>
					<div className='left'>
						<div className='slogan'>
							<h1>Be Alert.</h1>
							<h1>Be Aware.</h1>
							<h1>Be There.</h1>
						</div>
						<div className='buttons'>
							<Link exact='true' to='/login' className='login-btn'>
								Login
							</Link>
							<Link exact='true' to='/map' className='map-btn'>
								Map
							</Link>
						</div>
					</div>
					<div className='right'>
						<img src={pic} alt='weather' width='450px' height='450px' />
					</div>
				</div>

				{/* <div className='row mt-5'>
					<div className='col-6 center'>
						<h1>Be Alert.</h1>
						<h1>Be Aware.</h1>
						<h1>Be There.</h1>
						
					</div>
					<div className='col-6'></div>
				</div> */}
			</div>
		);
	}
}

export default LandingPage;
