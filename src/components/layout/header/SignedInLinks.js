import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardUser, faArrowRightFromBracket, faGear } from '@fortawesome/free-solid-svg-icons';

const SignedInLinks = (props) => {
    return (
		<Fragment>
			<ul className="navbar-nav">
				<li className="nav-item dropdown">
					<Link className="nav-link dropdown-toggle" to="" id="welcomeUser" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<FontAwesomeIcon icon={faClipboardUser} className='welcome-svg'/>
					<span className="icon-text">Welcome, { props.user.username }</span>
					</Link>
					<div className="dropdown-menu" aria-labelledby="welcomeUser">
					<Link className="dropdown-item" to='/profile'>
						<FontAwesomeIcon icon={faGear} className='gear-svg'/>
						<span className="dropdown-text">Profile Settings</span>
					</Link>
					<Link className="dropdown-item" to='/signout'>
						<FontAwesomeIcon icon={faArrowRightFromBracket} className='logout-svg'/>
						<span className="dropdown-text">Sign Out</span>
					</Link>
					</div>
				</li>
			</ul>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
};

export default connect(mapStateToProps, null)(SignedInLinks);