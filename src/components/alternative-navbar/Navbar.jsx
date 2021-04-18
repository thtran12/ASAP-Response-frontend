import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
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
				<img
					className='nav-logo'
					src='https://s3-alpha-sig.figma.com/img/7ba4/c519/dca7313b42cca86089980f6c70292908?Expires=1619395200&Signature=dEy2tZlyvq7fUDazBWRO-tM9REkU~TEo7DA-y4BN8NpysoTfqA5Dlo2nbW1RDpTCpX5X9LE6eJkOHdkmtqulqBU2qmY07TSraY1njiqZr7LRYotUpn8YrruFK2IW3YuHaRonTmj6klGEgCiXxZTV25w9TtTrpUXt479OEUrGZAFGQF4luiezDPH29O8O~ACUotC4XcsWQFzx7c7gW4H7LCWAuJupRtG5HxAZN3vgKrJlQKRHuyP83ODOEnNCOFq7l1tLolFFW2PVPEZzn9YfBsXdfiCMVpcH0VZUQNIDwpaA2YZiAhjpnKBwK2iui-iO-52lA~xLC-8KsJiPStUNTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
					alt=''
				/>
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
