import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
		<Fragment>
			<ul className="navbar-nav">
				<li class="nav-item">
					<Link to="/signin" className="nav-item nav-link">
						<span className="icon-text">LOGIN</span>
					</Link>
				</li>
				<li class="nav-item border-button">
					<Link to="/signup" className="nav-item nav-link">
						<span className="icon-text">JOIN US</span>
					</Link>
				</li>
			</ul>
    	</Fragment>
    )
}

export default SignedOutLinks;