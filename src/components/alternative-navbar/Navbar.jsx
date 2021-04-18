import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../icons/logo.png';
const Navbar = () => {
	return (
		<div className='nav'>
			<Link className='nav-item' to='#'>
				About{' '}
			</Link>
			<Link className='nav-item' to='#'>
				Contact{' '}
			</Link>
			<Link className='nav-title' to='/'>
				<img className='nav-logo' src={logo} alt='' />
				ASAP Response{' '}
			</Link>
			<Link className='nav-item' to='#'>
				Updates{' '}
			</Link>
			<Link className='nav-item' to='#'>
				Sponsors{' '}
			</Link>
		</div>
	);
};

export default Navbar;
